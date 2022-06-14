import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementActiviteComponent } from './paiement-activite.component';

describe('PaiementActiviteComponent', () => {
  let component: PaiementActiviteComponent;
  let fixture: ComponentFixture<PaiementActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementActiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
