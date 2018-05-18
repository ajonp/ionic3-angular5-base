import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRouteComponent } from './sample-route.component';

describe('SampleRouteComponent', () => {
  let component: SampleRouteComponent;
  let fixture: ComponentFixture<SampleRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
