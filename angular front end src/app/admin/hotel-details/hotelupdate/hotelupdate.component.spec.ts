import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelupdateComponent } from './hotelupdate.component';

describe('HotelupdateComponent', () => {
  let component: HotelupdateComponent;
  let fixture: ComponentFixture<HotelupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
