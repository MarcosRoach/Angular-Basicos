import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>
    <h2>
      <b>La base es: {{ base }}</b>
    </h2>

    <button (click)="acumular(-1 * base)">-{{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)="acumular(base)">+{{ base }}</button>
  `,
})
export class ContadorComponent {
  public title: string = 'Contador APP';

  public numero: number = 0;
  public base: number = 5;

  // METODO ACUMULAR
  acumular(valor: number) {
    this.numero += valor;
  }
}
