$(function () {
  $('.menu-icon').click(function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('open')
      .find('ul').slideToggle(300);
  });
})
