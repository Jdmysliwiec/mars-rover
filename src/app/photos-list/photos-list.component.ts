import { Component, OnInit, Input} from '@angular/core';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo.model';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css'],
  providers: [ PhotoService ]
})
export class PhotosListComponent implements OnInit {
  @Input() childPhotos: any[];

  constructor(private photoService: PhotoService) { }

  savePhoto(imgURL: string, camera: string, date: string) {
    let newPhoto: Photo = new Photo(imgURL, camera, date);
    this.photoService.addPhoto(newPhoto);
    alert('This image has been added to your list of saved images.');
  }

  ngOnInit() {
  }

}
