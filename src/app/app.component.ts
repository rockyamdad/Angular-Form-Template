import { Component } from '@angular/core';
import {ContactStoreService} from "./contact-store.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ContactStoreService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
