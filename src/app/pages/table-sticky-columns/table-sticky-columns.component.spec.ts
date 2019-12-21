import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableStickyColumnsComponent } from './table-sticky-columns.component';

describe('TableStickyColumnsComponent', () => {
  let component: TableStickyColumnsComponent;
  let fixture: ComponentFixture<TableStickyColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableStickyColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableStickyColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
