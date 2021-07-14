import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceEleveComponent } from './interface-eleve.component';

describe('InterfaceEleveComponent', () => {
  let component: InterfaceEleveComponent;
  let fixture: ComponentFixture<InterfaceEleveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceEleveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
