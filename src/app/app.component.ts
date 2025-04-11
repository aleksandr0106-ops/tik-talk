import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfailCardComponent } from "./common-ui/profail-card/profail-card.component";
import { ProfailsService } from './data/servises/profails.service';
import { Profile } from './data/servises/interface/profiles.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProfailCardComponent],


  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
