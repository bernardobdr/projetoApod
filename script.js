$('.enviar').click(function(){
    
    let dataFoto = $('#dataFoto').val() 

    $.jquery({
        url:`https://api.nasa.gov/planetary/apod?api_key=If038K0asBSljpY2HtQWwy0fefuPkqSBsxCpeKqT&date=${dataFoto}`,
        type: 'GET',
        success: function(pegarFoto){
            console.log(pegarFoto)
        }
    })
