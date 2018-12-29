import { Component, OnInit } from '@angular/core';
import { SendgridService } from '././service/sendgrid.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Access-Control-Allow-Origin': '*',
                             'Content-Type': 'application/json', 
                             'Authorization': 'Bearer <<API-Key>>' })
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
  send( from, text, subject ) {
    this.data['to'] = 'work.brien@gmail.com';
    this.data['from'] = 'brienacalloway';
    this.data['subject'] = 'Angular API test';
    this.data['content'] = 'Successfully sent email from Angular App Conrats!';
    console.log(this.data);

    let url = `https://us-central1-probalance-214005.cloudfunctions.net/httpEmail?<<API-Key>>`;

    // params.set('sg_key', '<<API-Keys>>')
    // params.append('to', 'work.brien@gmail.com');
    // params.append('from', 'you@yoursupercoolapp.com');
    // params.append('subject', 'test-email');
    // params.append('content', 'Hey! Your API implementation work!');

    return this._http.post(url, this.data, httpOptions)
                     .toPromise()
                     .then( req => {
                       console.log("Here's your API reponse: " + req)
                     })
                     .catch(err => {
                       console.log("You done messed up A-A-ron: " + err);
                     })

    // grecaptcha.ready(function () {
    //   grecaptcha.execute('6Lcw2WkUAAAAAM4rpKj9eLjvKwcjVOuAaPT3Xkmx', { action: 'homepage' })
    //     .then(function (token) {
    //       document.getElementById('g-recaptcha-response').value = token
    //     });
    // });
  }
}
