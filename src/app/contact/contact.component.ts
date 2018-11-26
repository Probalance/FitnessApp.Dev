import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'Contact';
  public data: any = []


  constructor(private http: HttpClient) {

  }

  ngOnInit() { }

  save( from, text,subject ) {
    this.data['to'] = 'work.brien@gmail.com';
    this.data['from'] = from;
    this.data['subject'] = subject;
    this.data['text'] = text;
    console.log(this.data);
    this.http.post<any>('/email', this.data).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured. ");
        } else {
          console.log("Server-side error occurred.");
        }
      });
  }
// grecaptcha.ready(function () {
//   grecaptcha.execute('6Lcw2WkUAAAAAM4rpKj9eLjvKwcjVOuAaPT3Xkmx', { action: 'homepage' })
//     .then(function (token) {
//       document.getElementById('g-recaptcha-response').value = token
//     });
// });
}