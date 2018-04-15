import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltabsComponent } from './alltabs.component';

describe('AlltabsComponent', () => {
  let component: AlltabsComponent;
  let fixture: ComponentFixture<AlltabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
