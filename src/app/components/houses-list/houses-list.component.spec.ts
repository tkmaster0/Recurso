import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesListComponent } from './houses-list.component';

describe('HouseListComponent', () => {
  let component: HousesListComponent;
  let fixture: ComponentFixture<HousesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HousesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
