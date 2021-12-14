$('.enviar').click(function(){
    
    let dataFoto = $('#dataFoto').val()

    $.ajax({
        url:`https://api.nasa.gov/planetary/apod?api_key=mQSKc92TwToxbbJWQArJb1hf38etLSarcysdaXwN&date=${dataFoto}
        `
    }
    )

})