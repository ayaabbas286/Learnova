import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecpaymentComponent } from './secpayment.component';

describe('SecpaymentComponent', () => {
  let component: SecpaymentComponent;
  let fixture: ComponentFixture<SecpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecpaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
