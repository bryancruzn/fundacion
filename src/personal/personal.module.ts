import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose'
import { PersonalService } from './personal.service';
import { PersonalController } from './personal.controller';
import { People, PeopleSchema } from './schema/personal.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: People.name, schema: PeopleSchema}])],
  controllers: [PersonalController],
  providers: [PersonalService]
})
export class PersonalModule {}
