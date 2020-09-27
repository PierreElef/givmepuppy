import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DogService } from 'src/app/services/dog.service';
import { Subscription } from 'rxjs/index';

@Component({
  selector: 'app-breed-card',
  templateUrl: './breed-card.component.html',
  styleUrls: ['./breed-card.component.css']
})
export class BreedCardComponent implements OnInit, OnDestroy {

  @Input()breed: string;
  imgSrc;
  cdSubscription: Subscription;

  constructor(
    private dogService: DogService
  ) { }

  ngOnInit() {
    this.cdSubscription = this.dogService.getRandomImageByBreed(this.breed).subscribe(
      (data) => {
        this.imgSrc = data.message;
      }
    );
  }

  ngOnDestroy() {
    if (this.cdSubscription) {
      this.cdSubscription.unsubscribe();
    }
  }
}
