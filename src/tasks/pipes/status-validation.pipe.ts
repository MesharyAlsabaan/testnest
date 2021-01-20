import { BadRequestException, PipeTransform } from "@nestjs/common";
import { Taskstatus } from "../task.model";
export class TaskstatusValidation implements PipeTransform{

readonly allowStatus=[

    Taskstatus.DONE,
    Taskstatus.in_progress,
    Taskstatus.open

];

transform(value:any){
    console.log(value);

    if(!this.isstatus(value)){
        throw new BadRequestException('the value is invalid');
    }

    return value;

}

private isstatus(status:any){

    let index=this.allowStatus.indexOf(status)
    return index!==-1
}


}