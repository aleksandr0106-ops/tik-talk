import {Component, input} from '@angular/core';
import {Profile} from '../../data/servises/interface/profiles.interface';
import {ImgUrlPipe} from '../../helpers/pipes/img-url.pipe';
import {CircleComponent} from '../circle/circle.component';

@Component({
  selector: 'app-profile-header',
  imports: [
    ImgUrlPipe,
    CircleComponent
  ],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.scss'
})
export class ProfileHeaderComponent {
  profile = input<Profile>()
}
