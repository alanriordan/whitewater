import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaResultsComponent } from './gala-results.component';

describe('GalaResultsComponent', () => {
  let component: GalaResultsComponent;
  let fixture: ComponentFixture<GalaResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
