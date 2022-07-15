$(document).ready(function(){

 

    const myAPI = 'https://breakingbadapi.com/api/characters';

    $.ajax({
        url : myAPI,
        dataType : "JSON",
        cache:false,
        success : function (data) {
            // console.log(data);
            $.each(data,function (index) {
                $("#users").append(`<div class="col-lg-3 col-md-6"><div class="card ">
                <div class="boxIMG"><img class="card-img-top" src=${data[index].img} alt=""></div>
                <div class="card-body">
                <span class="badge badge-pill bg-dark">${data[index].nickname}</span>
                    <h6 class="card-title">${data[index].name}</h6>
                    <p class="card-text">
                       <strong>Occupation</strong> <br> ${data[index].occupation}
                    </p>
                </div>
            </div></div>`)
            })
        },
        error: function (err){
            console.log(err);
        }
    })

  });