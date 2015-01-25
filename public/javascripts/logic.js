$(document).ready(function()
{
    $.getJSON( '/users/userlist', function( data ) { // Vyberieme data z URL

        var htmlContent = "";
        $.each(data, function(i,item){ // Vypiseme ich do tabulky
        htmlContent += "<tr>"+
                          "<td>"+item.name+"</td>"+
                          "<td>"+item.age+"</td>"+
                          "</tr>";

        });

        $("table").html(htmlContent);
    });
});
