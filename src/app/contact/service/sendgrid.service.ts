import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }),
};

@Injectable({

  providedIn: 'root'

})
export class SendgridService {
  private url = 'https://us-central1-probalance-214005.cloudfunctions.net/httpEmail?sg_key=';

  constructor(private _http: HttpClient ) { }
  send(_mail) {
    let params: URLSearchParams = new URLSearchParams();

    params.set('to', 'user@example.com');
    params.set('from', 'you@yoursupercoolapp.com');
    params.set('subject', 'test-email');
    params.set('content', 'Hello World');

    return this._http.post(this.url, params, httpOptions).subscribe(
    res => {
      console.log(res);
    },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log("Client Side Error : " + err)
        console.log("Here is my payload" + _mail )
      } else {
        console.log("Server Side Error  : " + err)
        console.log("Here is my payload" + _mail )
      }

     });
                    // .toPromise()
                    // .then( res => {
                    //   console.log(res)
                    // })
                    // .catch(err => {
                    //   console.log(err)
                    // })

  }


    // let params = new HttpParams()
    // params.set('to', _mail.data['to']);
    // params.set('from', _mail.data['from']);
    // params.set('subject', _mail.data['subject']);
    // params.set('content', _mail.data['text']);

    // return this._http.post<any>(this.url, _mail, httpOptions).subscribe(
      // res => {
      //   console.log(res.json);
      // },
      // (err: HttpErrorResponse) => {
      //   if (err.error instanceof Error) {
      //     console.log("Client Side Error ")
      //     console.log("Here is my payload" + _mail )
      //   } else {
      //     console.log("Server Side Error  : " + _mail.data)
      //     console.log("Here is my payload" + _mail )
      //   }

      //  });
      
  //}
  
} 
