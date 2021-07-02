import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcampagneComponent } from './addcampagne.component';

describe('AddcampagneComponent', () => {
  let component: AddcampagneComponent;
  let fixture: ComponentFixture<AddcampagneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcampagneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcampagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
