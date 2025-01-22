import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetsModel1Component } from './targets-model-1.component';

describe('TargetsModel1Component', () => {
  let component: TargetsModel1Component;
  let fixture: ComponentFixture<TargetsModel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetsModel1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetsModel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
