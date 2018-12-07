import { Component, OnInit } from '@angular/core';
import { SendgridService } from './service/sendgrid.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'Contact';
  public data: any = []

  constructor(private sendgridService: SendgridService){}

  ngOnInit() { }


  send(from, text, subject){
    this.data['to'] = 'work.brien@gmail.com';
    this.data['from'] = from;
    this.data['subject'] = subject;
    this.data['text'] = text;
    console.log(this.data);
    this.sendgridService.send(this.data)
    console.log("Testing http data service: " + from + " " + subject+ " " + text);
  }
// grecaptcha.ready(function () {
//   grecaptcha.execute('6Lcw2WkUAAAAAM4rpKj9eLjvKwcjVOuAaPT3Xkmx', { action: 'homepage' })
//     .then(function (token) {
//       document.getElementById('g-recaptcha-response').value = token
//     });
// });
}
