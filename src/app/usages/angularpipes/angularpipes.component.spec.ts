import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularpipesComponent } from './angularpipes.component';

describe('AngularpipesComponent', () => {
  let component: AngularpipesComponent;
  let fixture: ComponentFixture<AngularpipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularpipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
