(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        mobileNav.hidden = true;
      });
    });
  }

  // Dropdown
  const dropdown = document.querySelector(".nav-dropdown");
  const trigger = document.querySelector(".nav-dropdown-trigger");

  if (dropdown && trigger) {
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      const open = dropdown.classList.toggle("open");
      trigger.setAttribute("aria-expanded", String(open));
    });

    document.addEventListener("click", function () {
      dropdown.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
    });
  }

  // Waitlist form
  const form = document.getElementById("waitlist-form");
  const statusEl = document.getElementById("form-status");
  const emailInput = document.getElementById("email");

  if (form && statusEl && emailInput) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      statusEl.hidden = false;
      statusEl.classList.remove("success", "error");

      const email = emailInput.value.trim();
      if (!email || !emailInput.checkValidity()) {
        statusEl.textContent = "Please enter a valid email address.";
        statusEl.classList.add("error");
        emailInput.focus();
        return;
      }

      try {
        const signups = JSON.parse(localStorage.getItem("gg_waitlist") || "[]");
        if (!signups.includes(email)) {
          signups.push(email);
          localStorage.setItem("gg_waitlist", JSON.stringify(signups));
        }
      } catch (_) {
        /* ignore */
      }

      statusEl.textContent = "You're on the list! We'll email you when we launch in your area.";
      statusEl.classList.add("success");
      form.reset();

      // TODO: wire to Supabase / Resend
      const subject = encodeURIComponent("Growers Ground waitlist");
      const body = encodeURIComponent("Add me to the waitlist: " + email);
      setTimeout(function () {
        window.location.href =
          "mailto:support@growersground.com?subject=" + subject + "&body=" + body;
      }, 1200);
    });
  }
})();
