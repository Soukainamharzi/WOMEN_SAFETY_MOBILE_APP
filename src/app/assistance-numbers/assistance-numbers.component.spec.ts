import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssistanceNumbersComponent } from './assistance-numbers.component';

describe('AssistanceNumbersComponent', () => {
  let component: AssistanceNumbersComponent;
  let fixture: ComponentFixture<AssistanceNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistanceNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistanceNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
