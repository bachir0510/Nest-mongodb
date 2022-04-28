// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { Student, StudentSchema } from 'src/domain/schemas/student.schema';
// import { CreateStudent, GetStudent,GetByIdStudent,UpdateStudent,DeleteStudent } from 'src/domain/use_cases';

// import { StudentController } from './student.controller';


// @Module({
//   imports:[
//     MongooseModule.forFeature([
//       {
//         name: Student.name,
//         schema: StudentSchema
//       }
//     ])
//   ],
//   controllers: [StudentController],
//   providers: [GetStudent,CreateStudent,UpdateStudent,DeleteStudent,GetByIdStudent]
// })
// export class StudentModule {}
