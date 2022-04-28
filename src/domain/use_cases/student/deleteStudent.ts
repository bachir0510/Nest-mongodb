import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { Student, StudentDocument } from 'src/domain/schemas/student.schema';

@Injectable()
export class DeleteStudent {

    constructor(@InjectModel(Student.name) private studentModule: Model<StudentDocument>,){}
   
    async call(id: string){
        await this.studentModule.findByIdAndDelete(id)
        
    }
}