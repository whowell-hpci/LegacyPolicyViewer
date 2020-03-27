import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Policy } from '../_models/policy';

@Component({
  selector: 'app-documentList',
  templateUrl: './documentList.component.html',
  styleUrls: ['./documentList.component.css']
})
export class DocumentListComponent implements OnInit {
  @Input() policy: Policy;
  @Input() searchMode;
  @Output() toggleSearch = new EventEmitter
  docsExist: boolean = false;
  isClicked: boolean = false;

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

  

}
