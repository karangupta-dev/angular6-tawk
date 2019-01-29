import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookSocialLoginComponent } from './facebook-social-login.component';

describe('FacebookSocialLoginComponent', () => {
  let component: FacebookSocialLoginComponent;
  let fixture: ComponentFixture<FacebookSocialLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookSocialLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookSocialLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
