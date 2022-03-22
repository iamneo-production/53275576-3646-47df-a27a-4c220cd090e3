import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpaymentComponent } from './viewpayment.component';

describe('ViewpaymentComponent', () => {
  let component: ViewpaymentComponent;
  let fixture: ComponentFixture<ViewpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
