
$(document).on('scroll', function() {
  var home = document.getElementById('#home-link');
  var about = document.getElementById('#about-link');
  var timetable = document.getElementById('#timetable-link');
  var benefits = document.getElementById('#benefits-link');
  var contact = document.getElementById('#contact-link');
  var location = document.getElementById('#location-link');

  if($(this).scrollTop() < $('#about-section').position().top) {
    home.setAttribute('class', 'active');
  } else {
    home.removeAttribute('class', 'active');
  }

  if($(this).scrollTop() >= $('#about-section').position().top && $(this).scrollTop() < $('#timetable-section').position().top) {
    about.setAttribute('class', 'active');
  } else {
    about.removeAttribute('class', 'active');
  }

  if ($(this).scrollTop() >= $('#timetable-section').position().top && $(this).scrollTop() < $('#benefits-section').position().top) {
    timetable.setAttribute('class', 'active');
  } else {
    timetable.removeAttribute('class', 'active');
  }

  if ($(this).scrollTop() >= $('#benefits-section').position().top && $(this).scrollTop() < $('#contact-section').position().top) {
    benefits.setAttribute('class', 'active');
  } else {
    benefits.removeAttribute('class', 'active');
  }

  if ($(this).scrollTop() >= $('#contact-section').position().top && $(this).scrollTop() < $('#location-section').position().top) {
    contact.setAttribute('class', 'active');
  } else {
    contact.removeAttribute('class', 'active');
  }

  if ($(this).scrollTop() >= $('#location-section').position().top && $(this).scrollTop() < $('#footer').position().top) {
    location.setAttribute('class', 'active');
  } else {
    location.removeAttribute('class', 'active');
  }
});
