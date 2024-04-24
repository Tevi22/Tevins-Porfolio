import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // This service is provided at the root level, making it available throughout the application
})
export class EmailService {
  private apiUrl = 'https://formspree.io/f/xwkgazqb'; // Backend URL for sending emails

  constructor(private http: HttpClient) { }

  /**
   * Sends an email using the provided form data.
   * @param formData The data to include in the email
   * @returns An Observable representing the HTTP POST request
   */
  sendEmail(formData: any) {
    return this.http.post(this.apiUrl, formData); // Sends a POST request to the specified URL with the provided form data
  }
}
