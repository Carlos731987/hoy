import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Botones2Component } from './botones2/botones2.component';
import { BotonesComponent } from './botones/botones.component';
import { Botones3Component } from './botones-3/botones-3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Botones2Component, BotonesComponent, Botones3Component  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto1';
}