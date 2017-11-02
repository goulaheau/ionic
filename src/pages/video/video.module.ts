import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoPage } from './video';
import { MediaCapture } from "@ionic-native/media-capture";
import { LocalNotifications } from "@ionic-native/local-notifications";

@NgModule({
  declarations: [
    VideoPage,
  ],
  imports     : [
    IonicPageModule.forChild(VideoPage),
  ],
  providers   : [
    MediaCapture,
    LocalNotifications
  ]
})
export class VideoPageModule {}
