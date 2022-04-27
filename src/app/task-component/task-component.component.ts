import { Component, OnInit } from '@angular/core';
import { Task } from '../task';


@Component({
  selector: 'app-task-component',
  templateUrl: './task-component.component.html',
  styleUrls: ['./task-component.component.css']
})
export class TaskComponentComponent implements OnInit {
  title = 'ADD TASK APP';
  details: string = "Details";
  priority = ['High', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  list:any[] = [];
  
  addTask(item:string,priority:string,date:string){
    this.list.push({id:this.list.length, name: item , rank: priority , date: date })
    console.log(this.list);
  }
  removeTask(id:number){
    console.log(id);
    this.list = this.list.filter(item=>item.id !== id)
  }

  ngOnInit(): void {
  }

}
