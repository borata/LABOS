import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducenciAdminComponent } from './producenci-admin.component';

describe('ProducenciAdminComponent', () => {
  let component: ProducenciAdminComponent;
  let fixture: ComponentFixture<ProducenciAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducenciAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducenciAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
