
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interface/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService : ItemsService) {}

    @Get()
    findAll() : Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id : string) : Promise<Item> {
        return this.itemsService.findOne(id); 
    }
 
    @Post()
    create(@Body() item : Item) : Promise<Item> {
        return this.itemsService.create(item);
    }

    @Delete(':id')
    delete(@Param('id') id : string) : Promise<Item> {
        return this.itemsService.delete(id);
    }

    @Put(':id')
    update(@Body() item : Item, @Param('id') id : string) : Promise<Item> {
        return this.itemsService.update(id, item);
    }
}
