import { Stack } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useState } from 'react';
import DetailModal from '../modal/DetailModal';
import { BsCircle, BsCheckCircle } from 'react-icons/bs';

const ListTodoCard = ({ items }) => {
	// console.log('items', items);
	const [showModal, setShowModal] = useState(false);
	const [selectedData, setSelectedData] = useState(null);

	const onSelectData = (data) => {
		setSelectedData(data);
		setShowModal(true);
	};

	const onCloseModal = () => {
		setSelectedData(null);
		setShowModal(false);
	};

	const randomColor = (id) => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		return randomColor;
	};

	return (
		<>
			<DetailModal
				show={showModal}
				closeModal={() => onCloseModal()}
				data={selectedData}
			/>
			<Stack gap={3}>
				{items ? (
					items.map((item) => (
						<div
							className='bg-light border p-2 rounded-2 todo-list-stack'
							key={item.id}
							onClick={() => onSelectData(item)}
						>
							<div className='icon-status'>
								{item.status === 0 ? (
									<BsCircle className='icon' style={{ color: randomColor() }} />
								) : (
									<BsCheckCircle
										className='icon'
										style={{ color: randomColor() }}
									/>
								)}
							</div>
							<div className='content'>
								<div className='text-title'>{item.title}</div>
								<div className='text-desc'>{item.description}</div>
							</div>
						</div>
					))
				) : (
					<div className='text-center bg-light border p-2 rounded-2'>
						No Data
					</div>
				)}
			</Stack>
		</>
	);
};

ListTodoCard.propTypes = {
	items: PropTypes.array,
};

export default ListTodoCard;
