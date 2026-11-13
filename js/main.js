(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var mobile = document.querySelector(".nav-mobile");

  function setScrolled() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  setScrolled();
  window.addEventListener("scroll", setScrolled, { passive: true });

  function closeMenu() {
    if (!toggle || !mobile) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "開啟選單");
    mobile.classList.remove("is-open");
    mobile.hidden = true;
    document.body.classList.remove("nav-lock");
  }

  function openMenu() {
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "關閉選單");
    mobile.hidden = false;
    mobile.classList.add("is-open");
    document.body.classList.add("nav-lock");
  }

  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      if (open) closeMenu();
      else openMenu();
    });
    mobile.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 960) closeMenu();
    });
  }
})();
