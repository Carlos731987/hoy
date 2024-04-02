import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Botones2Component } from './componenentes/botones2/botones2.component';
import { BotonesComponent } from './componenentes/botones/botones.component';
import { Botones3Component } from './componenentes/botones-3/botones-3.component';
import { ErrorComponent } from './componenentes/error/error.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Botones2Component, BotonesComponent, Botones3Component, ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto1';
}