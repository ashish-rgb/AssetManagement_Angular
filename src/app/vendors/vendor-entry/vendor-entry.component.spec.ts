import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorEntryComponent } from './vendor-entry.component';

describe('VendorEntryComponent', () => {
  let component: VendorEntryComponent;
  let fixture: ComponentFixture<VendorEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
