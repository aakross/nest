import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: 'Debe ser un string' })
  readonly brand: string;

  @IsString()
  @MinLength(3, { message: 'Model debe tener almenos 3 letras' })
  readonly model: string;
}
