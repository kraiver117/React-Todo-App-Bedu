import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        const tasksIncompleted = this.props.tasks.filter(task => task.completed === false);
        return (
            <header className="mb-3 text-center">
                <h2>Hay {tasksIncompleted.length} {tasksIncompleted.length === 1 ? 'tarea' : 'tareas'} por hacer</h2>
            </header>
        );
    }
}

Header.propTypes = {
    tasks: PropTypes.arrayOf( 
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            todo: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        }).isRequired
    )
}

export default Header;

//----Using functional component---//
// export const Header = () => {
//     return (
//         <header className="mb-3">
//             <h2>Hay 1 tarea por hacer</h2>
//         </header>
//     )
// }
