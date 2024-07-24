import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EcommerceProductCardComponent } from "./ecommerce-product-card/ecommerce-product-card.component";
import { NewsArticleCardComponent } from "./news-article-card/news-article-card.component";
import { ProfileCardComponent } from "./profile-card/profile-card.component";
import { EventCardComponent } from "./event-card/event-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EcommerceProductCardComponent, NewsArticleCardComponent, ProfileCardComponent, EventCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cardComponentChallenge';
}
