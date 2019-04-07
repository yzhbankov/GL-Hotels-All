import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from '../../../models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input()
  public profile: IProfile;

  public ngOnInit(): void {
  }

}
