'use stricts';

var Main = {
  init: function () {
    Main.bindActions();
  },
  bindActions: function () {
    // Menu.
    var navElements = document.querySelectorAll('.topNav li');
    for (var i = 0; i < navElements.length; i++) {
      navElements[i].addEventListener('click', function (e) {
        for (var j = 0; j < navElements.length; j++) navElements[j].classList.remove('selected');
        e.target.parentElement.classList.toggle('selected');
      });
    }
  }
};

(function () {
  Main.init();
})();
