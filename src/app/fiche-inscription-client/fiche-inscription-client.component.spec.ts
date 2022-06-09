import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheInscriptionClientComponent } from './fiche-inscription-client.component';

describe('FicheInscriptionClientComponent', () => {
  let component: FicheInscriptionClientComponent;
  let fixture: ComponentFixture<FicheInscriptionClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheInscriptionClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheInscriptionClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
