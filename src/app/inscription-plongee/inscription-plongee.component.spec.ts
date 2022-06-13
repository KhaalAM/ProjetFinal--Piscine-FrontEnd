import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionPlongeeComponent } from './inscription-plongee.component';

describe('InscriptionPlongeeComponent', () => {
  let component: InscriptionPlongeeComponent;
  let fixture: ComponentFixture<InscriptionPlongeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionPlongeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionPlongeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
