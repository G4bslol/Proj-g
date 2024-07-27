import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
    constructor(
        @Inject(UsersService)
        private readonly usersService: UsersService
    ) { }

    @Get(':id')
    async findOnde(@Param('id') id: string) {
        return this.usersService.findOne(id)
    }

    @Get()
    async findMany(
        @Query('name') name: string,
        @Query('username') usarname: string
    ) {
        return this.usersService.findMany(name, usarname)
    }

    @Post()
    async create(@Body() data: any) {
        return this.usersService.create(data)
    }

    @Put()
    async update() {
        return this.usersService.update()
    }

    @Patch()
    async updateOne() {
        return this.usersService.updateOne()
    }

    @Delete()
    async delete() {
        return this.usersService.delete()
    }

}