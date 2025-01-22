import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetsModel2Component } from './targets-model-2.component';

describe('TargetsModel2Component', () => {
  let component: TargetsModel2Component;
  let fixture: ComponentFixture<TargetsModel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetsModel2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetsModel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
