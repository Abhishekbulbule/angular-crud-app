import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoserviceService } from '../services/todoservice.service';
import { Todo } from '../model/todo.type';
import { catchError } from 'rxjs';
import { HighlightDirective } from '../directives/highlight.directive';
import { LoaderComponent } from '../components/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [HighlightDirective, LoaderComponent, FormsModule, FilterTodosPipe],
  templateUrl: './todo.component.html',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodoserviceService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal<string>('');

  delete(id: string | number) {
    const updatedTodo = this.todoItems().filter((todo) => todo.id !== id);
    this.todoItems.set(updatedTodo);
  }
  ngOnInit(): void {
    this.todoService
      .get()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }
}
