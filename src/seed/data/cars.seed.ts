import { car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corrola',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Cherokee',
  },
];
