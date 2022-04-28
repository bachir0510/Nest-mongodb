import { Module } from '@nestjs/common';
import { AuthModule } from 'src/domain/use_cases/auth/auth.module';
import { StudentModule } from 'src/domain/use_cases/student/student.module';
import { StudentController } from './v1/student/student.controller';
import { AuthController } from './v1/user/auth.contollor';

@Module({
  imports: [AuthModule, StudentModule],
  controllers: [AuthController, StudentController],
})
export class ControllersV1Module {}
