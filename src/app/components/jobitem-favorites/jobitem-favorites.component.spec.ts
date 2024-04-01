import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobitemFavoritesComponent } from './jobitem-favorites.component';

describe('JobitemFavoritesComponent', () => {
  let component: JobitemFavoritesComponent;
  let fixture: ComponentFixture<JobitemFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobitemFavoritesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobitemFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
