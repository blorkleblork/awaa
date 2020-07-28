import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoWideComponent } from './video-wide.component';

describe('VideoWideComponent', () => {
  let component: VideoWideComponent;
  let fixture: ComponentFixture<VideoWideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoWideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
