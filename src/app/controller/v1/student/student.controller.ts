import { Controller, Get, Param,Post,Put,Delete,Body } from "@nestjs/common"
import { ApiTags } from "@nestjs/swagger"
import { CreateStudentDTO } from "src/domain/dto/student/create.student.dto"
import { UpdateStudentDTO } from "src/domain/dto/student/update.student.dto"
import { GetStudent,CreateStudent,GetByIdStudent, UpdateStudent, DeleteStudent} from "src/domain/use_cases"


@ApiTags('student')
@Controller('student')
export class StudentController{

constructor(
        private readonly getStudent : GetStudent,
        private readonly getByIdStudent: GetByIdStudent,
        private readonly createStudent: CreateStudent,
        private readonly updateStudent: UpdateStudent,
        private readonly deleteStudent : DeleteStudent,

        ){}

    @Get()
     findAll(){
     return this.getStudent.call()
    }

    @Get(':id')
    findById(@Param('id') id : string){
        return this.getByIdStudent.call(id)
    }

    @Post()
    create(@Body() studentDTO : CreateStudentDTO){
        return this.createStudent.call(studentDTO)
    }

    @Put(":id")
    update(@Body() studentDTO : UpdateStudentDTO, @Param('id') id : string){
        return this.updateStudent.call(id,studentDTO)
   }

    @Delete(":id")
    delete(@Param('id') id:string){
        return this.deleteStudent.call(id)
    }
}