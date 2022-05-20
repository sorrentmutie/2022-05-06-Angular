import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RandomUserResponse } from '../randomuser';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  constructor(private http: HttpClient) { }

  getRandomUsers(n: number): Observable<RandomUserResponse> {
      const url = environment.randomusersUrl + n;
      return this.http.get<RandomUserResponse>(url);
  }
}
