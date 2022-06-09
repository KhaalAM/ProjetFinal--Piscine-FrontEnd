import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteesComponent } from './activitees.component';

describe('ActiviteesComponent', () => {
  let component: ActiviteesComponent;
  let fixture: ComponentFixture<ActiviteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiviteesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiviteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
