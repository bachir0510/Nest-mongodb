import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from 'src/domain/schemas/student.schema';
import {Model} from 'mongoose'
import { CreateStudentDTO } from 'src/domain/dto/student/create.student.dto';

@Injectable()
export class CreateStudent{

    constructor(@InjectModel(Student.name) private studentModule: Model<StudentDocument>,){}
   
    async call(studentDTO: CreateStudentDTO){
       const createStudent = await this.studentModule.create(studentDTO)
       const saveStudent = await createStudent.save()
       return {
           id: saveStudent.id
       }
    }
}