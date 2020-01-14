import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comms-root-template',
  templateUrl: './comms-root-template.component.html',
  styleUrls: ['./comms-root-template.component.css']
})
export class CommsRootTemplateComponent implements OnInit {

  to = '';
  cc = '';
  mailText = '';

  constructor() { }
  @Input() id: string;
  @Input() issuedef: string;
  @Input() cause: string;
  @Input() status: string;
  @Input() nextAction: string;
  @Input() alertType: string;
  @Input() subject: string;

  ngOnInit() {
  }

  outlookemail() {

    this.selectElementContents(document.getElementById('ameRcaContent'));
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
