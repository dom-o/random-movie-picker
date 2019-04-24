//get json list of all movies

//filter movies somehow maybe

//display movies

//keep track of which movie watched(?)

function getRandom(arr) {
  //filter if applicable
  len = arr.length;
  rand =  Math.floor(Math.random() * len);
  return arr[rand];
}

function injectMovie(movie) {
  var movieDiv = document.getElementById('movie-info');

  var newHtml =
    '<img id="movie-poster" src="' + movie.images[0].url + '" alt="Poster for movie" />' +
    '<h2 id="movie-title">' + movie.title + ' (' + movie.year + ')</h2>' +
    '<p id="movie-blurb" >' + movie.overview + '</p>' +
    '<iframe width="751" height="422"' +
      'src=' + '"https://www.youtube.com/embed/' + movie.youTubeTrailerId + '"' +
      'frameborder="0"' +
      'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>' +
    '</iframe>';
    movieDiv.innerHTML = newHtml;
}




var request = new XMLHttpRequest();
request.open('GET', requestUrl+apiKey);

request.responseType = 'json';
request.send();

var movies;
request.onload = function() {
  movies = request.response;
  movies = movies.filter(movie => movie.downloaded && movie.hasFile);
  movie = getRandom(movies)
  injectMovie(movie);
  document.getElementById('movie-pick').onclick = function() {
    injectMovie(getRandom(movies));
  };
};
