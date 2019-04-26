function toggleVisibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'block') {
    e.style.display = 'none';
  } else {
    e.style.display = 'block';
  }
}

function injectMovie(movie, errorText) {
  var movieDiv = document.getElementById('movie-info');

  var newHtml = (movie) ?
    '<img id="movie-poster" src="' + movie.images[0].url + '"' +
      'alt="Poster for ' + movie.title + ' (' + movie.year + ')" height="250" width="167"/>' +
    '<h2 id="movie-title">' + movie.title + ' (' + movie.year + ')</h2>' +
    '<button id="hide-summary" onclick="toggleVisibility(\'movie-blurb\');">show/hide summary</button>'+
    '<p id="movie-blurb" style="display: none;">' + movie.overview + '</p>' +
    '<iframe width="751" height="422"' +
      'src=' + '"https://www.youtube.com/embed/' + movie.youTubeTrailerId + '"' +
      'frameborder="0"' +
      'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>' +
    '</iframe>'
  : '<p>'+errorText+'</p>';
  movieDiv.innerHTML = newHtml;
}

function shuffle(arr) {
  for(i=arr.length-1; i>=0; i--) {
    j = Math.floor(Math.random() * (arr.length));

    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function pickMovie() {
  if(cursor >= movies.length) {
    cursor = 0;
    movies = shuffle(movies);
  }

  // TODO: validate movie according to schema before injecting
  injectMovie(movies[cursor],
    'No movies available. Your radarr list might be empty, or the server erroneously gave me an empty list.');
  cursor++;
  localStorage.setItem('cursor', JSON.stringify(cursor));
}

function setup(movies) {
  pickMovie();
  document.getElementById('movie-pick').onclick = pickMovie;
}

var movies = JSON.parse(localStorage.getItem('movies'));
var cursor = (movies && localStorage.getItem('cursor')) ? JSON.parse(localStorage.getItem('cursor')) : 0;

var needsSetup = true;
if(movies) {
  setup(movies);
  needsSetup=false;
}

var request = new XMLHttpRequest();
request.open('GET', requestUrl);

request.responseType = 'json';
request.send();

request.onload = function() {
  watchedMovies = (movies && cursor>0) ? movies.slice(0, cursor) : null;

  movies = request.response;
  if(movies){
    movies = movies.filter(movie => movie.downloaded && movie.hasFile);
    if(watchedMovies) {
      for(i=0;i<watchedMovies.length;i++) {
        ind = movies.findIndex(movie => movie.id===watchedMovies[i].id);
        if(ind === -1) {
          watchedMovies.splice(i, 1);
          i--;
        } else {
          movies.splice(ind, 1);
        }
      }
    }
    movies = shuffle(movies);

    if(watchedMovies) { movies = watchedMovies.concat(movies); }
    localStorage.setItem('movies', JSON.stringify(movies));
    if(needsSetup) {
      setup(movies);
      needsSetup=false;
    }
  } else {
    injectMovie(null, 'No movies available. This might be a server issue; I got ' +request.status + ' ' + request.statusText + '. Try refreshing the page.');
  }
};
