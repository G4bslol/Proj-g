import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { OrdersService } from './orders.service'

@Controller('orders')
export class OrdersController {
    constructor(
        @Inject(OrdersService)
        private readonly ordersService: OrdersService
    ) { }

    @Get(':id')
    async findOnde(@Param('id') id: string) {
        return this.ordersService.findOne(id)
    }

    @Get()
    async findMany() {
        return this.ordersService.findMany()
    }

    @Post()
    async create(@Body() data: any) {
        return this.ordersService.create(data)
    }

    @Put()
    async update() {
        return this.ordersService.update()
    }

    @Delete()
    async delete() {
        return this.ordersService.delete()
    }

}