import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionAquaBikeComponent } from './inscription-aqua-bike.component';

describe('InscriptionAquaBikeComponent', () => {
  let component: InscriptionAquaBikeComponent;
  let fixture: ComponentFixture<InscriptionAquaBikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionAquaBikeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionAquaBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
