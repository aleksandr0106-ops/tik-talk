import { Component, Input } from '@angular/core';
import { Profile } from '../../data/servises/interface/profiles.interface';
import { CommonModule } from '@angular/common';
import { ImgUrlPipe } from "../../helpers/pipes/img-url.pipe";

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [CommonModule, ImgUrlPipe],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {



   @Input() profile!: Profile;


}

export class RouterOutlet {

}
