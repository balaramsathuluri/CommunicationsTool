import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-comms-root',
  templateUrl: './comms-root.component.html',
  styleUrls: ['./comms-root.component.css']
})
export class CommsRootComponent implements OnInit {
  rcaForm: FormGroup;
  jsondata: any;
  alerttypes = ['Alert', 'AME Lead Request', 'Customer Reported Incident', 'Dual Alert'];
  microsoftLogo : string = '../../assets/images/microsoft-logo-2x.png';
  constructor(private fb: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.rcaForm = this.fb.group({
      id: ['', Validators.required], 
      issuedef: [''], 
      subject: [''],
      status: [''], 
      cause:[''],
      rootCause:[''], 
      nextAction: [''], 
      alertType: ['Alert'], 
      customername: ['']
    });
  }

  GetIncedentData(event) {     
    const tempIncidentId = this.rcaForm.get('id').value;

    // getData
    this.apiService.getincidentdata(tempIncidentId).subscribe(x => {
      this.jsondata = x ;
      this.rcaForm.get('issuedef').patchValue(this.jsondata.Title);
      this.rcaForm.get('status').patchValue(this.jsondata.CorrelatinId);
      // this.frm.get('action').patchValue(this.jsondata.RoutingId);
      this.rcaForm.get('customername').patchValue(this.jsondata.CustomerName);
     });

}

}
