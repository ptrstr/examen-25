import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-entry-page',
  imports: [],
  templateUrl: './entry-page.component.html',
  styleUrl: './entry-page.component.scss'
})
export class EntryPageComponent {
  constructor(private http: HttpClient) {}
  someValue: string = 'Currently we have made no requests to the server';

  ngOnInit() {
    this.http.get<{message:string}>('/api/home').subscribe((data) => {
      this.someValue = data.message;
    });
  }
}
