import { Routes } from '@angular/router';
import { Botones2Component } from './componenentes/botones2/botones2.component';
import { BotonesComponent } from './componenentes/botones/botones.component';
import { Botones3Component } from './componenentes/botones-3/botones-3.component';
import { ErrorComponent } from './componenentes/error/error.component';

export const routes: Routes = [
    
{path:'hola', component: Botones2Component},
{path:'chau', component: BotonesComponent},
{path:'pepe', component: Botones3Component},
{path:'**', component: ErrorComponent}

];
