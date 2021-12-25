import { Button, Col, Modal, Row, Stack } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ActionsTodo } from './../../redux/reducers/todoReducer';

const FormTodo = ({ show, closeModal, title, TodoList }) => {
	const dispatch = useDispatch();

	const getRndInteger = (min, max) => {
		return Math.floor(Math.random() * (max - min)) + min;
	};

	const [data, setData] = useState({
		id: null,
		title: '',
		description: '',
		status: 0,
		createdAt: new Date().toString(),
	});

	const clearForm = () => {
		setData({
			id: null,
			title: '',
			description: '',
			status: 0,
			createdAt: new Date().toString(),
		});
	};

	const onSave = () => {
		const val = {
			...data,
			id: getRndInteger(10, 1000000),
		};

		const newArr = TodoList.slice();
		newArr.push(val);

		dispatch({
			type: ActionsTodo.ADD_TODO,
			todos: newArr,
		});
		clearForm();
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
			<Modal.Header className='header bg-light'>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Stack gap={3}>
					<Row>
						<Col md={12} lg={3} className='text-title'>
							Title
						</Col>
						<Col md={12} lg={9} className='text-desc'>
							<input
								type='text'
								onChange={(e) => setData({ ...data, title: e.target.value })}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={12} lg={3} className='text-title'>
							Descriptions
						</Col>
						<Col md={12} lg={9} className='text-desc'>
							<input
								type='text'
								onChange={(e) =>
									setData({ ...data, description: e.target.value })
								}
							/>
						</Col>
					</Row>
				</Stack>
			</Modal.Body>
			<Modal.Footer>
				<Button className='btn-primary' onClick={onSave}>
					Save
				</Button>
			</Modal.Footer>
		</Modal>
	);
};
FormTodo.propTypes = {
	show: PropTypes.bool,
	closeModal: PropTypes.func,
	title: PropTypes.string,
	TodoList: PropTypes.array,
};

export default FormTodo;
