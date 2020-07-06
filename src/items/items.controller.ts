
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './interface/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService : ItemsService) {}

    @Get()
    findAll() : Item[] {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id : string) : Item {
        return this.itemsService.findOne(id); 
    }
 
    @Post()
    create(@Body() createItemDto : CreateItemDto) : string {
        return `Name : ${createItemDto.name} Desc : ${createItemDto.description}`;
    }

    @Delete(':id')
    delete(@Param('id') id : string) : string {
        return `Delete Item ${id}`;
    }

    @Put(':id')
    update(@Body() updateItemDto : CreateItemDto, @Param('id') id : string) : string {
        return `Update ${id} - Name : ${updateItemDto.name} Desc : ${updateItemDto.description}`;
    }
}
