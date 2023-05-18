import { Injectable } from '@nestjs/common';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { People } from './schema/personal.schema';
import { Model } from 'mongoose';

@Injectable()
export class PersonalService {
  constructor(@InjectModel(People.name) private peopleModel: Model<People>){

  }
  create(createPersonalDto: CreatePersonalDto) {
    console.log(createPersonalDto)
    return this.peopleModel.create(createPersonalDto) ;
  }

  findAll() {
    return this.peopleModel.find();
  }

  findOne(id: string) {
    return this.peopleModel.findById(id);
  }

  update(id: string, updatePersonalDto: UpdatePersonalDto) {
    return this.peopleModel.findByIdAndUpdate(id, updatePersonalDto, {new:true});
  }

  remove(id: string) {
    return this.peopleModel.findByIdAndDelete(id);
  }
}
