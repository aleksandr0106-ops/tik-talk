import { Component, inject } from '@angular/core';
import { ProfileService } from '../../data/servises/profile.service';
import { Profile } from '../../data/servises/interface/profiles.interface';
import { ProfileCardComponent } from "../../common-ui/profile-card/profile-card.component";

@Component({
  selector: 'app-search-page',
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  profileService = inject(ProfileService)
  profiles: Profile[] = []

  constructor() {
    this.profileService.getTestAccounts()
    .subscribe(val => {
      this.profiles = val

    })
  }

}
