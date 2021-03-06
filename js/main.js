// LANGUAGES
var lang = document.querySelector('.lang ul');
var langSwitcher = document.createElement('li');
langSwitcher.classList.add('switcher');
lang.appendChild(langSwitcher);

function langFunc() {
    langSwitcher.classList.toggle('en');
}

langSwitcher.addEventListener('click', langFunc);

var langLi = document.querySelectorAll('.lang li');
for (var i = 0; i < langLi.length; i++) {
    langLi[i].addEventListener('click', langFunc);
}

// TABS
var tabItems = document.querySelectorAll('.tabs_body div');
var tabButtons = document.querySelectorAll('.btn_wrapper div');
var count = 0;

for (var i = 0; i < tabItems.length; i++) {
    tabItems[i].style.display = 'none';
    tabItems[0].style.display = 'block';
    tabButtons[0].classList.add('active_tab');
    tabButtons[i].id = count++;
    tabButtons[i].addEventListener('click', function () {
        tabFunc(this.id);
    });
}

function tabFunc(someTab) {
    var tab = document.querySelector('.active_tab');
    tab.classList.remove('active_tab');
    console.log(someTab)
    tabButtons[someTab].classList.add('active_tab');
    for (var i = 0; i < tabItems.length; i++) {
        tabItems[i].style.display = 'none';
    }
    tabItems[someTab].style.display = 'block';
}


// scroll2id

$(".nav_ready a[href*='#']").mPageScroll2id({
    offset: 75
});


// placeholder Remover
function pl(className){
    jQuery(className).data  ('holder',jQuery(className).attr('placeholder'));
    jQuery(className).focusin (function(){ jQuery(this).attr('placeholder',''); });
    jQuery(className).focusout(function(){ jQuery(this).attr('placeholder',jQuery(this).data('holder'));
    });
}
// class of input;
pl('.name');
pl('.phone');




// mail send;

var data = {
    name: $("#name").val(),
    phone: $("#phone").val(),
    cms: $("#cms").val(),
    comment: $("#comment").val(),
    location: $(".location").val()
};
$.ajax({
    type: "POST",
    url: "mail.php",
    data: data,
    success: function(){
        console.log(data);
    }
});