import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Game } from '../../game/game';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {
  /**
   * Game instance
   * @private
   * @type {Game}
   * @memberof HomePageModule
   */
  private gameInstance: Game;

  /**
   * Creates an instance of HomePageModule.
   * @memberof HomePageModule
   */
  constructor() {
    this.gameInstance = new Game();
  }
}
