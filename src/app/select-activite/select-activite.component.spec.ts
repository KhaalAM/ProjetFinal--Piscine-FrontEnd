import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectActiviteComponent } from './select-activite.component';

describe('SelectActiviteComponent', () => {
  let component: SelectActiviteComponent;
  let fixture: ComponentFixture<SelectActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectActiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
