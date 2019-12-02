import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comms-root-template',
  templateUrl: './comms-root-template.component.html',
  styleUrls: ['./comms-root-template.component.css']
})
export class CommsRootTemplateComponent implements OnInit {

  constructor() { }
  @Input() id: string;
  @Input() issuedef: string;
  @Input() cause: string;  
  @Input() status: string;  
  @Input() nextAction: string;  
  @Input() alertType: string;
  ngOnInit() {
  }

}
