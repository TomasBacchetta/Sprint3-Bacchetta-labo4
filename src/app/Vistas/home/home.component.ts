import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mensaje } from 'src/app/Entidades/mensaje';
import { FirebaseDataChatServiceService } from 'src/app/Services/firebase-data-chat-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mensajes : Mensaje[]  = [];
  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }





}
