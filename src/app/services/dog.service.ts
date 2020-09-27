import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  public getBreeds(): Observable<any> {
    return this.http.get('https://dog.ceo/api/breeds/list/all', {
      responseType: 'json'
    });
  }
  public getImagesByBreed(breed): Observable<any> {
    return this.http.get(`https://dog.ceo/api/breed/${breed}/images`, {
      responseType: 'json'
    });
  }
  public getRandomImageByBreed(breed): Observable<any> {
    return this.http.get(`https://dog.ceo/api/breed/${breed}/images/random`);
  }
}
