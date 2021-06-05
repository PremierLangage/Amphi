import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmphiTitleComponent } from './amphi-title.component';

describe('AmphiTitleComponent', () => {
  let component: AmphiTitleComponent;
  let fixture: ComponentFixture<AmphiTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmphiTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmphiTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
