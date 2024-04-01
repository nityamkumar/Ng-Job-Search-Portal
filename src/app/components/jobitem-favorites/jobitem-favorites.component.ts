import { NgFor, NgIf, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Jobs } from '../../models/jobs';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-jobitem-favorites',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule, RouterModule],
  templateUrl: './jobitem-favorites.component.html',
  styleUrl: './jobitem-favorites.component.css'
})
export class JobitemFavoritesComponent implements OnInit {
  favoriteJobsList: Jobs[] = [];

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    this.favoriteJobsList = JSON.parse(
      localStorage.getItem('favoriteJobsList')!
    );
  }

  goToJobDetails(id: number): void {
    this.router.navigate(['/jobs', id]);
  }
}
