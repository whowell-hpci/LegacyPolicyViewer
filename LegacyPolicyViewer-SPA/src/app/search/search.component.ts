import { Component, OnInit, ViewChild } from '@angular/core';
import { PolicyService } from '../_services/policy.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  policy: any = {};
  searchMode = false;
  id = "";
  disabled = false;
  @ViewChild('searchForm') formValues;

  constructor(private policyService: PolicyService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  LoadPolicyPost() {
    if (this.policy.policyNumber != null && this.policy.insuredName == null)
    {
      this.policyService.getPolicyByNumber(this.policy.policyNumber).subscribe((res) => {
        this.policy = res;
      }, error => {
        this.alertify.error("You could not be authenticated: " + error.errors);
      });
    }

    if (this.policy.policyNumber == null && this.policy.insuredName != null)
    {
      this.policyService.getPolicyByName(this.policy.insuredName).subscribe((res) => {
        this.policy = res;
      }, error => {
        this.alertify.error("You could not be authenticated: " + error.errors);
      });
    }

    this.disabled = true;
      
  }

  // loadPolicy() {
    
  //   if (this.policy.policyNumber != null && this.policy.insuredName == null)
  //   {
      
  //     this.policyService.getPolicyByNumber(this.policy.policyNumber).subscribe((res) => {
  //       this.policy.insuredName = res.insuredName;
  //       this.policy.policyNumber = res.policyNumber;
  //       this.policy.documents = res.documents;
  //       this.policy.claims = res.claims;
  //     }, error => {
  //       this.alertify.error(error);
  //     })
  //   } 

  //   if (this.policy.insuredName != null && this.policy.policyNumber == null)
  //   {
      
  //     this.policyService.getPolicyByName(this.policy.insuredName).subscribe((res) => {
  //       this.policy.insuredName = res.insuredName;
  //       this.policy.policyNumber = res.policyNumber;
  //       this.policy.documents = res.documents;
  //       this.policy.claims = res.claims;
  //     }, error => {
  //       this.alertify.error(error);
  //     })
  //   }
    
  //   this.disabled = true;
  // }
  
  resetSearch(){
    window.location.reload();
  }
  searchToggle() {
    this.searchMode = true;
  }

  cancelSearchMode(searchMode: boolean) {
    this.searchMode = searchMode;
  }

}
