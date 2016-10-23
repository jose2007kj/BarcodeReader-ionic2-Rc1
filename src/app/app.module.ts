import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ScanPage } from '../pages/scan/scan';
import {BarcodeScanner} from "ionic-native";
import {ScanResultPage} from '../pages/scan-result/scan-result';
@NgModule({
  declarations: [
    MyApp,
    ScanPage,
    ScanResultPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ScanPage,
    ScanResultPage
  ],
  providers: [BarcodeScanner]
})
export class AppModule {}
