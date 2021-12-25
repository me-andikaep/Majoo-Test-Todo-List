/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import TodoCard from './components/card/TodoCard';
import Header from './components/header';
import FilterStatus from './components/parsing/FilterStatus';
import { GetTodo } from './services/todoService';
import FormTodo from './components/modal/FormTodo';

function App() {
	const dispatch = useDispatch();
	const todoState = useSelector((state) => state.todo);
	const TodoList = todoState.todos;
	const [data, setData] = useState(TodoList);
	const dataList = useMemo(() => FilterStatus(data, [TodoList]));

	const [showModal, setShowModal] = useState(false);

	const GetTodoList = () => {
		GetTodo(dispatch);
	};

	useEffect(() => {
		GetTodoList();
	}, []);

	useEffect(() => {
		setData(TodoList);
	}, [todoState.todos]);

	return (
		<div className='App container'>
			<FormTodo
				show={showModal}
				closeModal={() => setShowModal(false)}
				title='Add todo'
				TodoList={TodoList}
			/>
			<Header className />
			<Row>
				<Col md={12} lg={6}>
					<TodoCard
						title='Todo List'
						addTodo={
							<Button
								className='btn btn-primary'
								onClick={() => setShowModal(true)}
							>
								Add Todo
							</Button>
						}
						data={dataList.uncompleate}
					/>
				</Col>
				<Col md={12} lg={6}>
					<TodoCard title='Complete List' data={dataList.complete} />
				</Col>
			</Row>
		</div>
	);
}

export default App;
