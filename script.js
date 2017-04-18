$(window).on('load', function(){
    $.ajax ({
        type: 'GET',
        url: 'http://koskapanbooks.azurewebsites.net/api/Books',
        ContentType: 'application/json',
        success: function (data){
            console.log(data);
            sweetAlert (data[1].id);

        },
        error: function(){
            alert ('fail');
        }
    });
});