import { Button, Col, Modal, Row, Stack } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ActionsTodo } from './../../redux/reducers/todoReducer';

const FormEditTodo = ({ show, closeModal, title, TodoList, initialValue }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (initialValue) {
			setData({
				id: initialValue.id,
				title: initialValue.title,
				description: initialValue.description,
				status: initialValue ? initialValue.description : 0,
				createdAt: new Date(initialValue.createdAt).toString(),
			});
		}
	}, [initialValue]);

	const [data, setData] = useState({
		id: null,
		title: '',
		description: '',
		status: 0,
		createdAt: new Date().toString(),
	});

	const onSave = () => {
		const idx = TodoList.findIndex((item) => item.id === data.id);

		if (idx !== -1) TodoList[idx] = data;

		dispatch({
			type: ActionsTodo.EDIT_TODO,
			todos: TodoList,
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
								value={data.title || ''}
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
								value={data.description || ''}
								onChange={(e) =>
									setData({ ...data, description: e.target.value })
								}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={12} lg={3} className='text-title'>
							Status
						</Col>
						<Col md={12} lg={9} className='text-desc'>
							<select
								value={data.status || ''}
								onChange={(e) => setData({ ...data, status: e.target.value })}
							>
								<option value={0}>UnComplete</option>
								<option value={1}>Complete</option>
							</select>
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
FormEditTodo.propTypes = {
	show: PropTypes.bool,
	closeModal: PropTypes.func,
	title: PropTypes.string,
	TodoList: PropTypes.array,
};

export default FormEditTodo;
