import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Employee } from './employee';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url:string="/assets/Data/employee.json";
  constructor(private http:HttpClient) { }

  // getEmployees():Observable<IEmployee[]>{
  // return this.http.get<IEmployee[]>(this.url);    
  // }
   getEmployees():Observable<Employee[]>{
  return this.http.get<Employee[]>(this.url).pipe(
    catchError(error=>{
      return Observable.throw('something went wrong',error);
    })
  );
  }

}
