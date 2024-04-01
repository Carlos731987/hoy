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
    if (this.tipo == "text")
      this.tipo = "date";
      return
    if (this.tipo == "date")
      this.tipo = "date";
      return

  }
}
