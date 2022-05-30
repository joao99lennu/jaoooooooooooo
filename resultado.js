$(document).ready(
function(){

    var params = new URLSearchParams(location.search);
    var opcao = params.get("opcao");
    alert(opcao);

    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts/"+opcao,
        type:"GET",
        success:function(data){
            console.log(data);

            $('titulo').append(data.title);
            $('#corpo').append('<p>'+data.body+'</p>');
            
        },
        error:function(data){

        }
    })
}
) 