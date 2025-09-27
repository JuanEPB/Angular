import { Component, output, signal } from '@angular/core';
import { ITask } from '../../../core/interfaces';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
})
export class TaskComponent { 

 title: string = 'Data Binding Page';
  text_field = signal('');
  messageError = signal('');
  outputTask = output<ITask>();
  
  ressetTask(){
    this.text_field.set('');
    this.messageError.set('');
  }


  addTask() {
    if (!this.text_field().trim()){
      this.messageError.set('The task name is required');
      return;
    }


    const newTask: ITask = {
      id: Math.floor(Math.random() * 1000),
      name: this.text_field()
    };

    this.outputTask.emit(newTask);
    this.ressetTask();
  }
}
