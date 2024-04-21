import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { Student } from "./student";


@Schema({ collection: "project" })
export class Project {

	public id: Types.ObjectId;

	@Prop({ required: true })
	public title: string;

	@Prop({ required: true })
	public summary: string;

	@Prop({ required: true })
	public student: Student;

	// @Prop({ required: false })
	// public guide: Guide
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
