import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { Student, StudentDocument } from 'src/domain/schemas/student.schema';

@Injectable()
export class GetStudent {

    constructor(@InjectModel(Student.name) private studentModule: Model<StudentDocument>,){}
   
    async call(){
       const getAll= await this.studentModule.find()
       return getAll
    }
    
  
}