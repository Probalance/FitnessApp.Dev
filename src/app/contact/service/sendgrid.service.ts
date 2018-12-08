import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { ContactComponent } from '../contact.component'

import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {

  headers: new HttpHeaders({

    'Content-Type': 'application/json',

    'Authorization': 'SENDGRID_API_KEY'

  })

};



@Injectable({

  providedIn: 'root'

})

export class SendgridService {


  private url = 'https://api.sendgrid.com/v3/mail/send';


  constructor(private _http: HttpClient) { }


  send(_mail: ContactComponent) {

    return this._http.post<any>(this.url, _mail, httpOptions).subscribe(

      res => {

        console.log(res);

      },

      (err: HttpErrorResponse) => {

        if (err.error instanceof Error) {

          console.log("Client Side Error ")
          
        } else {

          console.log("Server Side Error")
        }

      });

  }

} 