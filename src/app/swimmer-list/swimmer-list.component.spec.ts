import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimmerListComponent } from './swimmer-list.component';

describe('SwimmerListComponent', () => {
  let component: SwimmerListComponent;
  let fixture: ComponentFixture<SwimmerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimmerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimmerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
