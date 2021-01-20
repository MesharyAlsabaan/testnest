import { Injectable, NotFoundException } from '@nestjs/common';
import{Task, Taskstatus} from './task.model';
import * as uuid from 'uuid';
import{CreatDto} from '../tasks/dto/creat.dto';

@Injectable()
export class TasksService {
    private tasks:Task[]=[];
    private i:number=1;


    getallTasks():Task[]{
        return this.tasks;

    }

    delete(id:number){

      this.tasks= this.tasks.filter(task=> id!=task.id)
    }

createTask(CreatDto:CreatDto){
    const{title,description}=CreatDto;
    const task:Task={
        id:this.i++,
        title,
        description,
        status:Taskstatus.DONE

    };
    this.tasks.push(task)
    return task;

}


gettaskbyID(id : number):Task{
    let found=null;
    for(let j=0;j<=this.tasks.length;j++){
        if(j==id){
             found= this.tasks[j-1]
        }
    }
if(found==null){
    throw new NotFoundException();
}
return found;



    console.log('null');
    return null;
}




updateStatus(id:number,status:Taskstatus):Task{
   const z=this.gettaskbyID(id);
   z.status=status;
return z

}
findindexbyId(id :number):number{
    for(let j=0;j<=this.tasks.length;j++){
        if(j==id){
            return j;
        }
    }
}
}
