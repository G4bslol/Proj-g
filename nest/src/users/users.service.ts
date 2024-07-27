import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {

    async findOne(id: string) {
        return `User: ${id}`
    }

    async findMany(name: string, username: string
    ) {
        return `Lista de vários usuários ${name} / ${username}`
    }

    async create(data: any) {
        return `Cria um usuário ${JSON.stringify(data)}`
    }

    async update() {
        return "Atualizar Várias Info's"
    }

    async updateOne() {
        return "Atualizar Info"
    }

    async delete() {
        return "Deletar User"
    }
}