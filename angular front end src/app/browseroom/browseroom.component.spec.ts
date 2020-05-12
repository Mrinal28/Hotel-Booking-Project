import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseroomComponent } from './browseroom.component';

describe('BrowseroomComponent', () => {
  let component: BrowseroomComponent;
  let fixture: ComponentFixture<BrowseroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
