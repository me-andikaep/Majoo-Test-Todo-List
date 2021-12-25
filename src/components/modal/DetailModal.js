import { Button, Col, Modal, Row, Stack } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ActionsTodo } from '../../redux/reducers/todoReducer';
import FormEditTodo from './FormEditTodo';
import { useState } from 'react';

const DetailModal = ({ show, closeModal, data }) => {
	const dispatch = useDispatch();
	const todoState = useSelector((state) => state.todo);
	const TodoList = todoState.todos;

	const [showModal, setShowModal] = useState(false);

	const onDelete = (id) => {
		const newArr = TodoList.filter((item) => item.id !== id);

		dispatch({
			type: ActionsTodo.DELETE_TODO,
			todos: newArr,
		});
		closeModal();
	};

	return (
		<Modal
			show={show}
			centered
			animation
			onHide={closeModal}
			size='lg'
			className='modal-todo'
		>
			<FormEditTodo
				show={showModal}
				closeModal={() => {
					setShowModal(false);
					closeModal();
				}}
				title='Edit todo'
				TodoList={TodoList}
				initialValue={data}
			/>

			<Modal.Header className='header bg-light'>
				<Modal.Title>{data?.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Stack gap={3}>
					<Row>
						<Col md={12} lg={3} className='text-title'>
							Descriptions
						</Col>
						<Col md={12} lg={9} className='text-desc'>
							{data?.description}
						</Col>
					</Row>
					<Row>
						<Col md={12} lg={3} className='text-title'>
							status
						</Col>
						<Col md={12} lg={9} className='text-desc'>
							{data?.status === 0 ? 'Uncomplete' : 'Complete'}
						</Col>
					</Row>
					<Row>
						<Col md={12} lg={3} className='text-title'>
							Create At
						</Col>
						<Col md={12} lg={9} className='text-desc'>
							{data?.createdAt}
						</Col>
					</Row>
				</Stack>
			</Modal.Body>
			<Modal.Footer>
				<Button
					className='btn-primary'
					onClick={() => {
						setShowModal(true);
					}}
				>
					Update
				</Button>

				{data?.status === 0 && (
					<Button className='btn-primary red' onClick={() => onDelete(data.id)}>
						Delete
					</Button>
				)}
			</Modal.Footer>
		</Modal>
	);
};
DetailModal.propTypes = {
	show: PropTypes.bool,
	closeModal: PropTypes.func,
	data: PropTypes.object,
};

export default DetailModal;
