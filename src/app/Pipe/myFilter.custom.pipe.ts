import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../Data/user';
@Pipe({
    name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {
    transform(value: User[], filterString: string, property: string){
        let fileredUser: User[] = [];
        if(value.length === 0 || !filterString){
            return value;
        }
        for(let user of value){
            if(user[property as keyof User]?.toString().toLowerCase().includes(filterString.toLowerCase())){
                fileredUser.push(user);
            }
        }
        return fileredUser;
    }
}