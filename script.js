$(window).on('load', function(){

});
$(document).ready(function(){
    $.ajax ({
        type: 'GET',
        url: 'https://koskapanbooks.azurewebsites.net/api/Books',
        ContentType: 'application/json',
        success: function (dataBook){
            console.log(dataBook);
            for (var a in dataBook) {
                console.log(dataBook[a].author);
                var titleBook = new Vue ({
                    el: '#titleBook',
                    data : { titleBook: dataBook[a].title
                    }
                })
            }
        },
        error: function(){
            alert ('fail');
        }
    });
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })
});
