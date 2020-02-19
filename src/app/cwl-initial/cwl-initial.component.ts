import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-cwl-initial',
  templateUrl: './cwl-initial.component.html',
  styleUrls: ['./cwl-initial.component.css']
})
export class CwlInitialComponent implements OnInit {

  cwlInitialForm = new FormGroup({
    incidentId: new FormControl('172587079'),
    incidentType: new FormControl('Alert'),
    customerName : new FormControl('This is customer Name'),
    issueDefinition: new FormControl('This is issue definition'),
    currentStatus: new FormControl('current status'),
    nextAction: new FormControl('Next Action.'),
  });
  
  constructor(private service: ApiService) { }

  subject : string ='';
  to = '';
  cc = '';
  mailText = '';
  issueDef: string ="This is issue definition.";
  currentStatus: string ="This is current status.";
  nextSteps: string ="This is Next Action.";
  errorMessage: any;

  ngOnInit() {
  }

  outlookemail() {

    this.selectElementContents(document.getElementById('cwlInitContent'));
    this.mailText = 'mailto:' + this.to + '?subject=' + this.subject;
    window.location.href = this.mailText;
  }

  selectElementContents(el) {
    // debugger;
    const body = document.body;

    if (document.createRange && window.getSelection) {
      let range = document.createRange();
      let sel = window.getSelection();
      sel.removeAllRanges();
      try {
        range.selectNodeContents(el);
        sel.addRange(range);
      } catch (e) {
        range.selectNode(el);
        sel.addRange(range);
      }
    }
    document.execCommand('Copy');
    document.getSelection().removeAllRanges();
  }

  GetIncedentData() {
    const incidentId = this.cwlInitialForm.get('incidentId').value; 

    this.service.getincidentdata(incidentId).subscribe({
      next: incidentJson => {        
        this.cwlInitialForm.get('customerName').patchValue(incidentJson.CustomerDetails.CustomerName.toString())
        this.to = incidentJson.CustomerDetails.CustomerEmail.toString();
      },
      error:err => { this.errorMessage = err }
    });    
  }
}
