import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cors from 'cors';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule,{cors:true});
  
  const config = new DocumentBuilder()
    .setTitle('API Personal')
    .setDescription('This API is to system personal')
    .setVersion('1.0')
    .addTag('api')
    .addTag('Personal')
    .build();
    

    const document = SwaggerModule.createDocument(app,config)
    SwaggerModule.setup('/api',app,document)
    
    const port = process.env.PORT || 3004;
  await app.listen(port);
  console.log ("todo nais " + port);
}
bootstrap();