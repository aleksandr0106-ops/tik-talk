import {Component, inject} from '@angular/core';
import {SvgIconComponent} from '../svg-icon/svg-icon.component';
import {AsyncPipe, JsonPipe, NgForOf} from '@angular/common';
import {SubscriberCardComponent} from './subskriber-card/subscriber-card.component';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ProfileService} from '../../data/servises/profile.service';
import {firstValueFrom} from 'rxjs';
import {ImgUrlPipe} from '../../helpers/pipes/img-url.pipe';

@Component({
  selector: 'app-sidebar',
  imports: [
    SvgIconComponent,
    NgForOf,
    SubscriberCardComponent,
    RouterLink,
    AsyncPipe,
    ImgUrlPipe,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  profileService = inject(ProfileService);


  subscribers$ = this.profileService.getSubscribersShortList()

  me = this.profileService.me



    menuItems = [
      {
        label: 'Моя страница',
        icon: 'vector',
        link: 'profile/me'
      },
      {
        label: 'Чаты',
        icon: 'chat',
        link: 'chat'
      },
      {
        label: 'Поиск',
        icon: 'search',
        link: 'search'
      }
    ]

  ngOnInit() {
    firstValueFrom( this.profileService.getMe())
  }
}
