import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TawkComponent } from './tawk.component';

describe('TawkComponent', () => {
  let component: TawkComponent;
  let fixture: ComponentFixture<TawkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TawkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TawkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
