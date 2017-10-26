import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CameraPage } from "../pages/camera/camera";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from "@ionic-native/camera";
import { Base64ToGallery } from "@ionic-native/base64-to-gallery";
import { SpinnerDialog } from "@ionic-native/spinner-dialog";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CameraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CameraPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusBar,
    SplashScreen,
    Camera,
    Base64ToGallery,
    SpinnerDialog
  ]
})
export class AppModule {}
