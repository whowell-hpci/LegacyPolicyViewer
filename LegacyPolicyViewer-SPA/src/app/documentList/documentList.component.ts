import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Policy } from '../_models/policy';

@Component({
  selector: 'app-documentList',
  templateUrl: './documentList.component.html',
  styleUrls: ['./documentList.component.css']
})
export class DocumentListComponent implements OnInit {
  @Input() policy: Policy;
  @Output() toggleSearch = new EventEmitter

  ngOnInit() {
    
  }

  searchAgain(){
    this.toggleSearch.emit(false);
  }

}
