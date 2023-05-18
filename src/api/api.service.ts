import { Injectable } from '@nestjs/common';
import { AuthLoginDto } from './dto/loginDto';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ApiService {
    private auth = process.env.API_Auth
    constructor(
        private readonly httpService: HttpService,
    ){}

    async verifyAuth(recovery:AuthLoginDto):Promise<Observable<AxiosResponse<any[]>>>{
        try {
            const res = await this.httpService.post(`${this.auth}/auth/login`,recovery).toPromise();
            console.log(res);
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }
}