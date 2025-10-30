import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface Job {
    id?: number;
    title: string;
    description: string;
    department?: string;
    createdAt?: string;
}

@Injectable({ providedIn: 'root' })
export class JobService {
    private apiUrl = 'http://localhost:5260/api/jobs';

    constructor(private http: HttpClient, private auth: AuthService) { }

    getHeaders() {
        return {
            headers: new HttpHeaders({
                'Authorization': `Bearer ${this.auth.getToken()}`
            })
        };
    }

    getJobs(): Observable<Job[]> {
        return this.http.get<Job[]>(this.apiUrl, this.getHeaders());
    }

    createJob(job: Job): Observable<Job> {
        console.log('Enviando job:', job, 'com token:', this.getHeaders().headers.get('Authorization'));
        return this.http.post<Job>(this.apiUrl, job, this.getHeaders());
    }
}
