import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltabsAdminComponent } from './alltabs-admin.component';

describe('AlltabsAdminComponent', () => {
  let component: AlltabsAdminComponent;
  let fixture: ComponentFixture<AlltabsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlltabsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltabsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
