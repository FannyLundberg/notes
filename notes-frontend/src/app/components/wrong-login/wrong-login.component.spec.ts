import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongLoginComponent } from './wrong-login.component';

describe('WrongLoginComponent', () => {
  let component: WrongLoginComponent;
  let fixture: ComponentFixture<WrongLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
