import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAdjusterComponent } from './add-edit-adjuster.component';

describe('AddEditAdjusterComponent', () => {
  let component: AddEditAdjusterComponent;
  let fixture: ComponentFixture<AddEditAdjusterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditAdjusterComponent]
    });
    fixture = TestBed.createComponent(AddEditAdjusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
