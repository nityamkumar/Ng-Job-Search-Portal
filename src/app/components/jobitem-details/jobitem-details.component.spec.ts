import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobitemDetailsComponent } from './jobitem-details.component';

describe('JobitemDetailsComponent', () => {
  let component: JobitemDetailsComponent;
  let fixture: ComponentFixture<JobitemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobitemDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobitemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
