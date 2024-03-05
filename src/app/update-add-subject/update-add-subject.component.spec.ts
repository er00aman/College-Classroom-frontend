import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAddSubjectComponent } from './update-add-subject.component';

describe('UpdateAddSubjectComponent', () => {
  let component: UpdateAddSubjectComponent;
  let fixture: ComponentFixture<UpdateAddSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateAddSubjectComponent]
    });
    fixture = TestBed.createComponent(UpdateAddSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
