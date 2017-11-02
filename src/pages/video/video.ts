import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { LocalNotifications } from '@ionic-native/local-notifications';


/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector   : 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  path: string;

  private options: CaptureImageOptions;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private localNotifications: LocalNotifications,
              private mediaCapture: MediaCapture) {
    this.options = {limit: 1};
  }

  takeVideo() {
    this.mediaCapture
        .captureVideo(this.options)
        .then(
          (data: MediaFile[]) => this.captureSuccess(data),
          (err: CaptureError) => this.captureError()
        );
  }

  private captureSuccess(mediaFiles) {
    this.path = mediaFiles[0].fullPath;

    this.localNotifications.schedule({
      text: 'Vidéo enregistrée'
    });
  };

  private captureError() {
    this.localNotifications.schedule({
      text: 'Une erreur s\'est produite'
    });
  };
}
