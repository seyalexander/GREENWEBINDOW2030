import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDistribucionComponent } from './item-distribucion.component';

describe('ItemDistribucionComponent', () => {
  let component: ItemDistribucionComponent;
  let fixture: ComponentFixture<ItemDistribucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDistribucionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDistribucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
