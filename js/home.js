// ANTHONY
$(document).ready(function () {
    $('h1').addClass('text-center');
    $('h2').addClass('text-center');
    $('.myBannerHeading').addClass('class page-header');
    $('.myBannerHeading').removeClass('myBannerHeading');
    $('#yellowHeading').text("Yellow Team");

    $('#orangeTeamList').css('background-color','orange');
    $('#blueTeamList').css('background-color', 'blue');
    $('#redTeamList').css('background-color', 'red');
    $('#yellowTeamList').css('background-color', 'yellow');

    $("#yellowTeamList").append('<li>Joseph Banks</li>');
    $("#yellowTeamList").append('<li>Simon Jones </li>');

    $("#oops").hide();
    $("#footerPlaceholder").remove();

    $("#footer").css('font-family','Courier');
    $("#footer").css('height','24')
    $("#footer").append('<p>Anthony-Tien Nhat Huynh</p>');
    $("#footer").append('<p>anthonyhuynh997@gmail.com</p>');
});