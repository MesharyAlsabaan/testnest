import {IsNotEmpty} from 'class-validator'
export class CreatDto{
@IsNotEmpty()
title:string;

@IsNotEmpty()
description:string;

}