import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Boton } from '../../clases/boton';


@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent {
  boton: Boton = new Boton();
}
