import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MansonryComponent } from './mansonry.component';

describe('MansonryComponent', () => {
  let component: MansonryComponent;
  let fixture: ComponentFixture<MansonryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MansonryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MansonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
