import { Component, OnInit, Input, ViewEncapsulation, ElementRef, ViewChild } from "@angular/core";
import * as d3 from "d3";
import * as $ from "jquery";

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DonutComponent implements OnInit {
  @ViewChild('donutChart', { static: true }) private chartContainer: ElementRef;
  @Input() private data: any;

  constructor(private hostRef: ElementRef) { }

  ngOnInit() {
    if (this.data) {
      this.createChart(this.data[0]);
    }
  }
  createChart(data) {
    let mainData = data;
    let legends = data.legends;
    let headerIndicatorName = data.headerIndicatorName
    let chartType = data.chartsAvailable;
    let n = legends, length;
    data = data.chartDataValue[0];
    // legend dimensions
    var legendRectSize = 25; // defines the size of the colored squares in legend
    var legendSpacing = 6; // defines spacing between squares
    let el = this.chartContainer.nativeElement;
    let viewportWidth = $(window).width();
    let divWidth = $(this.hostRef.nativeElement).parent().width();
    d3.select(el).selectAll("*").remove();


    let margin = {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20
    }
    // set width, height
    var y = d3.scaleBand().domain(d3.range(10, n)).range([height, 110]),
      width =
        $(this.hostRef.nativeElement).parent().width() - margin.right - margin.left,
      height = ($(this.hostRef.nativeElement).parent().height()+120);
    margin.left = (($(this.hostRef.nativeElement).parent().width() - width) / 2) ;
    margin.right = ($(this.hostRef.nativeElement).parent().width() - width) / 2;
    var radius = Math.min(width, height) / 2;
    var color = d3.scaleOrdinal().range(
      ["#0E9648", "#F3D329", "#F89C5E", "#AE1F25", "#ad4807"]);
    var chartColor = {
      "Enrolled": "#aedc5c",
      "Left Out": "#f07258"
    }
    var arc = d3.arc()
      .outerRadius(radius).innerRadius(90).cornerRadius(3)
      .padAngle(0.015);

    var pie = d3.pie()
      .value(function (d) {
        return parseFloat(d.value);
      }).sort(null);


    var svg = d3
      .select(el)
      .append("svg")
      .attr("id", "chart")
      .attr("width", width + 20)
      .attr("height", function () {
        if (viewportWidth > 1024) {
          return height + 100
        } else if (viewportWidth == 1024) {
          return height + 30
        } else if (viewportWidth < 1000) {
          return height + 40
        }
      })
      .attr('transform', function (data) {
        if (headerIndicatorName == "Referral of Malnourished children" && viewportWidth > 700) {
          return "translate(20," + (margin.top ) + ")"
        } else {
          return "translate(20," + margin.top + ")"
        }
      })

      .append("g")
      .attr("transform", function () {
        if (viewportWidth > 450) {
          return "translate(" + (width / 2) + "," + (height / 2 + 30) + ")"
        } else {
          return "translate(" + (width / 2 + 20) + "," + (height / 2 + 25) + ")"
        }
      });


    //check for no data availble
    let allNullValues = true;
    for (let j = 0; j < data.length; j++) {
      if (data[j].value != null) {
        allNullValues = false;
        break;
      }
    }

    if (allNullValues ) {
      svg.append("text")
        .attr("transform", "translate(" + ((width / 2) - 470) + ",-35)")
        .attr("x", 0)
        .attr("y", 30)
        .attr("font-size", "25px")
        .style("text-anchor", "middle")
        .text("Data Not Available");
      return;
    }
    else if (allNullValues) {
      svg.append("text")
        .attr("transform", "translate(" + ((width / 2) - 230) + ",-35)")
        .attr("x", function () {
          if (viewportWidth >= 768 && viewportWidth <= 1024) {
            return 100
          }
          if (viewportWidth == 767) {
            return -50
          }
          if (viewportWidth <= 608 && viewportWidth > 380) {
            return 20
          }
          if (viewportWidth <= 360) {
            return 120
          } else {
            return 0
          }
        })
        .attr("y", 30)
        .attr("font-size", "25px")
        .style("text-anchor", "middle")
        .text("Data Not Available");
      return;
    }
    function pieChart(data) {
      var g = svg.selectAll(
        ".arc").data(
          pie(data))
        .enter()
        .append("g")
        .attr("class", "arc")
        .attr("align", "left");

      g.append("path")
        .attr("d", arc)
        .attr("class", "pie-path")
        .style("cursor", (d) => {
          if (d.value) {
            return 'pointer'
          }
          else {
            return 'default'
          }
        })

        .on("mouseout", function (d) {
          removePopovers();
          d3.select(this).style("opacity", "1");
        })
        .transition()
        .delay(
          function (d, i) {
            return i * 1;
          })
        .duration(1000)
        .attrTween('d', function (d) {
          var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
          return function (t) {
            d.endAngle = i(t);
            return arc(d);
          };
        })
        .attr("class", function (d) {
          if (d.endAngle)
            return d.data.label;
          else
            return d.data.label
              + " zeroValue";
        })
        .style("opacity", "1")
        .style("fill", function (d, i) {
          return legends[i].cssClass;
        })



      function removePopovers() {
        $('.popover').each(function () {
          $(this).remove();
        });
      }
      $(".percentVal")
        .delay(1500)
        .fadeIn();
    }
    function wordwrap(text) {
      var lines = text.split(/\s+/)
      return lines
    }
    pieChart(data);
  }
}

