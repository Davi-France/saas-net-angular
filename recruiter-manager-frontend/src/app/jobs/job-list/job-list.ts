import { Component, OnInit } from '@angular/core';
import { JobService, Job } from '../../services/job.service';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './job-list.html',
  styleUrls: ['./job-list.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getJobs().subscribe({
      next: res => this.jobs = res,
      error: err => console.error('Erro ao carregar vagas:', err)
    });
  }

  formatDate(dateString?: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  goToCreate() {
    this.router.navigate(['/jobs/create']);
  }
}
