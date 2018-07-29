import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable'

@Injectable({
  providedIn: 'root'
})
export class RandomImageService {

  imageChange: Observable<any>;

  private images = [
    {url: '../../assets/images/bison.jpg', title: "The Buffalo"}
    , {url: '../../assets/images/flower.jpg', title: "The Flower"}
    , {url: '../../assets/images/lake.jpg', title: "The Lake"}
  ];

  constructor() { 
    this.imageChange = new Observable(observer => {
      this.changeLoop(observer);
    });
  }

    changeLoop(observer) {
      setTimeout(() => {
        let imgIndex = this.getRandom(0, 3);
        let image = this.images[imgIndex];
        observer.next(
          {url: image.url, title: image.title, width: this.getRandom(200, 400)});
        this.changeLoop(observer);
      }, this.getRandom(100, 1000));
    }
    
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    getRandomImage(): Observable<any> {
      return this.imageChange;
    }

}
