import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskCardComponent } from './taskCard/taskCard.component';

@NgModule({
    imports: [ BrowserModule,
               FormsModule 
    ],
    declarations: [ AppComponent,
                    TaskCardComponent 
                    ],
    bootstrap: [ AppComponent ]
})

export class AppModule{}
