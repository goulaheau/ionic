import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {
  base64Image: string;

  private options: CameraOptions;

  constructor(private camera: Camera) {
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
}
