import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User extends Document {
    @Prop()
    name:String;

    @Prop()
    username:String;

    @Prop()
    email:String;

    @Prop()
    password:String;

    @Prop()
    age:Number;

    @Prop()
    image:String;

    @Prop()
    image2:String;
}

export const UserSchema = SchemaFactory.createForClass(User);

