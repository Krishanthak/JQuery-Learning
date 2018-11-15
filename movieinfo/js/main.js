$(document).ready(() => {
  // alert(1);
  $('#searchForm').on('submit', (e) => {
    // console.log($('#searchText').val());
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();

  });
});

function getMovies(searchText) {
  // console.log(searchText);
  axios.get('http://www.omdbapi.com?s='+searchText+'&apikey=9169af85')
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      $.each(movies, (index, movie) => {
        output += `
          <div class="col-md-3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onClick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
        `;
      });
      $('#movies').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
