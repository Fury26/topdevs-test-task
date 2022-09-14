import moment from 'moment';

let _months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'Jule',
	'August',
	'September',
	'October',
	'November',
	'December',
];
const current = moment().month();
const beforePart = _months.splice(0, current);
export const months = [..._months, ...beforePart];
export const alphabet = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];
