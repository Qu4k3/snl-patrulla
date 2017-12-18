$(function(){
    $('.cup').click(function(){
        $('.cup.active').removeClass('active');
        $(this).addClass('active');
    });
});

function showCup(evt, tabId) {
    // Declare all variables
    var i, tabContent, tablinks;

    // Get all elements with class="tabContent" and hide them
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " active";
}

function search() {
    $("#clanList").css("display", "block");
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("clanList");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
$(document).on('click', function(e) {
    if ( e.target.id != 'searchInput' ) {
        $("#clanList").css("display", "none");
    } else {
        $("#clanList").css("display", "block");
    }
});