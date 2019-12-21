import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  audienceMatricData: any;
  chartData: any;
  donutLegendData: any;
  groupBarChart:any;
  constructor() { }

  ngOnInit() {
    this.audienceMatricData = [
      { title: "New Users", tag: "65% goals reached", acquireValue: "13,596", value: "20.000", color: "primary" },
      { title: "Page View", tag: "65% goals reached", acquireValue: "13,596", value: "250.000", color: "accent" },
      { title: "Page Session", tag: "65% goals reached", acquireValue: "13,596", value: "85.000", color: "warn" },
      { title: "Bounce Rate", tag: "65% goals reached", acquireValue: "28.50%", value: "30.50%", color: "accent" },
    ]
    this.donutLegendData = [
      { title: "New Users", tag: "65% goals reached", acquireValue: "13,596", percent: "20%", color: "primary" },
      { title: "Page View", tag: "65% goals reached", acquireValue: "13,596", percent: "50%", color: "accent" },
      { title: "Page Session", tag: "65% goals reached", acquireValue: "13,596", percent: "85%", color: "warn" },
      { title: "Bounce Rate", tag: "65% goals reached", acquireValue: "28.50%", percent: "30%", color: "accent" },
    ]
    this.groupBarChart = [
      {
        "year": "2005",
        "money": "550",
        "number": "35"
      },
      {
        "year": "2006",
        "money": "600",
        "number": "40"
      },
      {
        "year": "2007",
        "money": "700",
        "number": "45"
      },
      {
        "year": "2008",
        "money": "800",
        "number": "60"
      },
      {
        "year": "2009",
        "money": "900",
        "number": "70"
      },
      {
        "year": "2010",
        "money": "850",
        "number": "65"
      },
      {
        "year": "2011",
        "money": "880",
        "number": "67"
      },
      {
        "year": "2012",
        "money": "900",
        "number": "70"
      },
      {
        "year": "2013",
        "money": "1000",
        "number": "75"
      }
    ]
    this.chartData = [{
      "headerIndicatorName": "Break up of participants of media demonstrations\n",
      "headerIndicatorValue": null,
      "chartDataValue": [[{
        "axis": "Adolescent",
        "value": "9.9",
        "id": 158,
        "legend": "Adolescent",
        "cssClass": null,
        "unit": "Percentage",
        "numerator": "1826",
        "denominator": "18490",
        "label": null,
        "key": null
      }, {
        "axis": "WRA",
        "value": "47.3",
        "id": 159,
        "legend": "WRA",
        "cssClass": null,
        "unit": "Percentage",
        "numerator": "8745",
        "denominator": "18490",
        "label": null,
        "key": null
      }, {
        "axis": "Pregnant women",
        "value": "1.9",
        "id": 160,
        "legend": "Pregnant women",
        "cssClass": null,
        "unit": "Percentage",
        "numerator": "358",
        "denominator": "18490",
        "label": null,
        "key": null
      }, {
        "axis": "Older Women",
        "value": "11.7",
        "id": 161,
        "legend": "Older Women",
        "cssClass": null,
        "unit": "Percentage",
        "numerator": "2170",
        "denominator": "18490",
        "label": null,
        "key": null
      }, {
        "axis": "Men",
        "value": "29.2",
        "id": 162,
        "legend": "Men",
        "cssClass": null,
        "unit": "Percentage",
        "numerator": "5391",
        "denominator": "18490",
        "label": null,
        "key": null
      }
      ]],
      "legends": [{
        "cssClass": "#800101",
        "value": "Adolescent",
        "color": null,
        "range": null,
        "startRange": null,
        "endRange": null
      }, {
        "cssClass": "#f63712",
        "value": "WRA",
        "color": null,
        "range": null,
        "startRange": null,
        "endRange": null
      }, {
        "cssClass": "#e99e1f",
        "value": "Pregnant women",
        "color": null,
        "range": null,
        "startRange": null,
        "endRange": null
      }, {
        "cssClass": "#ad4807",
        "value": "Older Women",
        "color": null,
        "range": null,
        "startRange": null,
        "endRange": null
      }, {
        "cssClass": "#f1af62",
        "value": "Men",
        "color": null,
        "range": null,
        "startRange": null,
        "endRange": null
      }
      ]
    }
    ]

  }

}
