import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaResultsTableComponent } from './gala-results-table.component';

describe('GalaResultsTableComponent', () => {
  let component: GalaResultsTableComponent;
  let fixture: ComponentFixture<GalaResultsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaResultsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
