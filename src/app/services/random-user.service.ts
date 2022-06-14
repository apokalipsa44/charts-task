import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchUserOprions } from '../models/fetchUsersOprions.model';
import { User } from '../models/user.model';
import { UserApiResponse } from '../models/userApiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
 private url: string = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  fetchUsers(fetchUsersOprions:FetchUserOprions): Observable<UserApiResponse> {
    return this.http.get<UserApiResponse>(`${this.url}?results=${fetchUsersOprions.numberOfUsers}&nat=${fetchUsersOprions.natoinality}&gender=${fetchUsersOprions.gender}`);
  }


}
