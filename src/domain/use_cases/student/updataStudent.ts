import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from 'src/domain/schemas/student.schema';
import {Model} from 'mongoose'
import { UpdateStudentDTO } from 'src/domain/dto/student/update.student.dto';

@Injectable()
export class UpdateStudent{

    constructor(@InjectModel(Student.name) private studentModule: Model<StudentDocument>,){}
   
    async call(id:string, studentDTO:UpdateStudentDTO){
     await this.studentModule.findByIdAndUpdate(id,studentDTO,{new:true})
      
        }
}