import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-chat-offline',
  templateUrl: './chat-offline.component.html',
  styleUrls: ['./chat-offline.component.css']
})
export class ChatOfflineComponent implements OnInit {

  chatInitialForm= new FormGroup({
    transcriptId:  new FormControl(''),
    customerName: new FormControl('Hello Customer'),
    customerEmail: new FormControl(''),
    customerOfflineMessage: new FormControl('Your offline message'),
    agentResponse: new FormControl('Agent Response')
  });

  constructor() { }

  mailText = '';
  to = '';
  subject : string ="Please Fill Subject?";

  ngOnInit() {
  }

  outlookemail() {
    this.selectElementContents(document.getElementById('chatOffline'));
    this.to= this.chatInitialForm.get('customerEmail').value;
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
