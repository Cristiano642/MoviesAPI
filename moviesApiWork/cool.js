const formSearch = document.querySelector("form");
apiKey = "8fa8be48";

formSearch.onsubmit = (ev) => {
    ev.preventDefault();
    
    const search = ev.target.search.value;

    if (search == ""){
        alert(" empty search");
        return;
    }

    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`)
    .then(result => result.json())
    .then(json => funcList(json));
}

const funcList = (json) => {
    const list = document.querySelector("div.list");
    list.innerHTML = "";

    if(json.Response == "False"){
        alert('Movie not found');
        return;
    }

    json.Search.forEach(element => {
        //console.log(element)

        let item = document.createElement("div")
        item.classList.add("item");

        item.innerHTML = `<img src="${element.Poster}"><h2>${element.Title}</h2><h4>Year: ${element.Year}</h4>
        <h4>IMDB:<a href="https://www.imdb.com/title/${element.imdbID}/" title="See more Info on IMDB">Click Here</a></h4>`
        list.appendChild(item)
    })
}
