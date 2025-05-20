import { Injectable, NotFoundException } from '@nestjs/common';
import { car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  private cars: car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'Honda', model: 'Civic' },
    { id: uuid(), brand: 'Jeep', model: 'Cherokee' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Carro con id: ${id} no encontrado`);
    }
    return car;
  }

  create(createCarDto: CreateCarDto) {
    //se puede desestructurar o usar un spread para propagar los datos faltantes
    const car: car = {
      id: uuid(),
      brand: createCarDto.brand,
      model: createCarDto.model,
      // ...CreateCarDto
    };
    this.cars.push(car);
    return car;
  }
}
