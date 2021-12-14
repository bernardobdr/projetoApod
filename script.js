$('.enviar').click(function(){

    let dataFoto = $('#dataFoto').val()
    
    $.ajax({
        url:`https://api.nasa.gov/planetary/apod?api_key=If038K0asBSljpY2HtQWwy0fefuPkqSBsxCpeKqT&date=${dataFoto}`,
        type: 'GET',
        success: function(imagemDoDia){
            console.log(imagemDoDia)
            $('#titulo').text(imagemDoDia.title)
            $('#descricaoFoto').text(imagemDoDia.explanation)
            $('#foto').attr('src', imagemDoDia.url)
            
        }
    })
})

$.ajax({
    url:`https://api.nasa.gov/planetary/apod?api_key=If038K0asBSljpY2HtQWwy0fefuPkqSBsxCpeKqT`,
    type: 'GET',
    success: function(imagemDoDia){
        console.log(imagemDoDia)
        $('#descricaoFoto').text(imagemDoDia.explanation)
        $('#foto').attr('src', imagemDoDia.url)
        $('#titulo').text(imagemDoDia.title)
    }
})