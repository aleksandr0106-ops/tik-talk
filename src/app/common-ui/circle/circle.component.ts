import {Component, input} from '@angular/core';
import {ImgUrlPipe} from '../../helpers/pipes/img-url.pipe';


@Component({
  selector: 'app-circle',
  imports: [
    ImgUrlPipe
  ],
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.scss'
})
export class CircleComponent {
  avatarUrl = input<string | null>()
}
