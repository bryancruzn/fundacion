import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cors from 'cors';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule/*,{cors:true}*/);
  
  const config = new DocumentBuilder()
    .setTitle('API Personal')
    .setDescription('This API is to system personal')
    .setVersion('1.0')
    .addTag('api')
    .addTag('Personal')
    .build();
    

    const document = SwaggerModule.createDocument(app,config)
    SwaggerModule.setup('/api',app,document)
    
    const allowedOrigins = ['http://localhost:3000', 'https://known-kitten-production.up.railway.app'];

    app.use(cors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      optionsSuccessStatus: 200
    }));

  await app.listen(3000);
}
bootstrap();