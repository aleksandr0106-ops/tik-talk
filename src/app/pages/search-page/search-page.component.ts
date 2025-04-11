import { Component, inject } from '@angular/core';
import { ProfailsService } from '../../data/servises/profails.service';
import { Profile } from '../../data/servises/interface/profiles.interface';
import { ProfailCardComponent } from "../../common-ui/profail-card/profail-card.component";

@Component({
  selector: 'app-search-page',
  imports: [ProfailCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  profileServis = inject(ProfailsService)
  profilse: Profile[] = []

  constructor() {
    this.profileServis.getTestAccounts()
    .subscribe(val => {
      this.profilse = val

    })
  }

}
