$(function(){
    $(`<link rel="stylesheet" href="css/foot.css"/>`).appendTo("head");
    $.ajax({
        url:"foot.html",
        type:"get",
        success:function(res){
            //console.log(res);
            $(res).replaceAll(".my_foot");
        }
    })
})