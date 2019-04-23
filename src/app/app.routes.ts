import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component'
import { OrderComponent } from './order/order.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'order', component: OrderComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'}, // redicerionar pára menu ao entrar no compoennt na primeira vez por nao ter nada
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent},
    ]}

]
