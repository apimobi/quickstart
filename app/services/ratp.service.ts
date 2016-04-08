import {Injectable} from 'angular2/core';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class RatpService {

  private _http: Http;
  private _baseURL: string;
  private _headers : Headers;
  private _requestOptions : RequestOptions;

  constructor(http: Http) {
    this._http = http;
    this._baseURL = 'http://api-ratp.pierre-grimaud.fr/v2/';
    this._headers = new Headers();
  }

  /*
   * Get method for the API
   */
  public getLines(context: string = 'rers'): any {
    return this._http.get(this._baseURL+context)
                     .map( (responseData) => {
                                        return this.responseData(responseData.json());
                                      });
  }



  private responseData(data)
  {
    console.log('responseData');
    return data;
  }

  private handleError(error: Response) {
      if (error.json().total == 0) {
          var responseMessage = 'Unknown server error';
      } else {
          var code = error.json().error.code;
          var serverMessage = error.json().error.message;
          var exceptionMessage = error.json().error.exception[0].message;
          var responseMessage = 'Error ('+code+'): '+serverMessage+' ('+exceptionMessage+')';
      }

      // return Observable.throw(responseMessage);
  }
}
