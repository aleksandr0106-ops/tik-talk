import { Component, Input } from '@angular/core';
import { Profile } from '../../data/servises/interface/profiles.interface';
import { CommonModule } from '@angular/common';
import { ImgUrlPipe } from "../../helpers/pipes/img-url.pipe";

@Component({
  selector: 'app-profail-card',
  standalone: true,
  imports: [CommonModule, ImgUrlPipe],
  templateUrl: './profail-card.component.html',
  styleUrl: './profail-card.component.scss'
})
export class ProfailCardComponent {


  
   @Input() profile!: Profile;
   

}

export class RouterOutlet {
  
}