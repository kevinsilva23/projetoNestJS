// games.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Car } from './car.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Car])], // Certifique-se de incluir o TypeOrmModule aqui
  controllers: [CarsController],
  providers: [CarsService], // Certifique-se de incluir o GamesService aqui
})
export class CarsModule {}
