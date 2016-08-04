'use stricts';

// search in header.
Main.addNavSearch();
// blue header.
document.querySelector('.top').classList.add('blue-background');

// scroll fix
window.onscroll = function () {
  if (window.innerHeight < 930 &&
      window.innerWidth >= 992) {
    console.log(window.innerHeight, window.scrollY);
    if (window.scrollY >= 600) {
      document.querySelector('.second-column').classList.add('on-footer');
    } else {
      document.querySelector('.second-column').classList.remove('on-footer');
    }
  }
};

Main.hideNavContent();

var form = document.querySelector('.checkout-form'),
    submitBtn = form.querySelector('button.submit');

form.onsubmit = function () {
  window.event.preventDefault();
  window.event.stopPropagation();
  var fields = [],
      data = this.querySelectorAll('input');
  for (var i = 0; i < data.length; i++) {
    if (data[i].value) {
      fields[data[i].name] = data[i].value;
    }
  }
  console.log(fields);
};

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  form.onsubmit();
});

var payItem = document.querySelectorAll('.pay-row');

for (var i = 0; i < payItem.length; i++) {
  payItem[i].addEventListener('click', function() {
    for (var i = 0; i < payItem.length; i++) {
      payItem[i].classList.remove('selected');
    }
    this.classList.add('selected');
    console.log(this);
  });
}
