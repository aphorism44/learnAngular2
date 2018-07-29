import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subscription } from 'rxjs/Subscription'
import { RandomImageService } from '../random-image.service';

@Component({
  selector: 'app-random-images',
  templateUrl: './random-images.component.html',
  styleUrls: ['./random-images.component.css'],
  providers: [RandomImageService]
})
export class RandomImagesComponent implements OnInit {

  title: 'randomImage';
  randomImage: Observable<any>;
  imageInfo: any;
  imageHistory: any[];

  constructor(private randomImages: RandomImageService) { 
    this.imageInfo = { url: '', title: 'Loading...', width: 400 };
    this.imageHistory = [];
  }

  ngOnInit() {
    this.randomImage = this.randomImages.getRandomImage();
    this.randomImage.subscribe(
      imageData => {
        this.imageInfo = imageData;
        this.imageHistory.push(imageData);
      });
  }

}
