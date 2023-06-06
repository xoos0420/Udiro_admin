const tbody = document.getElementsById('tbody')

function fetchDataFesta() {
	fetch(
		'https://port-0-udiroserver-7e6o2cli3ac97a.sel4.cloudtype.app/culture/festa',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}
	)
		.then((response) => response.json())
		.then((data) => {
			mkHTML(data);
		})
		.catch((error) => {
			console.error('ERROR', error);
		});
}

function mkHTML() {
	
}