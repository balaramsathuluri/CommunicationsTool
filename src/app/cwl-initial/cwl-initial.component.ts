import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cwl-initial',
  templateUrl: './cwl-initial.component.html',
  styleUrls: ['./cwl-initial.component.css']
})
export class CwlInitialComponent implements OnInit {

  cwlInitialForm = new FormGroup({
    incidentId: new FormControl('12345678'),
    incidentType: new FormControl('Alert'),
    issueDefinition: new FormControl('This is issue definition'),
    currentStatus: new FormControl('current status'),
    nextAction: new FormControl('Next Action.'),
  });
  
  constructor() { }

  subject : string ='';
  to = '';
  cc = '';
  mailText = '';
  issueDef: string ="This is issue definition.";
  currentStatus: string ="This is current status.";
  nextSteps: string ="This is Next Action.";

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

}
