import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';


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
              private mediaCapture: MediaCapture) {
    this.options = {};
  }

  takeVideo() {
    this.mediaCapture
        .captureVideo(this.options)
        .then(
          (data: MediaFile[]) => this.captureSuccess(data),
          (err: CaptureError) => this.captureError(err)
        );
  }

  private captureSuccess(mediaFiles) {
    let i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
      path = mediaFiles[i].fullPath;
    }
    this.path = path;
    console.log(this.path);
  };

  private captureError(error) {
    // navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    console.log(error);
  };
}
