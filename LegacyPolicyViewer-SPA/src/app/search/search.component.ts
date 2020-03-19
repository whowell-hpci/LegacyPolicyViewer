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
  //documents: any = {};
  searchMode = false;

  constructor(private policyService: PolicyService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  searchToggle() {
    this.searchMode = true;
  }

  cancelSearchMode(searchMode: boolean) {
    this.searchMode = searchMode;
  }

  loadPolicy() {
    this.policyService.getPolicy(this.policy.policyNumber).subscribe((res) => {
      this.policy.insuredName = res.insuredName;
      this.policy.policyNumber = res.policyNumber;
      this.policy.documents = res.documents;
      this.policy.claims = res.claims;
      

    }, error => {
      this.alertify.error(error);
    })
  }

}
