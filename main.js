let joke = document.querySelector("h2");
let newJokeButton = document.querySelector("button");

newJokeButton.onclick = function(){
    let jokeURL = "https://api.chucknorris.io/jokes/random";
    fetch(jokeURL)
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            joke.innerHTML = myJson.value;
        })

}