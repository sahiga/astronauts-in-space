export const apiLoadDefaultItems = () => {
	return fetch('http://api.open-notify.org/astros.json')
	.then((data) => {
		return data.json();
	})
	.then((json) => {
		return json.people;
	})
	.catch((error) => {
		console.error(error);
	});
};
