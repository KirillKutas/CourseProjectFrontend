import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOffersSliderComponent } from './special-offers-slider.component';

describe('SpecialOffersSliderComponent', () => {
  let component: SpecialOffersSliderComponent;
  let fixture: ComponentFixture<SpecialOffersSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialOffersSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialOffersSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
