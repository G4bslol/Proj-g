import { Inject, Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";

type CreateOrderDTO = {
    userId: string;
}

@Injectable()
export class OrdersService {
    constructor(
        @Inject(UsersService)
        private readonly usersService: UsersService
    ) {

    }
    async findOne(id: string) {
        return `Pedido: ${id}`
    }

    async findMany() {
        return `Lista de vários Pedidos`
    }

    async create(data: CreateOrderDTO) {
        //Verificar se um usuário existe no sistema
        this.usersService.findOne(data.userId)
        return `Cria um Pedido ${JSON.stringify(data)}`
    }

    async update() {
        return "Atualizar Várias Info's"
    }

    async delete() {
        return "Deletar User"
    }
}