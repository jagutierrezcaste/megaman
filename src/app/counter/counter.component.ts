import {Component} from "@angular/core";

@Component({
    selector:'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})

export class CounterComponent {
    public title: string='';
    public counter: number=0;

    constructor(){
        this.title = 'Eventos';
    }

    public increment($event){
        console.log($event);
        this.counter = this.counter + 1;

    }

    public decrement($event){
        console.log($event);
        if (this.counter > 0){
            this.counter = this.counter -1;
        }
        
    }

    public reset($event){
        console.log($event);
        this.counter =0;
     
    }

    public sender($event) {
        console.log($event.target.value);
        this.counter =$event.target.value;

    }

}

 //javascript object
/*  const objectThing={thing: 'algo'};

 objectThing.thing

 const user = {id:1, name:'yo', rol: 'Lead Front'}

 const users = [
     {
         id:1,
         name:'Michel'
     },
     {
        id:2,
        name:'Gustavo'
     },
     {
        id:3,
        name:'Abisheck'
     }
 ] */

