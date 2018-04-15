import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducenciComponent } from './producenci.component';

describe('ProducenciComponent', () => {
  let component: ProducenciComponent;
  let fixture: ComponentFixture<ProducenciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducenciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducenciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
