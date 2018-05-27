import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UzytkownicyAdminComponent } from './uzytkownicy-admin.component';

describe('UzytkownicyAdminComponent', () => {
  let component: UzytkownicyAdminComponent;
  let fixture: ComponentFixture<UzytkownicyAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UzytkownicyAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UzytkownicyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
