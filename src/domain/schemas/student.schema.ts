import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema()
export class Student extends Document {
 
    @Prop({required: true})
    nia: number;

    @Prop({required: true})
    name: string;

    @Prop({required: true})
    lastName: string;

    @Prop({required: true})
    motherName: string;
    
    @Prop({required: true})
    birthDate: Date;

    @Prop({required: true})
    group: string;

    @Prop({required: true})
    classGoup: string;
   
    createdAT :{
        type: Date,
        default: Date

    }
}

export const StudentSchema = SchemaFactory.createForClass(Student);