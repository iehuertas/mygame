import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {title: 'Home', url: 'home', icon: 'home'},
    {title: 'Conceptos Básicos', url: 'inicio-cb', icon: 'pulse', isOpen: false, child:[
      {title: 'Corriente', url: 'corriente'},
      {title: 'Voltaje', url: 'voltaje'},
      {title: 'Resistencia', url: 'resistencia'},
      {title: 'Ley de Ohm', url: 'ley-ohm'},
      {title: 'Quiz', url: 'quiz-cb'}
    ]},
    {title: 'Codigo de resistencias', url: 'inicio-res', icon: 'nuclear'},
    {title: 'Multímetro', url: 'inicio-mul', icon: 'clipboard'},
    {title: 'Circuitos', url: 'inicio-circ', icon: 'sync-circle', isOpen: false, child:[
      {title: 'Circuitos en Serie', url: 'circuito-serie'},
      {title: 'Circuitos en paralelo', url: 'circuito-paralelo'},
      {title: 'Circuito en serie y paralelo', url: 'circuito-serie-paralelo'},
      {title: 'Quiz', url: 'quiz-circ'}
    ]},
    {title: 'Condensadores y capacitancia', url: 'inicio-cond', icon: 'scale'}
  ];

  constructor() {}

  blockClick(event) {
    event.stopPropagation()
  }
}
