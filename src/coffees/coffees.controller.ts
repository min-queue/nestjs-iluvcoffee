import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  // findAll(@Res() response) {
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll(paginationQuery);
    // return `This All Coffees limit: #${limit} offset: #${offset}`;
    // return response.status(200).send('This is all coffees');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
    // return `This is one #${id}`;
  }

  @Post()
  // @HttpCode(HttpStatus.GONE)
  createOne(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
    // return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
    // return `Update a #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
    // return `Delete a #${id} coffee`;
  }
}
