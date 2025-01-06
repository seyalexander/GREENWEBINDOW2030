import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto2Component } from './proyecto-2.component';

describe('Proyecto2Component', () => {
  let component: Proyecto2Component;
  let fixture: ComponentFixture<Proyecto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proyecto2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proyecto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
