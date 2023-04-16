


// // function getvalue(value){

// //     return document.getElementById(value).value;
// // } 

(async function () {

    const responce = await fetch("./data.json");
    const movies = await responce.json();

// console.log(movies)
// Get the select elements from the HTML document
var genreSelect = document.getElementById("genre");
var yearSelect = document.getElementById("year");
var ratingSelect = document.getElementById("rating");
var languageSelect = document.getElementById("language");

function showTable(){
var genre = genreSelect.value ;
console.log(genre)
  // // if(movies.genres === genre){
  //   const result = movies.filter(function (movie){
  //           return movie.release_date.includes(genre);
  //         })
  // }
  let tablestart = '<div class="table-responsive"><table class="table">' ;
  let tableHead = '<thead><tr><th>#</th><th>Genres</th><th scope="col">Year</th><th scope="col">Rating</th><th scope="col">Language</th></tr></thead>' ;
  let tableBody = ''
  let tableEnd = '</table></div>'

  for(let i=0 ; i < movies.length;i++){
  tableBody    += '<tr><th>'+(i+1) +'</th><td>'+ movies[i].genres +'</td><td>'+ movies[i].release_date +'</td><td>'+ movies[i].vote_average +'</td><td>'+ movies[i].original_language +'</td></tr>'

}
table = tablestart + tableHead + "<tbody>" + tableBody + "</tbody>" + tableEnd ;
showOutput(table)
}

// Get the table element from the HTML document
function showOutput(abc){
    document.getElementById("output").innerHTML = abc
}
// // Function to display movies based on user's selection
// function displayMovies() {
//   // Clear the table
//   table.innerHTML = "<tr><th>Title</th><th>Genre</th><th>Year</th><th>Rating</th><th>Language</th></tr>";
  
//   // Get the user's selections
//   var genre = genreSelect.value;
//   var year = parseInt(yearSelect.value);
//   var rating = parseInt(ratingSelect.value);
//   var language = languageSelect.value;
  

//   // Loop through the movies and add them to the table if they match the user's selections
//   for (var i = 0; i < movies.length; i++) {
//     var movie = movies[i];
//     // console.log(movie)
  

//     // if (movie.genre === genre || movie.rating >= rating ||  movie.language === language) {
     
//      const result = movies.filter(function (para){
//       return para.genre.includes(genre);
//     })
//     console.log(result)
     
//       console.log(movie.genre)

//       var row = table.insertRow();
    
//       row.insertCell().innerHTML = movie.title;
//       row.insertCell().innerHTML = movie.genre;
//       // console.log(movie.rating)
//       row.insertCell().innerHTML = movie.year;
//       row.insertCell().innerHTML = movie.rating;
      
     
//     }
//   }

  // }

    const btn = document.getElementById("disMovies");

    btn.addEventListener("click",showTable)

})();







