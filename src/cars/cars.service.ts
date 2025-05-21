import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto/index';

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

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);
    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException('Car id is not valid');
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  delete(id: string) {
    const car = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
