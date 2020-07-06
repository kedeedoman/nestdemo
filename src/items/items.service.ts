import { Injectable } from '@nestjs/common';
import { Item } from './interface/item.interface';

@Injectable()
export class ItemsService {
    private readonly items : Item[] = [
        {
            id : "3388382",
            name : "Item one",
            description : "This is item one",
            qty : 100
        },
        {
            id : "4733882",
            name : "Item two",
            description : "This is item two",
            qty : 50
        }
    ];

    findAll() : Item[] {
        return this.items;
    }

    findOne(id : string) : Item {
        return this.items.find(item => item.id === id);
    }
}
