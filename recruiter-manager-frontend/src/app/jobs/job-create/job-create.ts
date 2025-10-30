import { Component } from '@angular/core';
import { JobService, Job } from '../../services/job.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-create',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './job-create.html',
  styleUrls: ['./job-create.css']
})
export class JobCreateComponent {
  job: Job = { title: '', description: '', department: '' };

  constructor(private jobService: JobService, private router: Router) { }

  save() {
    this.jobService.createJob(this.job).subscribe({
      next: () => this.router.navigate(['/jobs']),
      error: err => console.error('Erro ao criar vaga:', err)
    });
  }

  cancel() {
    this.router.navigate(['/jobs']);
  }
}
