var Main = {

    init: function () {
        this.bindActions();
        var hash = window.location.href.split('#')[1];
        if (hash) Main.getSection(hash)
    },

    bindActions: function () {
        document.querySelectorAll('.icon').forEach(function(el) {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                icon = this.getAttribute("class")
                    .replace('icon', '')
                    .replace(' col-xs-2 col-sm-2 col-md-2', '');

                Main.getSection(icon);
            });
        });
    },
    
    getSection: function (icon) {

        window.location.hash = icon.replace(' ','');

        document.querySelectorAll('g.icon').forEach(function (el) { el.style.fill ='#B1B3B6'; });
        document.querySelector('g.icon.' + icon.replace(' ', '')).style.fill ='#20407D';

        Main.getArrow(icon);
        var container = document.querySelector('.text');
        container.innerHTML = document.querySelector('#'+icon.replace(' ','') ).innerHTML;
        document.querySelector('#commentTitle').innerHTML = container.querySelector('input[name="commentTitle"]').value
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