
import { Component, OnInit } from '@angular/core';
import { SendgridService } from '././service/sendgrid.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }),
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'Contact';
  public data: any = []

  //constructor(private sendgridService: SendgridService){}

  ngOnInit() { }
  private url = 'https://us-central1-probalance-214005.cloudfunctions.net/httpEmail?sg_key=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';

  constructor(private _http: HttpClient, sendgridSevice: SendgridService) { }
  send() {
    let params: URLSearchParams = new URLSearchParams();

    params.set('to', 'work.brien@gmail.com');
    params.set('from', 'you@yoursupercoolapp.com');
    params.set('subject', 'test-email');
    params.set('content', 'Hey! Your API implementation work!');

    return this._http.post(this.url, params, httpOptions).subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client Side Error : " + err.error.message)
          console.log("Here is my payload" + params)
        } else {
          console.log("Server Side Error  : " + err.message + " " + err.type)
          console.log("Here is my payload " + params)
        }

      });

    // grecaptcha.ready(function () {
    //   grecaptcha.execute('6Lcw2WkUAAAAAM4rpKj9eLjvKwcjVOuAaPT3Xkmx', { action: 'homepage' })
    //     .then(function (token) {
    //       document.getElementById('g-recaptcha-response').value = token
    //     });
    // });
  }
}
