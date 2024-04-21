import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaBuyingComponent } from './media-buying.component';

describe('MediaBuyingComponent', () => {
  let component: MediaBuyingComponent;
  let fixture: ComponentFixture<MediaBuyingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaBuyingComponent]
    });
    fixture = TestBed.createComponent(MediaBuyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
