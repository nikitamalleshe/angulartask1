import { Component } from '@angular/core';
import { DATAS } from './list-data';

@Component({
  selector: 'app-realtime',
  templateUrl: './realtime.component.html',
  styleUrls: ['./realtime.component.css']
})
export class RealtimeComponent {
datas=DATAS;

constructor(){
  console.log(this.datas)
}

}

