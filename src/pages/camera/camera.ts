import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Base64ToGallery } from "@ionic-native/base64-to-gallery";

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {
  base64Image: string;
  message : string;

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
    this.message = 'En cours de sauvegarde ...';
    this.base64ToGallery.base64ToGallery(this.base64Image.replace('data:image/jpeg;base64,', ''), { prefix: '_img' }).then(
      res => {
        this.message = `Enregistré à ${res}`;
      },
      err => {
        this.message = `Erreur : ${err}`;
      }
    );
  }
}
