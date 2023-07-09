import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-formcontacto',
  templateUrl: './formcontacto.component.html',
  styleUrls: ['./formcontacto.component.css']
})
export class FormcontactoComponent {

  @Input() data:any=[];

}
