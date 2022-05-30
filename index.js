$(document).ready(
    function(){
        console.log("LindoWillian");
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/posts",
            type:"GET",
            success:function(data){
                console.log(data);
                $.each(
                    data, 
                    function(i, itemm){

                        $('#Resultado').append(
                            '<li><a href="resultados.html?opcao='+itemm.id+'">'+itemm.title+'</a></li>'
                        )
                })
            },
            error:function(data){

            }
        })
    }
)