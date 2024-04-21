import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaProductionComponent } from './media-production.component';

describe('MediaProductionComponent', () => {
  let component: MediaProductionComponent;
  let fixture: ComponentFixture<MediaProductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaProductionComponent]
    });
    fixture = TestBed.createComponent(MediaProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
