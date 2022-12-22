import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { Routes,RouterModule } from '@angular/router';

const routes : Routes=[
  {
    path:'',
    component:HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomePage
  ]
})
export class HomePageModule {}
