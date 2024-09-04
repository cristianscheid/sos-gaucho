import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StoriesResponse } from '../types/stories-response.type';
import { Observable } from 'rxjs';
import { API_URL } from '../app.api';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor(private httpClient: HttpClient) {}

  getStories(): Observable<StoriesResponse> {
    return this.httpClient.get<StoriesResponse>(API_URL + '/stories');
  }
}
