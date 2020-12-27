import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDepositAccountComponent } from './modal-deposit-account.component';

describe('ModalDepositAccountComponent', () => {
  let component: ModalDepositAccountComponent;
  let fixture: ComponentFixture<ModalDepositAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDepositAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDepositAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
