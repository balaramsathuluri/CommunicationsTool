import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../Services/api.service';
import { Incident } from '../Services/incident';

@Component({
  selector: 'app-comms-initial',
  templateUrl: './comms-initial.component.html',
  styleUrls: ['./comms-initial.component.css']
})
export class CommsInitialComponent implements OnInit {
  ameInitialCommsForm: FormGroup;
  alerttypes = ['Alert', 'AME Lead Request', 'Customer Reported Incident', 'Dual Alert'];
  jsondata: any;
  errorMessage: any;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
  }

  ngOnInit() {
    this.ameInitialCommsForm = this.fb.group({
      id: ['', Validators.required],
      issuedef: [''],
      subject: [''],
      status: [''],
      action: [''],
      type: ['Alert'],
      customername: ['']
    });
  }

  onlyNumber(evt) {
    evt = (evt) ? evt : window.event;
    const charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  GetIncedentData(event) {
    const incidentId = this.ameInitialCommsForm.get('id').value; 

    this.apiService.getincidentdata(incidentId).subscribe({
      next: incidentJson => {        
        this.ameInitialCommsForm.get('issuedef').patchValue(incidentJson.Title)
        this.ameInitialCommsForm.get('status').patchValue(incidentJson.CorrelationId)
        this.ameInitialCommsForm.get('customername').patchValue(incidentJson.CustomerName)
      },
      error:err => { this.errorMessage = err }
    });    
  }
}
