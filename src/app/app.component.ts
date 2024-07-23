import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EcommerceProductCardComponent } from "./ecommerce-product-card/ecommerce-product-card.component";
import { NewsArticleCardComponent } from "./news-article-card/news-article-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EcommerceProductCardComponent, NewsArticleCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cardComponentChallenge';
}
