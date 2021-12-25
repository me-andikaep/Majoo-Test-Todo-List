import lodash from 'lodash';
import { SortAsc, SortDesc } from '../sort/SortByDate';

const FilterStatus = (initialValue) => {
	if (initialValue !== undefined) {
		const uncompleate = lodash.filter(initialValue, (item) => {
			if (item.status === 0) return item;
		});
		const complete = lodash.filter(initialValue, (item) => {
			if (item.status === 1) return item;
		});

		const val = {
			uncompleate: SortAsc(uncompleate),
			complete: SortDesc(complete),
		};

		return val;
	}
};

export default FilterStatus;
