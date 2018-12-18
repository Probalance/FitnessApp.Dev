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

  constructor(private _http: HttpClient, sendgridSevice: SendgridService) { }
  send() {
    let url = `https://us-central1-probalance-214005.cloudfunctions.net/httpEmail`;
    let params: URLSearchParams = new URLSearchParams();

    params.set('to', 'work.brien@gmail.com');
    params.set('from', 'you@yoursupercoolapp.com');
    params.set('subject', 'test-email');
    params.set('content', 'Hey! Your API implementation work!');

    return this._http.post(url, params, httpOptions)
                     .toPromise()
                     .then( res => {
                       console.log("Here's your API reponse: " + res)
                     })
                     .catch(err => {
                       console.log("You done messed up A-A-ron: " + err)
                     })

    // grecaptcha.ready(function () {
    //   grecaptcha.execute('6Lcw2WkUAAAAAM4rpKj9eLjvKwcjVOuAaPT3Xkmx', { action: 'homepage' })
    //     .then(function (token) {
    //       document.getElementById('g-recaptcha-response').value = token
    //     });
    // });
  }
}
