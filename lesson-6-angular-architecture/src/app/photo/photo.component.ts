import {Component} from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})

export class PhotoComponent {
  public menuShowed: boolean = false;
  protected incr: number = 0.5;

  showPhotoDescr(): boolean {
    this.menuShowed = this.menuShowed !== true;
    this.incr += 0.5;

    return this.menuShowed;
  }
}