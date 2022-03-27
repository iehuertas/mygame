import "pixi";
import "p2";
import * as Phaser from "phaser-ce";

/**
 * Main entry game class
 * @export
 * @class Game
 * @extends {Phaser.Game}
 */
export class Game extends Phaser.Game {
  /**
   * Creates an instance of Game
   * @memberof Game
   */
  constructor() {
    super(800, 600, Phaser.CANVAS, "game", null);
  }
  
}