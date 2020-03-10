import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../_services/policy.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  policy: any = {};

  constructor(private policyService: PolicyService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  loadPolicy() {
    this.policyService.getPolicy(this.policy.policyNumber).subscribe((res) => {
      this.policy.url = res.url;
      window.open(res.url, "_blank");

    }, error => {
      this.alertify.error(error);
    })
  }

}
