import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OznaczeniaAdminComponent } from './oznaczenia-admin.component';

describe('OznaczeniaAdminComponent', () => {
  let component: OznaczeniaAdminComponent;
  let fixture: ComponentFixture<OznaczeniaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OznaczeniaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OznaczeniaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
