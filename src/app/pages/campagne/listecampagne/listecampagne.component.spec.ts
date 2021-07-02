import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecampagneComponent } from './listecampagne.component';

describe('ListecampagneComponent', () => {
  let component: ListecampagneComponent;
  let fixture: ComponentFixture<ListecampagneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecampagneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecampagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
