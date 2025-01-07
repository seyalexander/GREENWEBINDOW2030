import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPrincipalComponent } from './item-principal.component';

describe('ItemPrincipalComponent', () => {
  let component: ItemPrincipalComponent;
  let fixture: ComponentFixture<ItemPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
