import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<People>;

@Schema()
export class People {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  ci: string;

  @Prop()
  tlf: number;
}

export const PeopleSchema = SchemaFactory.createForClass(People);