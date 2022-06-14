import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FetchUserOprions } from '../models/fetchUsersOprions.model';
import { User } from '../models/user.model';
import { UserApiResponse } from '../models/userApiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {
  private url: string = 'https://randomuser.me/api/';
  private fetchDataBtnEvent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public fetchDataBtnEvent$: Observable<boolean> = this.fetchDataBtnEvent.asObservable()

  constructor(private http: HttpClient) { }

  fetchUsers(fetchUsersOprions: FetchUserOprions): Observable<UserApiResponse> {
    return this.http.get<UserApiResponse>(`${this.url}?results=${fetchUsersOprions.numberOfUsers}&nat=${fetchUsersOprions.natoinality}&gender=${fetchUsersOprions.gender}`);
  }

  handleFetchUsersBtnClick(){
    this.fetchDataBtnEvent.next(true);
  }


}
