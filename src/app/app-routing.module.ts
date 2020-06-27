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
    path: 'payment-detail',
    loadChildren: () => import('./payment-detail/payment-detail.module').then( m => m.PaymentDetailPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
