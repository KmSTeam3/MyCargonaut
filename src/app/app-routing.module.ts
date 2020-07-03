import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'delivery',
    loadChildren: () => import('./delivery/delivery.module').then( m => m.DeliveryPageModule)
  },
  {
    path: 'modal-delivery',
    loadChildren: () => import('./delivery/modal-delivery/modal-delivery.module').then(m => m.ModalDeliveryPageModule)
  },

  {
    path: 'manage-vehicle',
    loadChildren: () => import('./manage-vehicle/manage-vehicle.module').then( m => m.ManageVehiclePageModule)
  },
  {
    path: 'route-search',
    loadChildren: () => import('./route-search/route-search.module').then( m => m.RouteSearchPageModule)
  },
  {
    path: 'transport-search',
    loadChildren: () => import('./transport-search/transport-search.module').then( m => m.TransportSearchPageModule)
  },
  {
    path: 'search-result',
    loadChildren: () => import('./search-result/search-result.module').then( m => m.SearchResultPageModule)
  },
  {
    path: 'list-result',
    loadChildren: () => import('./search-result/list-result/list-result.module').then(m => m.ListResultPageModule)
  },

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'rating-create',
    loadChildren: () => import('./rating-create/rating-create.module').then( m => m.RatingCreatePageModule)
  },
  {
    path: 'user-ratings',
    loadChildren: () => import('./user-ratings/user-ratings.module').then( m => m.UserRatingsPageModule)
  },

  {
    path: 'payment-detail',
    loadChildren: () => import('./payment-detail/payment-detail.module').then( m => m.PaymentDetailPageModule)
  },
  {
    path: 'payment-choice',
    loadChildren: () => import('./payment-choice/payment-choice.module').then( m => m.PaymentChoicePageModule)
  },
  {
    path: 'impressum',
    loadChildren: () => import('./impressum/impressum.module').then( m => m.ImpressumPageModule)
  },
  {
    path: 'payment-success',
    loadChildren: () => import('./payment-success/payment-success.module').then( m => m.PaymentSuccessPageModule)
  },
  {
    path: 'menu-header',
    loadChildren: () => import('./menu-header/menu-header.module').then( m => m.MenuHeaderPageModule)
  },  {
    path: 'dual-search',
    loadChildren: () => import('./dual-search/dual-search.module').then( m => m.DualSearchPageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
