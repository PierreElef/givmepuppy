import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DogService } from 'src/app/services/dog.service';
import { Subscription } from 'rxjs/index';

@Component({
  selector: 'app-find-dog',
  templateUrl: './find-dog.component.html',
  styleUrls: ['./find-dog.component.css']
})
export class FindDogComponent implements OnInit, OnDestroy {

  breed: string;
  images = [];
  imagesFilter: any;
  nbrImages = 3;
  maxImages = 0;
  cdSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService
  ) { }


  ngOnInit() {
    this.breed = this.route.snapshot.params.breed;
    this.cdSubscription = this.dogService.getImagesByBreed(this.route.snapshot.params.breed).subscribe(
      (data) => {
        this.images = data.message;
        this.imagesFilter = data.message.slice(0, (this.nbrImages));
        if (this.images.length < 50) {
          this.maxImages = this.images.length;
        } else {
          this.maxImages = 50;
        }
      }
    );
  }

  onChangeNbrImages() {
    this.imagesFilter = this.images.slice(0, (this.nbrImages));
  }

  ngOnDestroy() {
    if (this.cdSubscription) {
      this.cdSubscription.unsubscribe();
    }
  }

}
