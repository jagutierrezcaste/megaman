import { Component } from "@angular/core";


@Component({
    selector: 'app-todo',
    templateUrl: './todo.comoponent.html'
})

export class TodoComponent{
  

  public listar: Array<any>=[];
  
  public cod: number=2;  
    constructor(){

        this.listar = [
            {
                texto: 'nuevo todo',
                completado: false,
                id:1
            },
            {
                texto: 'otro nuevo todo',
                completado: false,
                id:2
            }
        ]

    }

    addnewTodo(newTodoLabel) {
        var nuevaLista = {
            texto: newTodoLabel,
            completado: false,
            id: this.cod=this.cod+1
        };
        this.listar.push(nuevaLista);
    }

    deleteTodo(lista){
        this.listar = this.listar.filter(t => t.id !== lista.id);
    }
    
    editTask(idl: number){
        let texto = this.listar[idl-1].texto;
        let result = prompt("Edite el texto", texto);
        if (result !== null && result !== ""){
          this.listar[idl-1].texto = result;
        }
      }

      newFuncion(text){
          alert(""+text+" Activado");
      }
    
}

