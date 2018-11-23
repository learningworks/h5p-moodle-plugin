var embedlistiner = function() {
    var id = this.getAttribute('data-ref');
    this.style.display = 'none';
    document.getElementById('hvpe' + id ).height = '50';
    document.getElementById('hvpe' + id).src = '/mod/hvp/embed.php?id=' + id;
    document.getElementById('hvpe' + id).addEventListener('load', function(){
        this.className = this.className.replace(/\bmobiledelay\b/g, "");
    }, true);
};

var hvpembedbuttons = document.getElementsByClassName('mobileautoembed');
for (var i = 0; i < hvpembedbuttons.length; i++) {
    hvpembedbuttons[i].addEventListener("click", embedlistiner);
}

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.hvpautoembed a img{display:none} .section .activity.hvpautoembed .contentafterlink{margin-left:0}';
style.innerHTML += '.hvpautoembed .mobiledelay{background:url("/mod/hvp/library/images/throbber.gif") no-repeat center #e2e2e2';
document.getElementsByTagName('head')[0].appendChild(style);