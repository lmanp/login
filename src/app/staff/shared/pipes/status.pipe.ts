import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'status'
})
export class StatusPipe implements PipeTransform {
  transform(value: string): string {
     let  message:string;
   if(value){
      message="In Service";
   }else{
       message="Not in Service"
   }
   return message;
    
  }
} 