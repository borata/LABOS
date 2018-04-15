import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OznaczeniaComponent } from './oznaczenia.component';

describe('OznaczeniaComponent', () => {
  let component: OznaczeniaComponent;
  let fixture: ComponentFixture<OznaczeniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OznaczeniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OznaczeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
