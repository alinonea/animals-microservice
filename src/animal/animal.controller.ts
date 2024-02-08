import { Controller } from "@nestjs/common";
import { EventPattern, MessagePattern, Payload } from "@nestjs/microservices";
import { AnimalService } from "./animal.service";

@Controller()
export class AnimalController {
    constructor(private animalService: AnimalService){}

    @MessagePattern("save_animal")
    public async handlerAnimalAdoption(@Payload() data: any){
        console.log(data)
        return {
            message: "saved"
        }
    }

}