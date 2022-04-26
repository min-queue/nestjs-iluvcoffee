import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entities';


@Module({
    imports: [TypeOrmModule.forFeature([Coffee])],
    controllers: [ CoffeesController ],
    providers: [ CoffeesService ],
})
export class CoffeesModule {}
