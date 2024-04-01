import { NgFor, NgIf, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Subscription, tap } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { JobSearchInfoService } from '../../services/job-search-info.service';

import { JobInfo } from '../../models/job-info';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-jobitem-details',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, RouterModule, HttpClientModule],
  providers: [JobSearchInfoService], 
  templateUrl: './jobitem-details.component.html',
  styleUrl: './jobitem-details.component.css'
})
export class JobitemDetailsComponent  implements OnInit, OnDestroy {

  jobInfo!: JobInfo;
  subscriptions$: Subscription = new Subscription();
  constructor(
    
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly JobSearchInfoService: JobSearchInfoService
  ) { }
    
  ngOnInit(): void {
    this.getJobDetails();
  }

  getJobDetails(): void {
    const id = this.activatedRoute.snapshot.params['jobId'];
    this.subscriptions$.add(
      this.JobSearchInfoService
        .getJobDetails(id)
        .pipe(
          tap((jobInfo: JobInfo) => {
            this.jobInfo = jobInfo;
          })
        )
        .subscribe()
    );
  }

  goToJobs(): void {
    this.router.navigate(['/jobs']);
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}

