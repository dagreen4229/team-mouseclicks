import { Component, OnInit, Input } from '@angular/core';
import { Puser } from 'src/app/models/puser'
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-paccount',
  templateUrl: './paccount.component.html',
  styleUrls: ['./paccount.component.css']
})
export class PaccountComponent implements OnInit {
  @Input() Puser: Puser;

  constructor() { }

  ngOnInit() {
  }

}
