import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlTextComponent } from './pl-text.component';

describe('PlTextComponent', () => {
  let component: PlTextComponent;
  let fixture: ComponentFixture<PlTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
