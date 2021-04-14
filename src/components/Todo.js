import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import '../css/todo.css';

class Todo extends React.Component {
    render() {
        return (
            <>
                <td>
                    <Form.Group controlId="todoCheckBox">
                        <Form.Check type="checkbox" checked={this.props.completed} onChange={() => this.props.toggleTodo(this.props.id)}/>
                    </Form.Group>
                </td>
                <td>
                    <p className={this.props.completed ? "completed_todo" : "mx-2"}>{this.props.todo}</p>
                </td>
                <td>
                    <Button variant="danger" onClick={() => this.props.deleteTodo(this.props.id)}>Delete</Button>
                </td>
            </>
        );
    }
}

Todo.propTypes = {
    todo: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todo;

//--------With functional component--------//
// const Todo = ({id, todo, completed }) => {
//     const [this.props.completed, settodoCompleted] = useState(completed);

//     return (
//         <div className="todo_container" id={id}>
//             <Form.Group controlId="todoCheckBox">
//                 <Form.Check type="checkbox" checked={todoCompleted}  onChange={() => settodoCompleted(!todoCompleted)}/>
//             </Form.Group>
//             <p className={todoCompleted ? "completed_todo" : "mx-2"}>{todo}</p>
//             { todoCompleted && <Button variant="danger" onClick={() => settodoCompleted(!todoCompleted)}>Delete</Button> }
//             {console.log(todoCompleted)}
//         </div>
//     );
// }