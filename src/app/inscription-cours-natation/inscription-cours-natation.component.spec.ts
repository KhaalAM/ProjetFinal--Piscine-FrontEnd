import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionCoursNatationComponent } from './inscription-cours-natation.component';

describe('InscriptionCoursNatationComponent', () => {
  let component: InscriptionCoursNatationComponent;
  let fixture: ComponentFixture<InscriptionCoursNatationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionCoursNatationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionCoursNatationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
