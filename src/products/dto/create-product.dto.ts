import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  name: string;

  @Min(0)
  @IsNumber()
  @IsNotEmpty()
  price: number;

  //@ExistsInDb
  @Min(1)
  @IsInt()
  @IsNotEmpty()
  categoryId: number;
}

//Custom decorators
//@ExistsInDb
