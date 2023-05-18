import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiService } from './api.service';
import { AuthLoginDto } from './dto/loginDto';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('api')
@Controller('api')
export class ApiController {
    constructor(
        private readonly serviceApi: ApiService,
    ){}

    @Post()
    async apiAuth(@Body() recovery:AuthLoginDto, @Res() res:Response){
        const dataToken = await this.serviceApi.verifyAuth(recovery)
        return res.status(HttpStatus.OK).json({dataToken});
    }
}
