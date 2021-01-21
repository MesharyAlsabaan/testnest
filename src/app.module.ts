import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ORM } from './config/ORM.config';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    
    TypeOrmModule.forRoot(ORM),
    TasksModule],

})
export class AppModule {}
