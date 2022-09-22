import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChatComponent,
    MensajeComponent
    ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ]
})
export class ChatModule { }
