import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsehotelsComponent } from './browsehotels.component';

describe('BrowsehotelsComponent', () => {
  let component: BrowsehotelsComponent;
  let fixture: ComponentFixture<BrowsehotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsehotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsehotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
