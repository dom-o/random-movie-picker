function toggleVisibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'block') {
    e.style.display = 'none';
  } else {
    e.style.display = 'block';
  }
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

function movieToHtml(movie) {

  return ('<img id="movie-poster" src="' + movie.poster_src + '"' +
      'alt="Poster for ' + movie.title + ' (' + movie.year + ')" height="250" width="167"/>' +
    '<h2 id="movie-title">' + movie.title + ' (' + movie.year + ')</h2>' +
    '<button id="hide-summary" onclick="toggleVisibility(\'movie-blurb\');">show/hide summary</button>'+
    '<p id="movie-blurb" style="display: none;">' + movie.overview + '</p>' +
    '<iframe width="751" height="422"' +
      'src=' + '"https://www.youtube.com/embed/' + movie.youTubeTrailerId + '"' +
      'frameborder="0"' +
      'allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>' +
    '</iframe>');
}

function injectMovie(newHtml) {
  var movieDiv = document.getElementById('movie-info');
  movieDiv.innerHTML = newHtml;
}

function loadMovies(existingMovies, cursor) {
  var request = new XMLHttpRequest();
  request.open('GET', requestUrl);
  request.responseType = 'json';
  request.onload = function() {
    watchedMovies = (existingMovies && cursor>0) ? existingMovies.slice(0, cursor) : [];
    movies = request.response;
    if(movies && movies.length > 0) {
      movies = movies
        .filter(movie => movie.downloaded && movie.hasFile)
        .map(movie => ({
          id: movie.id,
          title: movie.title,
          year: movie.year,
          overview: movie.overview,
          poster_src: movie.images[0].url,
          youTubeTrailerId: movie.youTubeTrailerId
        }));
        console.log(movies);
      for(let i=0;i<watchedMovies.length;i++) {
        let ind = movies.findIndex(movie => movie.id===watchedMovies[i].id);
        if(ind === -1) {
          watchedMovies.splice(i, 1);
          i--;
        } else {
          movies.splice(ind, 1);
        }
      }
      movies = shuffle(movies);

      movies = watchedMovies.concat(movies);
      localStorage.setItem('movies', JSON.stringify(movies));
      localStorage.setItem('cursor', JSON.stringify(cursor));
      pickMovie();
    } else {
      console.log(movies);
      injectMovie('<p>No movies available; your radarr list might be empty.</p>');
    }
  };

  request.onerror = function(e) {
    console.error(request.statusText);
    injectMovie('<p>No movies available; server error.</p>');
  };

  request.send();
}

function pickMovie() {
  if(movies.length <= 0) {
    cursor = 0;
    injectMovie('<p>...loading movies</p>');
    loadMovies(movies, cursor);
    return;
  }

  if(cursor >= movies.length) {
    cursor = 0;
    movies = shuffle(movies);
  }
  injectMovie(movieToHtml(movies[cursor]));
  cursor++;
  localStorage.setItem('cursor', JSON.stringify(cursor));
}

var movies = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [];
var cursor = (movies && localStorage.getItem('cursor')) ? JSON.parse(localStorage.getItem('cursor')) : 0;
loadMovies(movies, cursor);
document.getElementById('movie-pick').onclick = pickMovie;
