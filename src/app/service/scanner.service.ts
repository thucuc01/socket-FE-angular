// import { Injectable } from '@angular/core';
// import {DomSanitizer} from '@angular/platform-browser';
// // @ts-ignore
// declare var scanner;
// @Injectable({
//   providedIn: 'root'
// })
// export class ScannerService {
//
//   constructor(private domSanitizer: DomSanitizer) { }
//   public static image = null;
//   public docImage = null;
//   get getImage() {
//     if (ScannerService.image) {
//       // @ts-ignore
//       return this.domSanitizer.bypassSecurityTrustResourceUrl(ScannerService.image);
//     } else {
//       return null;
//     }
//   }
//   viewImage() {
//     // @ts-ignore
//     this.docImage = this.domSanitizer.bypassSecurityTrustResourceUrl(ScannerService.image);
//   }
//   resetImage() {
//     this.docImage = null;
//   }
//   scanDoc() {
//     scanner.scan(this.displayImagesOnPage,
//       {
//         output_settings: [
//           {
//             type: 'return-base64',
//             format: 'jpg'
//           }
//         ]
//       }
//     );
//   }
//   displayImagesOnPage(successful: any, mesg: any, response:any) {
//     if (!successful) { // On error
//       console.error('Failed: ' + mesg);
//       return;
//     }
//
//     if (successful && mesg != null && mesg.toLowerCase().indexOf('user cancel') >= 0) { // User cancelled.
//       console.log('User cancelled');
//       return;
//     }
//
//     const scannedImages = scanner.getScannedImages(response, true, false); // returns an array of ScannedImage
//     ScannerService.image = scannedImages[0].src;
//     // const elementImg = scanner.createDomElementFromModel( {
//     //   name: 'img',
//     //   attributes: {
//     //     class: 'scanned',
//     //     src: scannedImages[0].src
//     //   }
//     // });
//   }
// }
