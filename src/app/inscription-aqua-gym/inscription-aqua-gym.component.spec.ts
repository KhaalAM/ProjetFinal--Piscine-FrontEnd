import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionAquaGymComponent } from './inscription-aqua-gym.component';

describe('InscriptionAquaGymComponent', () => {
  let component: InscriptionAquaGymComponent;
  let fixture: ComponentFixture<InscriptionAquaGymComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionAquaGymComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionAquaGymComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
