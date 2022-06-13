import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteDeVisitesComponent } from './carte-de-visites.component';

describe('CarteDeVisitesComponent', () => {
  let component: CarteDeVisitesComponent;
  let fixture: ComponentFixture<CarteDeVisitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteDeVisitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteDeVisitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
