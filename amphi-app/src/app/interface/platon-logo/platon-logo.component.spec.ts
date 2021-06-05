import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatonLogoComponent } from './platon-logo.component';

describe('PlatonLogoComponent', () => {
  let component: PlatonLogoComponent;
  let fixture: ComponentFixture<PlatonLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatonLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatonLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
