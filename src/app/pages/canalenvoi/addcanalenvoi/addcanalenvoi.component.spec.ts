import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcanalenvoiComponent } from './addcanalenvoi.component';

describe('AddcanalenvoiComponent', () => {
  let component: AddcanalenvoiComponent;
  let fixture: ComponentFixture<AddcanalenvoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcanalenvoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcanalenvoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
