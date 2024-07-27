import { Component } from '@angular/core';
import { WhyMeComponent } from './why-me/why-me.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HomeComponent, WhyMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
