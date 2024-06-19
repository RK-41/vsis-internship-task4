'use strict';

const api_key = '5ef488275f8aaa11aa50e319dd4555e7';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

/*
 * fetching data from a server using the 'url' and passing
 * the result in JSON data to a 'callback' function,
 * along with an optional parameter if 'optionalParam' is
 * present
 */

const fetchDataFromServer = function (url, callback, optionalParam) {
	fetch(url)
		.then((response) => response.json())
		.then((data) => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };
