import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Home', url: 'home', icon: 'home'},
    {title: 'Conceptos Basicos', url: 'inicio-cb', icon: 'pulse', isOpen: false, child:[
      {title: 'Corriente', url: 'corriente'},
      {title: 'Voltaje', url: 'voltaje'},
      {title: 'Resistencia', url: 'resistencia'},
      {title: 'Ley de Ohm', url: 'ley-ohm'},
      {title: 'Quiz', url: 'quiz-cb'}
    ]},
    {title: 'Codigo de resistencias', url: 'codigo resistencias', icon: 'nuclear'},
    {title: 'Multimetro', url: 'multimetro', icon: 'clipboard'},
    {title: 'Circuitos', url: 'circuitos', icon: 'sync-circle'},
    {title: 'Condensadores y capacitancia', url: 'condensadores-capacitancia', icon: 'scale'}
  ];

  constructor() {}
}
