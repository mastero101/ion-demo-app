import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'power',
    canActivate: [ AuthGuard],
    loadChildren: () => import('./power/power.module').then( m => m.PowerPageModule)
  },
  {
    path: 'bme280',
    canActivate: [ AuthGuard],
    loadChildren: () => import('./bme280/bme280.module').then( m => m.Bme280PageModule)
  },
  {
    path: 'battery',
    canActivate: [ AuthGuard],
    loadChildren: () => import('./battery/battery.module').then( m => m.BatteryPageModule)
  },
  {
    path: 'login',
    canActivate: [ AuthGuard],
    data: { authGuardPipe : redirectLoggedInToHome},
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    canActivate: [ AuthGuard],
    data: { authGuardPipe : redirectLoggedInToHome},
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'camera',
    canActivate: [ AuthGuard],
    data: { authGuardPipe : redirectUnauthorizedToLogin},
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'home',
    canActivate: [ AuthGuard],
    data: { authGuardPipe : redirectUnauthorizedToLogin},
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'power',
    loadChildren: () => import('./power/power.module').then( m => m.PowerPageModule)
  },
  {
    path: 'bme280',
    loadChildren: () => import('./bme280/bme280.module').then( m => m.Bme280PageModule)
  },
  {
    path: 'battery',
    loadChildren: () => import('./battery/battery.module').then( m => m.BatteryPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'external',
    loadChildren: () => import('./external/external.module').then( m => m.ExternalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
