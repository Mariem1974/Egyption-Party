//navbar toggler
const navWidth = $(".navbar").outerWidth();
const maxLength = 100;

// open nav
$(".open-nav").on("click", function () {
  $(".navbar").animate({
    left: 0,
  });

  $("header .inner").animate({
    marginLeft: navWidth,
  });
});

// close nav
$(".x-icon > div").on("click", function () {
  $(".navbar").animate({
    left: -navWidth,
  });

  $("header .inner").animate({
    marginLeft: 0,
  });
});

//Accordion
$(".toggler").on("click", function () {
  $(this).next().slideToggle();
  $(".toggler").not(this).next().slideUp();
});

// message counter
$("#send-message").on("input", function () {
  const cnt = maxLength - $(this).val().length;
  if (cnt < 0) {
    $("#counter").html(0);
    $("#remaining-message").html("Limit exceeded, shorten your message");
    return;
  }
  $("#remaining-message").html("Maximum characters is 100");
  $("#counter").html(cnt);
});

/*time counter */
function eventCounter(eventDate) {
  //time in seconds since midnight, January 1, 1970 UTC to now
  const From1970toNow = new Date().getTime() / 1000;
  //time in seconds since midnight, January 1, 1970 UTC to  eventDate
  const From1970toEvent = new Date(eventDate).getTime() / 1000;

  const diffTime = From1970toEvent - From1970toNow;
  const days = Math.floor(diffTime / (60 * 60 * 24));
  const hours = Math.floor((diffTime / (60 * 60)) % 24);
  const minutes = Math.floor((diffTime / 60) % 60);
  const seconds = Math.floor(diffTime % 60);

  $(".days").html(`${days} D`);
  $(".hours").html(`${hours} H`);
  $(".minutes").html(`${minutes} M`);
  $(".seconds").html(`${seconds} S`);
}

let intervalId = setInterval(() => {
  const staticDate = "December 10, 2024 9:00:00";
  if (new Date(staticDate).getTime() == new Date().getTime()) {
    clearInterval(intervalId);
  }
  eventCounter(staticDate);
}, 1000);
