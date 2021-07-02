import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcanalenvoiComponent } from './listcanalenvoi.component';

describe('ListcanalenvoiComponent', () => {
  let component: ListcanalenvoiComponent;
  let fixture: ComponentFixture<ListcanalenvoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcanalenvoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcanalenvoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
