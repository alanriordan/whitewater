import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimmerComponent } from './swimmer.component';

describe('SwimmerComponent', () => {
  let component: SwimmerComponent;
  let fixture: ComponentFixture<SwimmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
