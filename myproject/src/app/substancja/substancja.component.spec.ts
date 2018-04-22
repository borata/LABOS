import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubstancjaComponent } from './substancja.component';

describe('SubstancjaComponent', () => {
  let component: SubstancjaComponent;
  let fixture: ComponentFixture<SubstancjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubstancjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubstancjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
