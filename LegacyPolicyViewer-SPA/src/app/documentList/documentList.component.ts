import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Policy } from '../_models/policy';
import { ToggleAccordionHeaderDirective } from '../_Directives/toggleAccordionHeader.directive';

@Component({
  selector: 'app-documentList',
  templateUrl: './documentList.component.html',
  styleUrls: ['./documentList.component.css']
})
export class DocumentListComponent implements OnInit {
  @Input() policy: Policy;
  @Input() searchMode;
  policyHeader: string = "Click To Expand";
  claimHeader: string = "Click To Expand";
  @Output() toggleSearch = new EventEmitter
  docsExist: boolean = false;

  ngOnInit() {
    
  }

  documentsExist()
  {
    if (this.policy.documents.length > 0)
    {
      this.docsExist = true;
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
