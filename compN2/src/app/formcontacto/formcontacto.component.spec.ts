import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontactoComponent } from './formcontacto.component';

describe('FormcontactoComponent', () => {
  let component: FormcontactoComponent;
  let fixture: ComponentFixture<FormcontactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcontactoComponent]
    });
    fixture = TestBed.createComponent(FormcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
