import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import {  of } from 'rxjs/observable/of';
import { User } from './user';
import { PLATFORM_BROWSER_ID } from '../../node_modules/@angular/common/src/platform_id';

//https://angular.io/tutorial/toh-pt6

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
    url = 'api/users';
    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.url)
        .pipe(tap(users => console.log('fetched users'))
            , catchError(this.handleError('getUsers', [])));
    }

    createUser(user: User): Observable<User>  {
      return this.http.post<User>(this.url, user, httpOptions)
        .pipe(
          tap((user: User) => console.log(`added user w/ id=${user.id}`))
          , catchError(this.handleError<User>('createUser'))
        );
    }

    deleteUser(id: number) {
      return this.http.delete(`${this.url}/${id}`)
      .pipe(catchError(this.handleError('deleteUser', [])));
    }
    
    updateUser (user: User): Observable<any> {
      return this.http.put(this.url, user, httpOptions).pipe(
        tap(_ => console.log(`updated user id=${user.id}`)),
        catchError(this.handleError<any>('updateUser'))
      );
    }

    

    

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
     
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
     
        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);
     
        // Let the app keep running by returning an empty result.
        return of(result as T);
      }
    }

}
