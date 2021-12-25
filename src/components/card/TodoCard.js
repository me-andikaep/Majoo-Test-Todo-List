import { Card } from 'react-bootstrap';
import ListTodoCard from './ListTodoCard';
import PropTypes from 'prop-types';

const TodoCard = ({ title, addTodo, data }) => {
	// console.log('data', data);
	return (
		<Card className='mb-4 todo-card'>
			<Card.Header className='d-flex justify-content-between align-items-center header'>
				{title}
				{addTodo}
			</Card.Header>
			<Card.Body>
				<ListTodoCard items={data} />
			</Card.Body>
		</Card>
	);
};

TodoCard.propTypes = {
	title: PropTypes.string,
	addTodo: PropTypes.element,
	data: PropTypes.array,
};

export default TodoCard;
