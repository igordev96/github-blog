export const convertDateToDays = (date: string) => {
	const incomingDate = new Date(date).getTime();
	const actualDate = new Date().getTime();
	const milli = actualDate - incomingDate;
	const days = milli / (1000 * 60 * 60 * 24);

	return Math.round(days);
};
