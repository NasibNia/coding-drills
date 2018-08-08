$(document).submit(function () {
    // dont forget to prevent default
    event.preventDefault();

    // grab the show information from the form on the page
    var searchInformation;
    var input = $("#showSearch").val()


    // console.log the input

    console.log(input)

    // this is the api we are using add your search variable to end of the queryURL
    var queryURL = "http://api.tvmaze.com/search/shows?q=";

    $.ajax({
        url: queryURL+input,
        method: "GET"
    }).then(function (response) {
        // console.log the response 
        console.log(response);

        // create a forloop and append the first 3 responses to the page
        for (var i=0 ; i < 3 ; i++){

            // console.log the image and then append it to the page.            
            var imageUrl = response[i].show.image.medium;
            console.log(imageUrl);
            // var tmp = $('<img src=' + imageUrl +'>');
            $(".shows").append('<img src=' + imageUrl +'>')

            // console.log the name of the show and append it to the page
            console.log(response[i].show.name);
            var name = response[i].show.name;

            $('.shows').append('<h1>'+ name + '</h1>' );

            // console.log the genres of the show and append it to the page
            console.log(response[i].show.genres);
            $('.shows').append('<h2>'+ response[i].show.genres + '</h2>' );

            // console.log the summary of the show and append it to the page
            console.log(response[i].show.summary);
            $('.shows').append('<p>'+ response[i].show.summary + '</p>' );
        }

    });

})
