import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from './interface/profiles.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfailsService {

  http = inject(HttpClient)
  
  baseApiUrl = 'https://icherniakov.ru/yt-course/'

  getTestAccounts() {
   return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`);
  }
}
