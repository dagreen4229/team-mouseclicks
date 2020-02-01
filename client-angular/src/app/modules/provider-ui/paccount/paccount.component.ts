import { Component, OnInit, Input } from '@angular/core';
import { Puser } from 'src/app/models/puser'
import { pprofile } from 'src/app/models/pprofile'
import { fromEventPattern } from 'rxjs';

import { ProviderProfileService } from 'src/app/Shared/services/provider-profile.service'

@Component({
  selector: 'app-paccount',
  templateUrl: './paccount.component.html',
  styleUrls: ['./paccount.component.css']
})
export class PaccountComponent implements OnInit {
  @Input() Puser: Puser;

  pprofiles: pprofile [];

  getProviderProfiles(): void {
    this.ProviderProfileService.getProviderProfiles().subscribe(p2 => this.pprofiles = p2)
  };

  constructor(private ProviderProfileService: ProviderProfileService) { }

  ngOnInit() {
    this.getProviderProfiles()
  }

}
