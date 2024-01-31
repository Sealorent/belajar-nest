import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LeadDocument = HydratedDocument<Lead>;

@Schema()
export class Lead {
  @Prop({ unique: true, required: true })
  name: string;

  @Prop({ required : false})
  email: string;

  @Prop({ required : false})
  phone: string;
}

export const LeadSchema = SchemaFactory.createForClass(Lead);