import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferitiIconComponent } from './preferiti-icon.component';

describe('PreferitiIconComponent', () => {
  let component: PreferitiIconComponent;
  let fixture: ComponentFixture<PreferitiIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferitiIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferitiIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
