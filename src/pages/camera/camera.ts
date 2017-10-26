import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from "@ionic-native/base64-to-gallery";

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {
  base64Image: string;
  res: any = '';
  err: any = '';


  private options: CameraOptions;

  constructor(private camera: Camera,
              private base64ToGallery: Base64ToGallery) {
    this.options = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
  }

  takePicture() {
    this.camera.getPicture(this.options).then((imageData) => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  saveInGallery() {
    this.base64ToGallery.base64ToGallery(this.base64Image.replace('data:image/jpeg;base64,', ''), { prefix: '_img' }).then(
      res => {
        console.log('Saved image to gallery ', res);
        this.res = res;
      },
      err => {
        console.log('Error saving image to gallery ', err);
        this.err = err;
      }
    );
  }
}
