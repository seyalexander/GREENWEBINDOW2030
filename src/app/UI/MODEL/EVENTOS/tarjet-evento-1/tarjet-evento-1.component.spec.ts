import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetEvento1Component } from './tarjet-evento-1.component';

describe('TarjetEvento1Component', () => {
  let component: TarjetEvento1Component;
  let fixture: ComponentFixture<TarjetEvento1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetEvento1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetEvento1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
