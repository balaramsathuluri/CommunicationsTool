// import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ApiService } from '../Services/api.service';
import { BlobService, UploadConfig, UploadParams } from 'angular-azure-blob-service';

@Component({
  selector: 'app-comms-initial-template',
  templateUrl: './comms-initial-template.component.html',
  styleUrls: ['./comms-initial-template.component.css']
})
export class CommsInitialTemplateComponent implements OnInit {
  to = '';
  cc = '';
  mailText = '';
  loc = '';
  microsoftLogoUrl = '../assets/images/MicrosoftLogo.png';
  microsoftAzureLogoUrl = '../assets/images/MicrosoftAzureLogo.png';
  urls = new Array<string>();

  jsondata: any;

  readonly customerlist = [
      {
          name: 'ADMS',
          subname: [
              { name: 'ADMS sandbox' },
              { name: 'ADMS DCPS' },
              { name: 'Delphi ADMS' },
              { name: 'Discovery ADMS' },
              { name: 'HSE ADMS' },
              { name: 'NJ OIT ADMS' },
              { name: 'Orlando Health ADMS' },
              { name: 'Panasonic ADMS' },
              { name: 'Plantronics' },
              {name: 'Qatar MOE ADMS' }
          ]
      },
      {
          name: 'KMC',
          subname: [
              { name: 'kmc' }
          ]
      }
    ];

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.GetCustomerList();
   }

  @Input() id: string;
  @Input() issuedef: string;
  @Input() status: string;
  @Input() action: string;
  @Input() type: string;
  @Input() subject: string;
  @Input() customername: string;

  ngOnInit() {
  }


    outlookemail() {
      const tempCustomerName = this.customername.toUpperCase();

      if (tempCustomerName.indexOf('ADMS') > -1) {
        console.log('ADMS found inside tempCustomerName');
        this.to = ';';
        // this.to = 'Gary.DiPalma@microsoft.com;Ryan.nauman@microsoft.com';
           } else {
            console.log('ADMS Not found inside tempCustomerName');
            this.to = ';';
            // this.to = 'joseph.a.calabrese@kodakalaris.com;Anil.Kurji@Kodakalaris.Com;steven.braunschweiger@kodakalaris.com';
           }

      this.selectElementContents(document.getElementById('htmlbody'));

      this.mailText = 'mailto:' + this.to + '?subject=' + this.subject;

      // alert(this.mailText);
      window.location.href = this.mailText;
  }


  selectElementContents(el) {
    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:one-variable-per-declaration

   const body = document.body;
   let range;
   let sel;

   if (document.createRange && window.getSelection) {
        range = document.createRange();
        sel = window.getSelection();
        sel.removeAllRanges();
        try {
            range.selectNodeContents(el);
            sel.addRange(range);
        } catch (e) {
            range.selectNode(el);
            sel.addRange(range);
        }
      }
      // else if (body.createTextRange) {
      // range = body.createTextRange();
      // range.moveToElementText(el);
      // range.select();
      // }
   document.execCommand('Copy');
   document.getSelection().removeAllRanges();
  }


  detectFiles(event) {
    this.urls = [];
    const files = event.target.files;
    if (files) {
    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.urls.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    }
  }

  GetCustomerList() {
    this.apiService.getCustomerList().subscribe(x => {
      this.jsondata = x ;
      console.log(' Customer List : ' + this.jsondata );

     });
    }

}
