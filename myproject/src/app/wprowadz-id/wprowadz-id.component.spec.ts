import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WprowadzIdComponent } from './wprowadz-id.component';

describe('WprowadzIdComponent', () => {
  let component: WprowadzIdComponent;
  let fixture: ComponentFixture<WprowadzIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WprowadzIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WprowadzIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
