import { NavParams} from "ionic-angular";
import { Component } from '@angular/core';

@Component({
    templateUrl: "scan-result.html"
    // directives: []
})

export class ScanResultPage{
  public scannedText: string;
    constructor(private _params: NavParams){
    this.scannedText = this._params.get("scannedText");
    }

   /** onPageLoaded() {
      
    }**/
}
