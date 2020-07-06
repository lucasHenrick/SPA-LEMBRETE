import { Component, ViewChild, OnInit } from '@angular/core';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  titulo = 'CRUD de lembretes com o Angular';
  @ViewChild(ErrorMsgComponent, {static: true}) errorMsgComponent: ErrorMsgComponent;
  ngOnInit(){
   this.errorMsgComponent.setError("Mensagem de Erro!");
  }
}
