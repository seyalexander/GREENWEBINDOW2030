import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetEvento3Component } from './tarjet-evento-3.component';

describe('TarjetEvento3Component', () => {
  let component: TarjetEvento3Component;
  let fixture: ComponentFixture<TarjetEvento3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetEvento3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetEvento3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
