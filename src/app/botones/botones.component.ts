import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {

  tipo: string = "text";

  cambiarTipo(): void {

    if (this.tipo == "range") {
      this.tipo = "text";
      return;
    }
    if (this.tipo == "text") {
      this.tipo = "date";
      return;
    }
    if (this.tipo == "date") {
      this.tipo = "checkbox";
      return;
    }
    if (this.tipo == "checkbox") {
      this.tipo = "color";
      return;
    }
    if (this.tipo == "color") {
      this.tipo = "file";
      return;
    }
    if (this.tipo == "file") {
      this.tipo = "range";
      return;
    }

  }
}
