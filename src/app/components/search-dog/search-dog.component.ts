import { Component, OnInit, OnDestroy } from '@angular/core';
import { DogService } from 'src/app/services/dog.service';
import { Subscription } from 'rxjs/index';

@Component({
  selector: 'app-search-dog',
  templateUrl: './search-dog.component.html',
  styleUrls: ['./search-dog.component.css']
})
export class SearchDogComponent implements OnInit, OnDestroy {

  filter: string;
  filters;
  breeds;
  cdSubscription: Subscription;

  constructor(
    private dogService: DogService
  ) { }

  ngOnInit() {
    this.breeds = [];
    this.cdSubscription = this.dogService.getBreeds().subscribe(
      (data) => {
        this.breeds = Object.keys(data.message);
        this.filters = Object.keys(data.message);
      }
    );
  }

  onSearchChange() {
    this.filters = [];
    this.breeds.filter(
      breed => {
        if (breed.includes(this.filter)) {
          this.filters.push(breed);
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.cdSubscription) {
      this.cdSubscription.unsubscribe();
    }
  }

}
