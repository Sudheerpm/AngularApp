import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAdjusterComponent } from './show-adjuster.component';

describe('ShowAdjusterComponent', () => {
  let component: ShowAdjusterComponent;
  let fixture: ComponentFixture<ShowAdjusterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAdjusterComponent]
    });
    fixture = TestBed.createComponent(ShowAdjusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
