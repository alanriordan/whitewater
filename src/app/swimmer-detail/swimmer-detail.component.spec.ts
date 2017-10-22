import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimmerDetailComponent } from './swimmer-detail.component';

describe('SwimmerDetailComponent', () => {
  let component: SwimmerDetailComponent;
  let fixture: ComponentFixture<SwimmerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimmerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimmerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
