import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    constructor() {}

    @Get('app')
    async hello(){
        return {message:"Hello, World"}
    }

}