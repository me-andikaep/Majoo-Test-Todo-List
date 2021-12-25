export const SortAsc = (val) => {
	let SortedArray = val.sort(
		(a, b) => new Date(a.createdAt) - new Date(b.createdAt)
	);
	return SortedArray;
};

export const SortDesc = (val) => {
	let SortedArray = val
		.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
		.reverse();
	return SortedArray;
};
