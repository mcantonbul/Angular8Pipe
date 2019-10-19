import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicusageComponent } from './basicusage.component';

describe('BasicusageComponent', () => {
  let component: BasicusageComponent;
  let fixture: ComponentFixture<BasicusageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicusageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicusageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
