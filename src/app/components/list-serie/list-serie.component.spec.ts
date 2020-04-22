import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSerieComponent } from './list-serie.component';

describe('ListSerieComponent', () => {
  let component: ListSerieComponent;
  let fixture: ComponentFixture<ListSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
