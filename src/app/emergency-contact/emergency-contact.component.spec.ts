import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyContactComponent } from './emergency-contact.component';

describe('EmergencyContactComponent', () => {
  let component: EmergencyContactComponent;
  let fixture: ComponentFixture<EmergencyContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmergencyContactComponent]
    });
    fixture = TestBed.createComponent(EmergencyContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
