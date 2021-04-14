import React from 'react';
import PropTypes from 'prop-types';
import { Table, Container, Alert } from 'react-bootstrap';
import Todo  from './Todo';
import '../css/todoList.css';

//------Example with class component-------//
class TodoList extends React.Component {
    render() {
        const todoKeys = ["id", "Todo", "Actions"]
        return (
            <Container>
                {
                    this.props.tasks.length === 0 
                    ? <Alert className="text-center" variant="primary">No hay tareas por mostrar</Alert> 
                    : <Table striped>
                        <thead>
                            <tr>
                                {
                                    todoKeys.map((key, index) => (
                                        <th key={index}>{key}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.tasks.map((todo) => ( 
                                    <tr key={todo.id} >
                                        <Todo 
                                            {...todo} 
                                            deleteTodo={this.props.deleteTodo} 
                                            toggleTodo={this.props.toggleTodo}
                                        />
                                    </tr>
                                ))
                            }
                        </tbody>
                        </Table>
                }
            </Container>
        );
    }
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf( 
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            todo: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    )
}

export default TodoList;

//------Example with functional component-------//
// const todos = [
//     {
//         id: "1",
//         todo: "Comprar Leche",
//         completed: true
//     },
//     {
//         id: "2",
//         todo: "Comprar Huevo",
//         completed: false
//     },
//     {
//         id: "3",
//         todo: "Comprar queso",
//         completed: true
//     },
// ]

// export const TodoList = () => {
//     return (
//         <div className="todoList_container">
//             {
//                 todos.map((todo, index) => (
//                         <Todo key={index} {...todo} />
//                 ))
//             }
//         </div>
//     );
// }