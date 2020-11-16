import { Document } from 'mongoose';

export interface User extends Document {
     name: string;
     age: number;
     username:string;
     password:string;
}