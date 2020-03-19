import { Component, OnInit, Input } from '@angular/core';
import { Policy } from '../_models/policy';

@Component({
  selector: 'app-documentList',
  templateUrl: './documentList.component.html',
  styleUrls: ['./documentList.component.css']
})
export class DocumentListComponent implements OnInit {
  @Input() policy: Policy;

  ngOnInit() {
    
  }



}
