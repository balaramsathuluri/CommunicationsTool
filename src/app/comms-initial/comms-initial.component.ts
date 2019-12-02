import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-comms-initial',
  templateUrl: './comms-initial.component.html',
  styleUrls: ['./comms-initial.component.css']
})
export class CommsInitialComponent implements OnInit {
  frm: FormGroup;
  alerttypes = ['Alert', 'AME Lead Request', 'Customer Reported Incident', 'Dual Alert'];
  jsondata: any;

  constructor(private fb: FormBuilder, private apiService: ApiService) {

  }

  ngOnInit() {
    this.frm = this.fb.group({
      id: ['', Validators.required], issuedef: [''], subject: [''],
      status: [''], action: [''], type: ['Alert'], customername: ['']
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
      const tempIncidentId = this.frm.get('id').value;

      // getData
      this.apiService.getincidentdata(tempIncidentId).subscribe(x => {
        this.jsondata = x ;
        this.frm.get('issuedef').patchValue(this.jsondata.Title);
        this.frm.get('status').patchValue(this.jsondata.CorrelatinId);
        // this.frm.get('action').patchValue(this.jsondata.RoutingId);
        this.frm.get('customername').patchValue(this.jsondata.CustomerName);
       });

  }
}
