import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from '../models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() profile: IProfile;
  constructor() { }

  ngOnInit() {
  }

}
