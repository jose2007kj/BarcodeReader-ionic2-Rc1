import { NavController, NavParams} from "ionic-angular";
import {BarcodeScanner} from "ionic-native";
import { Component } from '@angular/core';
import {ScanResultPage} from '../scan-result/scan-result';

@Component({
  templateUrl: "scan.html"
})

export class ScanPage {
  public scannedText: string;
  
 // public loading: boolean;
  
  constructor(
    private _nav: NavController,
    private _params: NavParams) {
  }

  /** onPageLoaded() {
    this.loading = false;
  } **/

  public scanQR() {
   // this.buttonText = "Loading..";
  //  this.loading = true;

    BarcodeScanner.scan().then((barcodeData) => {
      if (barcodeData.cancelled) {
        console.log("User cancelled the action!");
       // this.buttonText = "Scan";
      //  this.loading = false;
        return false;
      }
      console.log("Scanned successfully!");
      console.log(barcodeData);
      this.goToResult(barcodeData);
    }, (err) => {
      console.log(err);
    });
  }

  private goToResult(barcodeData) {
    this._nav.push(ScanResultPage, {
      scannedText: barcodeData.text
    });
  } 

 /** private checkPass(data) {
  } **/
}
