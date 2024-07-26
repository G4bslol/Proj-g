import { Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";

@Controller('users')
export class UsersController {
    constructor() { }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return `User: ${id}`
    }

    @Get()
    async findMany(
        @Query('name')name: string,
        @Query('username')username: string)
    {
        return 'Lista de Users'
    }

    @Post()
    async create() {
        return 'Criar User'
    }

    @Put()
    async update() {
        return "Atualizar Várias Info's"
    }

    @Patch()
    async updateOne() {
        return "Atualizar Info"
    }

    @Delete()
    async delete() {
        return "Deletar User"
    }
}