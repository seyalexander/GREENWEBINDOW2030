import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetEvento4Component } from './tarjet-evento-4.component';

describe('TarjetEvento4Component', () => {
  let component: TarjetEvento4Component;
  let fixture: ComponentFixture<TarjetEvento4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetEvento4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetEvento4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
