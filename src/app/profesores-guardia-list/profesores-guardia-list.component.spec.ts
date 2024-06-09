import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoresGuardiaListComponent } from './profesores-guardia-list.component';

describe('ProfesoresGuardiaListComponent', () => {
  let component: ProfesoresGuardiaListComponent;
  let fixture: ComponentFixture<ProfesoresGuardiaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoresGuardiaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesoresGuardiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
