import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/send-email'; // Backend URL

  constructor(private http: HttpClient) { }

  sendEmail(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }
}
