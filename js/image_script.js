$('img').on('click', function(){

  document.getElementById('fullScreenImage').innerHTML = "<img src=\'" +  $(this).attr('src') + "\'/>";

  var top = $(window).scrollTop();
  console.log(String(top));
  $('#fullScreenImage').css('top', String(top)+'px');
  $('#fullScreenImage').removeClass('hidden');
  $('#fullScreenImage').addClass('active');
  $('body').css('overflow', 'hidden');

});

$('#fullScreenImage').on('click', function(){
  document.getElementById('fullScreenImage').innerHTML = "";
  $('body').css('overflow', 'scroll');
  $('#fullScreenImage').removeClass('active');
  $('#fullScreenImage').addClass('hidden');

});
