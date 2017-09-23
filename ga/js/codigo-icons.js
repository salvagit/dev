var Main = {

    init: function () {
        this.bindActions();
        var hash = window.location.href.split('#')[1];
        if (hash) {
            document.querySelector('.icon.'+hash).click();
            var icon = document.querySelector('.icon.'+hash);
            console.log(icon);
        }
    },

    bindActions: function () {
        document.querySelectorAll('.icon').forEach(function(el) {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                icon = this.className
                .replace('icon', '')
                .replace(' col-xs-2 col-sm-2 col-md-2', '');

                Main.getSection(icon);
            });
        });
    },
    
    getSection: function (icon) {
        Main.getArrow(icon);
        document.querySelector('.text').innerHTML = document.querySelector('#'+icon.replace(' ','') ).innerHTML;
    },

    getArrow: function (icon) {
        document.querySelectorAll('.arrows svg path').forEach(function(el) {
            var c = el.getAttribute("class");
            if( c.indexOf('opa0') >= 0 && c.indexOf(icon) >= 0) {
                el.setAttribute('class', c.replace('opa0', ''));
            } else if ( c.indexOf('opa0') == -1 ) {
                el.setAttribute('class', c + ' opa0');
            }
        });
    }

};

(function(){
    Main.init();
})();