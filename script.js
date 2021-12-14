$('.enviar').click(function(){
    
    let dataFoto = $('#dataFoto').val() 

    $.ajax({
        url:`https://api.nasa.gov/planetary/apod?If038K0asBSljpY2HtQWwy0fefuPkqSBsxCpeKqT&date${dataFoto}`,
        type: 'GET',
        success: function(pegarFoto){
            console.log(pegarFoto)
        }
    })
