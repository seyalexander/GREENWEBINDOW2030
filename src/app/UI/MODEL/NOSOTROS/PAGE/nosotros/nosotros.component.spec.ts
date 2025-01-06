import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOSOTROSComponent } from './nosotros.component';

describe('NOSOTROSComponent', () => {
  let component: NOSOTROSComponent;
  let fixture: ComponentFixture<NOSOTROSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NOSOTROSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NOSOTROSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
