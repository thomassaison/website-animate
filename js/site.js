let toSearch = "jumbotron";
let toAdd = "shadow-pop-tr";
let toRemove = "shadow-pop-tr-reverse";

function handleScroll() {
  let wTop = $(this).scrollTop();
  let wHeight = $(window).height();
  let wBottom = wTop + wHeight;
  $("." + toSearch).each(function (index) {
    let cTop = $(this).offset().top;
    let cBottom = cTop + $(this).outerHeight();
    if (wTop <= cTop && wBottom >= cBottom) {
        if ($(this).hasClass(toRemove))
            $(this).removeClass(toRemove);
        if (!$(this).hasClass(toAdd))
            $(this).addClass(toAdd);
    } else {
        if (!$(this).hasClass(toRemove))
            $(this).addClass(toRemove);
    }
  });
}


handleScroll();
$(window).scroll(() => {
    handleScroll();
});
