export interface Task{
id:number;
title:string;
description:string;
status:Taskstatus
}
export enum Taskstatus{

open='OPEN',
in_progress='IN_PROGRESS',
DONE='DONE'

}