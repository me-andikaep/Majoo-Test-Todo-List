import api from './api';
import { ActionsTodo } from '../redux/reducers/todoReducer';

export const GetTodo = async (dispatch) => {
	dispatch({ type: ActionsTodo.LOADING, loading: true });
	try {
		const response = await api.get(`/${process.env.REACT_APP_TO_DO_LIST}`);
		if (response) {
			dispatch({
				type: ActionsTodo.SUCCESS_GET_TODO,
				todos: response.data,
			});
			dispatch({ type: ActionsTodo.LOADING, loading: false });
			return Promise.resolve(response.data);
		}
	} catch (error) {
		dispatch({
			type: ActionsTodo.ERROR_GET_TODO,
			error: JSON.parse(error?.request?.response),
		});
		dispatch({ type: ActionsTodo.LOADING, loading: false });
		return Promise.reject(JSON.parse(error?.request?.response));
	}
};
