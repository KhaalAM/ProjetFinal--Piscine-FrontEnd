import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInscriptionComponent } from './post-inscription.component';

describe('PostInscriptionComponent', () => {
  let component: PostInscriptionComponent;
  let fixture: ComponentFixture<PostInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
