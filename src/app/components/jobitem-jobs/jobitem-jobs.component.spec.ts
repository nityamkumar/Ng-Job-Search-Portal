import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobitemJobsComponent } from './jobitem-jobs.component';

describe('JobitemJobsComponent', () => {
  let component: JobitemJobsComponent;
  let fixture: ComponentFixture<JobitemJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobitemJobsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobitemJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
