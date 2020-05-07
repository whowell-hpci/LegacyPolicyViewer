import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Policy } from '../_models/policy';
import { ToggleAccordionHeaderDirective } from '../_Directives/toggleAccordionHeader.directive';
import { PolicyService } from '../_services/policy.service';
import { AlertifyService } from '../_services/alertify.service';
import { authorization } from '../_models/authorization';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-documentList',
  templateUrl: './documentList.component.html',
  styleUrls: ['./documentList.component.css']
})
export class DocumentListComponent implements OnInit {
  @Input() policy: Policy;
  @Input() searchMode;
  authorization: any = {};
  policyHeader: string = "Click To Expand";
  claimHeader: string = "Click To Expand";
  @Output() toggleSearch = new EventEmitter
  docsExist: boolean = false;
  authHeader: string = "";
  authUrl: string = "";

  constructor(private http: HttpClient, private policyService: PolicyService, private alertify: AlertifyService) { }

  ngOnInit() {
    
  }

  documentsExist()
  {
    if (this.policy.documents.length > 0)
    {
      this.docsExist = true;
    }
  }

  createPresignedUrl(url) {
    if (url != null)
    {
      this.policyService.getAuthorizedHeader(url).subscribe(res => {
        this.authorization = res;
        window.open(this.authorization.authString, "_blank")
      }, error => {
        this.alertify.error(`There was an error in getting the Object: ${error}`)
      });
      
    }
  }

  searchAgain(){
    this.toggleSearch.emit(false);
  }

  changePolicyHeader(){
    if (this.policyHeader == "Click To Expand")
    {
      this.policyHeader = "Click To Collapse";
    } else {
      this.policyHeader = "Click To Expand";
    }
  }

  changeClaimHeader(){
    if (this.claimHeader == "Click To Expand")
    {
      this.claimHeader = "Click To Collapse";
    } else {
      this.claimHeader = "Click To Expand";
    }
  }


  

}
