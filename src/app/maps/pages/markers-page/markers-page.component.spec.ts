import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkersPageComponent } from './markers-page.component';

describe('MarkersPageComponent', () => {
  let component: MarkersPageComponent;
  let fixture: ComponentFixture<MarkersPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkersPageComponent]
    });
    fixture = TestBed.createComponent(MarkersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
