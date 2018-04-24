import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WprowadzIloscComponent } from './wprowadz-ilosc.component';

describe('WprowadzIloscComponent', () => {
  let component: WprowadzIloscComponent;
  let fixture: ComponentFixture<WprowadzIloscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WprowadzIloscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WprowadzIloscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
