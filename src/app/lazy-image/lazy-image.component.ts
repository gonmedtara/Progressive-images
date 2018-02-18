import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {
  public img_background: string = "../../assets/image/cat_20.jpg";
  public img_full: string = "../../assets/image/cat.jpg";
  public img_src: string = this.img_background;
  public img_class: string = "image-background";
  constructor() { }

  ngOnInit() {
    console.log("this.img_src :", this.img_src);
    console.log("this.img_class :", this.img_class);
  }
  showFullImage() {
    console.log("hello show");
    this.img_src = this.img_full;
    this.img_class = "image-full";
    console.log("hello show end");
  }
}
