import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent implements OnInit {
  public img_background: string = "../../assets/image/cat_20.jpg";
  public img_full: string = "https://inst.eecs.berkeley.edu/~cs194-26/fa16/upload/files/proj4/cs194-26-adl/images/cat.jpg";
  public img_src: string = this.img_background;
  public img_class: string = "image-background";
  constructor() { }

  ngOnInit() {
  }
  showFullImage() {
    this.img_src = this.img_full;
    this.img_class = "image-full";
  }
}
