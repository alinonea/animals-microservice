import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AnimalService {
    constructor(private prisma: PrismaService) {}

    saveAnimal(animal){
        // console.log(animal)
        return this.prisma.animal.create({data: animal}).then(() =>{
            return {
                "message": "Animal successfully created",
                "code": 200
            }
        }).catch((err:Error) => {
            return {
                "message": "Animal could not be creted",
                "error": err.message,
                "code": 500
            }
        })
    }

    getAllToAdoptAnimals(){
        return this.prisma.animal.findMany({
            where: {
                adopted: false
            }})
            .then((res) => {
                return {
                    "message": "Success!",
                    "code": 200,
                    "data": [...res]
                }
            })
    }
}
