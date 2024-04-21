import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaManagementComponent } from './social-media-management.component';

describe('SocialMediaManagementComponent', () => {
  let component: SocialMediaManagementComponent;
  let fixture: ComponentFixture<SocialMediaManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialMediaManagementComponent]
    });
    fixture = TestBed.createComponent(SocialMediaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
