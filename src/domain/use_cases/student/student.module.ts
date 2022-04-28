import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from 'src/domain/schemas/student.schema';
import { CreateStudent } from './createStudent';
import { DeleteStudent } from './deleteStudent';
import { GetByIdStudent } from './getById.student';
import { GetStudent } from './getStudent';
import { UpdateStudent } from './updataStudent';

@Module({
  imports:[   MongooseModule.forFeature([
    {
      name: Student.name,
      schema: StudentSchema
    }
  ]),],
  providers: [GetStudent,GetByIdStudent,CreateStudent,UpdateStudent,DeleteStudent],
  exports: [GetStudent,GetByIdStudent,CreateStudent,UpdateStudent,DeleteStudent],
})
export class StudentModule {}

