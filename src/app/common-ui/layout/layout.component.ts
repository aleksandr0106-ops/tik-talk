import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import {ProfailsService} from '../../data/servises/profails.service';


@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  profileService = inject(ProfailsService);

  ngOnInit() {
    this.profileService.getMe().subscribe(value => {
      console.log(value);
    })
  }
}
