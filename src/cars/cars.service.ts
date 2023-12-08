/* eslint-disable prettier/prettier */
// games/games.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>,
  ) {}

  async findAll(): Promise<Car[]> {
    return this.carsRepository.find();
  }

  findOne(id: number) {
    return this.carsRepository.findOneBy({ id: id });
  }

  async create(car: any): Promise<Car> {
    return this.carsRepository.save(car);
  }

  async update(id: number, updateCar: any): Promise<Car> {
    await this.findOne(id); // Check if the car exists
    await this.carsRepository.update(id, updateCar);
    return this.findOne(id);
  }

  async remove(id: number) {
    const car = await this.findOne(id); // Check if the car exists
    await this.carsRepository.remove(car);
    return 'Carro removido com sucesso';
  }
}
