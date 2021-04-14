import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Form extends React.Component {
    render() {
        return (
            <form className=" mb-4 d-flex justify-content-center" onSubmit={(e) => this.props.createNewTodo(e)}>
                <input type="text" className="mr-2 input-form" onChange={(e) => this.props.onChange(e)} value={this.props.input}  placeholder="Add new Todo"/>
                <Button variant="primary" onClick={(e) => this.props.createNewTodo(e)}>Add Todo</Button>
            </form>
        );
    }
}

Form.propTypes = {
    input: PropTypes.string,
    createNewTodo: PropTypes.func,
    onChange: PropTypes.func,
}

export default Form;


//-------Example using functional component------//
// export const Form = () => {
//     return (
//         <form className="mt-2 mb-4">
//             <input type="text" className="mr-2" />
//             <Button variant="primary">Add Todo</Button>
//         </form>
//     );
// }