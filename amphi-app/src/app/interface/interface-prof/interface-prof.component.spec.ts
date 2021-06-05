import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceProfComponent } from './interface-prof.component';

describe('InterfaceProfComponent', () => {
  let component: InterfaceProfComponent;
  let fixture: ComponentFixture<InterfaceProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
