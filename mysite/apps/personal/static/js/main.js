// Assign 'active' class to navbar item based on current page URL
// https://gist.github.com/daverogers/5375778
$(document).ready(function() {
  // get current URL path and assign 'active' class
  var pathname = window.location.pathname;
  // $('.nav > li > a[href=''+pathname+'']').parent().addClass('active');
  $(`.nav > li > a[href='${pathname}']`).parent().addClass('active');
});

function setFooterStyle() {
  var docHeight = $(window).height();
  var footerHeight = $('#footer').outerHeight();
  var footerTop = $('#footer').position().top + footerHeight;
  if (footerTop < docHeight) {
      $('#footer').css('margin-top', (docHeight - footerTop) + 'px');
  } else {
      $('#footer').css('margin-top', '');
  }
  $('#footer').removeClass('invisible');
}
$(document).ready(function() {
  setFooterStyle();
  window.onresize = setFooterStyle;
});

$(document).ready(function() {
  var mq = window.matchMedia( '(min-width: 992px)' );
  if (mq.matches) {
    $('#avatar').css({'marginLeft': '0px'}).animate({'marginLeft': '+=20px'});
    $('#home-text').css({'marginLeft': '40px'}).animate({'marginLeft': '-=20px', 'marginRight': '+=20px'});
  } else {
    //
  }
});