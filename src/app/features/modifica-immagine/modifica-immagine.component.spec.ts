import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaImmagineComponent } from './modifica-immagine.component';

describe('ModificaImmagineComponent', () => {
  let component: ModificaImmagineComponent;
  let fixture: ComponentFixture<ModificaImmagineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaImmagineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaImmagineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
