
function consultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            
            $(".barra-progress").show();
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo-cep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barra-progress").hide();

            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("localidade").innerHTML = response.localidade;
            //document.getElementById("uf").innerHTML = response.uf;
            //document.getElementById("titulo-cep").innerHTML = "CEP " + response.cep;
        }
    })
}

$(function(){
    $(".cep").hide();
    $(".barra-progress").hide();
})
