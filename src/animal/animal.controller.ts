import { Controller } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { AnimalService } from "./animal.service";

@Controller()
export class AnimalController {
    constructor(private animalService: AnimalService){}

    @MessagePattern("save_animal")
    public async handlerAnimalAdoption(@Payload() data: any){
       const res = await this.animalService.saveAnimal(JSON.parse(data))
       return res
    }

    @MessagePattern("get_animals_to_adopt")
    public async handlerGetAllToAdoptAnimals(){
        const res = await this.animalService.getAllToAdoptAnimals()
        return res
    }

}