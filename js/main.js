'use stricts';

var Main = {
  limit: 500,
  counter: 0,
  init: function () {
      console.log('load ..');
      var interval = window.setInterval(function () {
        if (Main.counter > Main.limit) {
          clearInterval(interval);
        } else {
          Main.addBox();
          Main.counter++;
        }
      }, 800);
  },
  addBox: function () {
    var box = document.createElement('div');
    box.className = 'box';
    document.querySelector('.container').appendChild(box);

    window.setTimeout(function() {
      box.classList.add('ani');
    },1200);
  }
};

(function () {
  Main.init();
})();
