'use strict';

// Events for multiple elements

const addEventOnElements = function (elements, eventType, callback) {
	for (const element of elements) {
		element.addEventListener(eventType, callback);
	}
};

// Toggle search box in mobile devive (small screen)

const searchBox = document.querySelector('[search-box]');
const searchTogglers = document.querySelectorAll('[search-toggler]');

addEventOnElements(searchTogglers, 'click', function () {
	searchBox.classList.toggle('active');
});

/*
  Storing movieId in 'localStorage' when movieCard is clicked
*/

const getMovieDetail = function (movieId) {
	window.localStorage.setItem('movieId', String(movieId));
};

const getMovieList = function (urlParam, genreName) {
	window.localStorage.setItem('urlParam', urlParam);
	window.localStorage.setItem('genreName', genreName);
};
