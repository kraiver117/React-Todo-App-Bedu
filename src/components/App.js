import React from 'react'
import Header from './Header'
import Form from './Form'
import TodoList from './TodoList'
import { Todo } from '../utils/TodoFunctionality';
import NavBar from './NavBar';
import { Container } from 'react-bootstrap';

const App = () => {
    const {
      tasks,
      input,
      createNewTodo,
      toggleTodo,
      deleteTodo,
      onChange,
      updateTodo
    } = Todo();

    return (
      <Container>
        <NavBar />
        <Header tasks={tasks} />
        <Form createNewTodo={createNewTodo} onChange={onChange} input={input}/>
        <TodoList 
          tasks={tasks} 
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </Container>
    );
}

export default App;

// class Todo extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     tasks: Todo.tasks,
  //     input: ''
  //   }

    // this.deleteTodo = this.deleteTodo.bind(this);
    // this.toggleTodo = this.toggleTodo.bind(this);
  // }

  // createNewTodo = (e) => {
  //   e.preventDefault();
  //   if (this.state.input === '') {
  //     return;
  //   } else {
  //     this.setState({tasks:[{id: Date.now(), todo: this.state.input , completed: false}, ...this.state.tasks], input: ''})
  //   }
  //   console.log(this.state.tasks);
  // }

  // toggleTodo = (id) => {
  //   const completeTodo = this.state.tasks.map(todo => {
  //       if(todo.id === id) {
  //           todo.completed = !todo.completed
  //       }
  //       return todo;
  //   })

  //   this.setState({ tasks: completeTodo })
  // }

  // deleteTodo = (id) => {
  //     const filteredList = this.state.tasks.filter(task => task.id !== id);
  //     this.setState({ tasks: filteredList });
  // }

  // onChange = (e) => {
  //   e.preventDefault();
  //   console.log(this.state.input);
  //   this.setState({ input: e.target.value });
  // }
  //   render() {
//    }  
// }