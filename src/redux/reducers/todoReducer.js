export const ActionsTodo = {
	SUCCESS_GET_TODO: 'SUCCESS_GET_TODO',
	ERROR_GET_TODO: 'ERROR_GET_TODO',
	LOADING: 'LOADING',

	ADD_TODO: 'ADD_TODO',
	EDIT_TODO: 'EDIT_TODO',
	DELETE_TODO: 'DELETE_TODO',
};

const initialState = {
	todos: [],
	error: null,
	loading: false,
};

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionsTodo.SUCCESS_GET_TODO:
			return {
				...state,
				todos: action.todos,
				error: null,
			};
		case ActionsTodo.ERROR_GET_TODO:
			return { ...state, error: action.error };
		case ActionsTodo.LOADING:
			return { ...state, loading: action.loading };
		case ActionsTodo.ADD_TODO:
			return { ...state, todos: action.todos };
		case ActionsTodo.EDIT_TODO:
			return { ...state, todos: action.todos };
		case ActionsTodo.DELETE_TODO:
			return { ...state, todos: action.todos };
		default:
			return state;
	}
};
