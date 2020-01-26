import { Component, OnInit, Input } from '@angular/core';
import { cprofile } from 'src/app/models/cprofile';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-client',
  templateUrl: './display-client.component.html',
  styleUrls: ['./display-client.component.css']
})
export class DisplayClientComponent implements OnInit {

  @Input() cprofiles: cprofile;

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
