import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetEvento2Component } from './tarjet-evento-2.component';

describe('TarjetEvento2Component', () => {
  let component: TarjetEvento2Component;
  let fixture: ComponentFixture<TarjetEvento2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetEvento2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetEvento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
