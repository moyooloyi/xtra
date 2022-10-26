"use strict";
! function () {
    var e, t; - 1 < navigator.platform.indexOf("Win") && (document.getElementsByClassName("main-content")[0] && (e = document.querySelector(".main-content"), new PerfectScrollbar(e)), document.getElementsByClassName("sidenav")[0] && (e = document.querySelector(".sidenav"), new PerfectScrollbar(e)), document.getElementsByClassName("navbar-collapse")[0] && (t = document.querySelector(".navbar-collapse"), new PerfectScrollbar(t)), document.getElementsByClassName("fixed-plugin")[0] && (t = document.querySelector(".fixed-plugin"), new PerfectScrollbar(t)))
}(), document.getElementById("navbarBlur") && navbarBlurOnScroll("navbarBlur");
var allInputs, fixedPlugin, fixedPluginButton, fixedPluginButtonNav, fixedPluginCard, fixedPluginCloseButton, navbar, buttonNavbarFixed, tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),
    tooltipList = tooltipTriggerList.map(function (e) {
        return new bootstrap.Tooltip(e)
    });

function focused(e) {
    e.parentElement.classList.contains("input-group") && e.parentElement.classList.add("focused")
}

function defocused(e) {
    e.parentElement.classList.contains("input-group") && e.parentElement.classList.remove("focused")
}

function setAttributes(t, s) {
    Object.keys(s).forEach(function (e) {
        t.setAttribute(e, s[e])
    })
}

function sidebarColor(e) {
    var t = document.querySelector(".nav-link.active"),
        e = e.getAttribute("data-color");
    t.classList.contains("bg-gradient-primary") && t.classList.remove("bg-gradient-primary"), t.classList.contains("bg-gradient-dark") && t.classList.remove("bg-gradient-dark"), t.classList.contains("bg-gradient-info") && t.classList.remove("bg-gradient-info"), t.classList.contains("bg-gradient-success") && t.classList.remove("bg-gradient-success"), t.classList.contains("bg-gradient-warning") && t.classList.remove("bg-gradient-warning"), t.classList.contains("bg-gradient-danger") && t.classList.remove("bg-gradient-danger"), t.classList.add("bg-gradient-" + e)
}

function sidebarType(e) {
    for (var t = e.parentElement.children, s = e.getAttribute("data-class"), n = document.querySelector("body"), a = document.querySelector("body:not(.dark-version)"), n = n.classList.contains("dark-version"), i = [], l = 0; l < t.length; l++) t[l].classList.remove("active"), i.push(t[l].getAttribute("data-class"));
    e.classList.contains("active") ? e.classList.remove("active") : e.classList.add("active");
    for (var r, o, c, d = document.querySelector(".sidenav"), l = 0; l < i.length; l++) d.classList.remove(i[l]);
    if (d.classList.add(s), "bg-transparent" == s || "bg-white" == s) {
        var u = document.querySelectorAll(".sidenav .text-white");
        for (let e = 0; e < u.length; e++) u[e].classList.remove("text-white"), u[e].classList.add("text-dark")
    } else {
        var f = document.querySelectorAll(".sidenav .text-dark");
        for (let e = 0; e < f.length; e++) f[e].classList.add("text-white"), f[e].classList.remove("text-dark")
    }
    if ("bg-transparent" == s && n) {
        f = document.querySelectorAll(".navbar-brand .text-dark");
        for (let e = 0; e < f.length; e++) f[e].classList.add("text-white"), f[e].classList.remove("text-dark")
    }
    "bg-transparent" != s && "bg-white" != s || !a ? (o = (r = document.querySelector(".navbar-brand-img")).src).includes("logo-ct-dark.png") && (c = o.replace("logo-ct-dark", "logo-ct"), r.src = c) : (o = (r = document.querySelector(".navbar-brand-img")).src).includes("logo-ct.png") && (c = o.replace("logo-ct", "logo-ct-dark"), r.src = c), "bg-white" == s && n && (o = (r = document.querySelector(".navbar-brand-img")).src).includes("logo-ct.png") && (c = o.replace("logo-ct", "logo-ct-dark"), r.src = c)
}

function navbarFixed(e) {
    var t = ["position-sticky", "blur", "shadow-blur", "mt-4", "left-auto", "top-1", "z-index-sticky"];
    const s = document.getElementById("navbarBlur");
    e.getAttribute("checked") ? (s.classList.remove(...t), s.setAttribute("navbar-scroll", "false"), navbarBlurOnScroll("navbarBlur"), e.removeAttribute("checked")) : (s.classList.add(...t), s.setAttribute("navbar-scroll", "true"), navbarBlurOnScroll("navbarBlur"), e.setAttribute("checked", "true"))
}

function navbarMinimize(e) {
    var t = document.getElementsByClassName("g-sidenav-show")[0];
    e.getAttribute("checked") ? (t.classList.remove("g-sidenav-hidden"), t.classList.add("g-sidenav-pinned"), e.removeAttribute("checked")) : (t.classList.remove("g-sidenav-pinned"), t.classList.add("g-sidenav-hidden"), e.setAttribute("checked", "true"))
}

function navbarBlurOnScroll(e) {
    const t = document.getElementById(e);
    var s, e = !!t && t.getAttribute("data-scroll");
    let n = ["blur", "shadow-blur", "left-auto"],
        a = ["shadow-none"];

    function i() {
        t.classList.add(...n), t.classList.remove(...a), r("blur")
    }

    function l() {
        t.classList.remove(...n), t.classList.add(...a), r("transparent")
    }

    function r(e) {
        let t = document.querySelectorAll(".navbar-main .nav-link"),
            s = document.querySelectorAll(".navbar-main .sidenav-toggler-line");
        "blur" === e ? (t.forEach(e => {
            e.classList.remove("text-body")
        }), s.forEach(e => {
            e.classList.add("bg-dark")
        })) : "transparent" === e && (t.forEach(e => {
            e.classList.add("text-body")
        }), s.forEach(e => {
            e.classList.remove("bg-dark")
        }))
    }
    window.onscroll = debounce("true" == e ? function () {
        (5 < window.scrollY ? i : l)()
    } : function () {
        l()
    }, 10), -1 < navigator.platform.indexOf("Win") && (s = document.querySelector(".main-content"), "true" == e ? s.addEventListener("ps-scroll-y", debounce(function () {
        (5 < s.scrollTop ? i : l)()
    }, 10)) : s.addEventListener("ps-scroll-y", debounce(function () {
        l()
    }, 10)))
}

function debounce(n, a, i) {
    var l;
    return function () {
        var e = this,
            t = arguments,
            s = i && !l;
        clearTimeout(l), l = setTimeout(function () {
            l = null, i || n.apply(e, t)
        }, a), s && n.apply(e, t)
    }
}
0 != document.querySelectorAll(".input-group").length && (allInputs = document.querySelectorAll("input.form-control")).forEach(e => setAttributes(e, {
    onfocus: "focused(this)",
    onfocusout: "defocused(this)"
})), document.querySelector(".fixed-plugin") && (fixedPlugin = document.querySelector(".fixed-plugin"), fixedPlugin = document.querySelector(".fixed-plugin"), fixedPluginButton = document.querySelector(".fixed-plugin-button"), fixedPluginButtonNav = document.querySelector(".fixed-plugin-button-nav"), fixedPluginCard = document.querySelector(".fixed-plugin .card"), fixedPluginCloseButton = document.querySelectorAll(".fixed-plugin-close-button"), navbar = document.getElementById("navbarBlur"), buttonNavbarFixed = document.getElementById("navbarFixed"), fixedPluginButton && (fixedPluginButton.onclick = function () {
    fixedPlugin.classList.contains("show") ? fixedPlugin.classList.remove("show") : fixedPlugin.classList.add("show")
}), fixedPluginButtonNav && (fixedPluginButtonNav.onclick = function () {
    fixedPlugin.classList.contains("show") ? fixedPlugin.classList.remove("show") : fixedPlugin.classList.add("show")
}), fixedPluginCloseButton.forEach(function (e) {
    e.onclick = function () {
        fixedPlugin.classList.remove("show")
    }
}), document.querySelector("body").onclick = function (e) {
    e.target != fixedPluginButton && e.target != fixedPluginButtonNav && e.target.closest(".fixed-plugin .card") != fixedPluginCard && fixedPlugin.classList.remove("show")
}, navbar && "true" == navbar.getAttribute("data-scroll") && buttonNavbarFixed && buttonNavbarFixed.setAttribute("checked", "true")), document.addEventListener("DOMContentLoaded", function () {
    [].slice.call(document.querySelectorAll(".toast")).map(function (e) {
        return new bootstrap.Toast(e)
    });
    [].slice.call(document.querySelectorAll(".toast-btn")).map(function (t) {
        t.addEventListener("click", function () {
            var e = document.getElementById(t.dataset.target);
            e && bootstrap.Toast.getInstance(e).show()
        })
    })
});
var total = document.querySelectorAll(".nav-pills");

function initNavs() {
    total.forEach(function (i, e) {
        var l = document.createElement("div"),
            t = i.querySelector("li:first-child .nav-link").cloneNode();
        t.innerHTML = "-", l.classList.add("moving-tab", "position-absolute", "nav-link"), l.appendChild(t), i.appendChild(l);
        i.getElementsByTagName("li").length;
        l.style.padding = "0px", l.style.width = i.querySelector("li:nth-child(1)").offsetWidth + "px", l.style.transform = "translate3d(0px, 0px, 0px)", l.style.transition = ".5s ease", i.onmouseover = function (e) {
            let t = getEventTarget(e),
                a = t.closest("li");
            if (a) {
                let s = Array.from(a.closest("ul").children),
                    n = s.indexOf(a) + 1;
                i.querySelector("li:nth-child(" + n + ") .nav-link").onclick = function () {
                    l = i.querySelector(".moving-tab");
                    let e = 0;
                    if (i.classList.contains("flex-column")) {
                        for (var t = 1; t <= s.indexOf(a); t++) e += i.querySelector("li:nth-child(" + t + ")").offsetHeight;
                        l.style.transform = "translate3d(0px," + e + "px, 0px)", l.style.height = i.querySelector("li:nth-child(" + t + ")").offsetHeight
                    } else {
                        for (t = 1; t <= s.indexOf(a); t++) e += i.querySelector("li:nth-child(" + t + ")").offsetWidth;
                        l.style.transform = "translate3d(" + e + "px, 0px, 0px)", l.style.width = i.querySelector("li:nth-child(" + n + ")").offsetWidth + "px"
                    }
                }
            }
        }
    })
}

function getEventTarget(e) {
    return (e = e || window.event).target || e.srcElement
}
setTimeout(function () {
    initNavs()
}, 100), window.addEventListener("resize", function (e) {
    total.forEach(function (s, e) {
        s.querySelector(".moving-tab").remove();
        var n = document.createElement("div"),
            a = s.querySelector(".nav-link.active").cloneNode();
        a.innerHTML = "-", n.classList.add("moving-tab", "position-absolute", "nav-link"), n.appendChild(a), s.appendChild(n), n.style.padding = "0px", n.style.transition = ".5s ease";
        let i = s.querySelector(".nav-link.active").parentElement;
        if (i) {
            let e = Array.from(i.closest("ul").children);
            a = e.indexOf(i) + 1;
            let t = 0;
            if (s.classList.contains("flex-column")) {
                for (var l = 1; l <= e.indexOf(i); l++) t += s.querySelector("li:nth-child(" + l + ")").offsetHeight;
                n.style.transform = "translate3d(0px," + t + "px, 0px)", n.style.width = s.querySelector("li:nth-child(" + a + ")").offsetWidth + "px", n.style.height = s.querySelector("li:nth-child(" + l + ")").offsetHeight
            } else {
                for (l = 1; l <= e.indexOf(i); l++) t += s.querySelector("li:nth-child(" + l + ")").offsetWidth;
                n.style.transform = "translate3d(" + t + "px, 0px, 0px)", n.style.width = s.querySelector("li:nth-child(" + a + ")").offsetWidth + "px"
            }
        }
    }), window.innerWidth < 991 ? total.forEach(function (n, e) {
        if (!n.classList.contains("flex-column")) {
            n.classList.remove("flex-row"), n.classList.add("flex-column", "on-resize");
            let e = n.querySelector(".nav-link.active").parentElement,
                t = Array.from(e.closest("ul").children);
            t.indexOf(e);
            let s = 0;
            for (var a = 1; a <= t.indexOf(e); a++) s += n.querySelector("li:nth-child(" + a + ")").offsetHeight;
            var i = document.querySelector(".moving-tab");
            i.style.width = n.querySelector("li:nth-child(1)").offsetWidth + "px", i.style.transform = "translate3d(0px," + s + "px, 0px)"
        }
    }) : total.forEach(function (n, e) {
        if (n.classList.contains("on-resize")) {
            n.classList.remove("flex-column", "on-resize"), n.classList.add("flex-row");
            let e = n.querySelector(".nav-link.active").parentElement,
                t = Array.from(e.closest("ul").children);
            var a = t.indexOf(e) + 1;
            let s = 0;
            for (var i = 1; i <= t.indexOf(e); i++) s += n.querySelector("li:nth-child(" + i + ")").offsetWidth;
            var l = document.querySelector(".moving-tab");
            l.style.transform = "translate3d(" + s + "px, 0px, 0px)", l.style.width = n.querySelector("li:nth-child(" + a + ")").offsetWidth + "px"
        }
    })
}), window.innerWidth < 991 && total.forEach(function (e, t) {
    e.classList.contains("flex-row") && (e.classList.remove("flex-row"), e.classList.add("flex-column", "on-resize"))
}), window.onload = function () {
    for (var e = document.querySelectorAll("input"), t = 0; t < e.length; t++) e[t].addEventListener("focus", function (e) {
        this.parentElement.classList.add("is-focused")
    }, !1), e[t].onkeyup = function (e) {
        "" != this.value ? this.parentElement.classList.add("is-filled") : this.parentElement.classList.remove("is-filled")
    }, e[t].addEventListener("focusout", function (e) {
        "" != this.value && this.parentElement.classList.add("is-filled"), this.parentElement.classList.remove("is-focused")
    }, !1);
    for (var s = document.querySelectorAll(".btn"), t = 0; t < s.length; t++) s[t].addEventListener("click", function (e) {
        var t = e.target,
            s = t.querySelector(".ripple");
        (s = document.createElement("span")).classList.add("ripple"), s.style.width = s.style.height = Math.max(t.offsetWidth, t.offsetHeight) + "px", t.appendChild(s), s.style.left = e.offsetX - s.offsetWidth / 2 + "px", s.style.top = e.offsetY - s.offsetHeight / 2 + "px", s.classList.add("ripple"), setTimeout(function () {
            s.parentElement.removeChild(s)
        }, 600)
    }, !1)
};
const iconNavbarSidenav = document.getElementById("iconNavbarSidenav"),
    iconSidenav = document.getElementById("iconSidenav"),
    sidenav = document.getElementById("sidenav-main");
let body = document.getElementsByTagName("body")[0],
    className = "g-sidenav-pinned";

function toggleSidenav() {
    body.classList.contains(className) ? (body.classList.remove(className), setTimeout(function () {
        sidenav.classList.remove("bg-white")
    }, 100), sidenav.classList.remove("bg-transparent")) : (body.classList.add(className), sidenav.classList.add("bg-white"), sidenav.classList.remove("bg-transparent"), iconSidenav.classList.remove("d-none"))
}
iconNavbarSidenav && iconNavbarSidenav.addEventListener("click", toggleSidenav), iconSidenav && iconSidenav.addEventListener("click", toggleSidenav);
let referenceButtons = document.querySelector("[data-class]");

function navbarColorOnResize() {
    1200 < window.innerWidth ? referenceButtons.classList.contains("active") && "bg-transparent" === referenceButtons.getAttribute("data-class") ? sidenav.classList.remove("bg-white") : sidenav.classList.add("") : (sidenav.classList.add(""), sidenav.classList.remove("bg-transparent"))
}

function sidenavTypeOnResize() {
    let e = document.querySelectorAll('[onclick="sidebarType(this)"]');
    window.innerWidth < 1200 ? e.forEach(function (e) {
        e.classList.add("disabled")
    }) : e.forEach(function (e) {
        e.classList.remove("disabled")
    })
}

function darkMode(e) {
    const t = document.getElementsByTagName("body")[0],
        s = document.querySelectorAll("div:not(.sidenav) > hr"),
        n = document.querySelectorAll("div:not(.bg-gradient-dark) hr"),
        a = document.querySelectorAll("button:not(.btn) > .text-dark"),
        i = document.querySelectorAll("span.text-dark, .breadcrumb .text-dark"),
        l = document.querySelectorAll("span.text-white, .breadcrumb .text-white"),
        r = document.querySelectorAll("strong.text-dark"),
        o = document.querySelectorAll("strong.text-white"),
        c = document.querySelectorAll("a.nav-link.text-dark"),
        d = document.querySelectorAll("a.nav-link.text-white"),
        u = document.querySelectorAll(".text-secondary"),
        f = document.querySelectorAll(".bg-gray-100"),
        g = document.querySelectorAll(".bg-gray-600"),
        v = document.querySelectorAll(".btn.btn-link.text-dark, .material-icons.text-dark"),
        m = document.querySelectorAll(".btn.btn-link.text-white, .material-icons.text-white"),
        h = document.querySelectorAll(".card.border"),
        b = document.querySelectorAll(".card.border.border-dark"),
        L = document.querySelectorAll("g");
    if (e.getAttribute("checked")) {
        t.classList.remove("dark-version");
        for (y = 0; y < s.length; y++) s[y].classList.contains("light") && (s[y].classList.add("dark"), s[y].classList.remove("light"));
        for (y = 0; y < n.length; y++) n[y].classList.contains("light") && (n[y].classList.add("dark"), n[y].classList.remove("light"));
        for (y = 0; y < a.length; y++) a[y].classList.contains("text-white") && (a[y].classList.remove("text-white"), a[y].classList.add("text-dark"));
        for (y = 0; y < l.length; y++) !l[y].classList.contains("text-white") || l[y].closest(".sidenav") || l[y].closest(".card.bg-gradient-dark") || (l[y].classList.remove("text-white"), l[y].classList.add("text-dark"));
        for (y = 0; y < o.length; y++) o[y].classList.contains("text-white") && (o[y].classList.remove("text-white"), o[y].classList.add("text-dark"));
        for (y = 0; y < d.length; y++) d[y].classList.contains("text-white") && !d[y].closest(".sidenav") && (d[y].classList.remove("text-white"), d[y].classList.add("text-dark"));
        for (y = 0; y < u.length; y++) u[y].classList.contains("text-white") && (u[y].classList.remove("text-white"), u[y].classList.remove("opacity-8"), u[y].classList.add("text-dark"));
        for (y = 0; y < g.length; y++) g[y].classList.contains("bg-gray-600") && (g[y].classList.remove("bg-gray-600"), g[y].classList.add("bg-gray-100"));
        for (y = 0; y < L.length; y++) L[y].hasAttribute("fill") && L[y].setAttribute("fill", "#252f40");
        for (y = 0; y < m.length; y++) m[y].closest(".card.bg-gradient-dark") || (m[y].classList.remove("text-white"), m[y].classList.add("text-dark"));
        for (y = 0; y < b.length; y++) b[y].classList.remove("border-dark");
        e.removeAttribute("checked")
    } else {
        t.classList.add("dark-version");
        for (var y = 0; y < s.length; y++) s[y].classList.contains("dark") && (s[y].classList.remove("dark"), s[y].classList.add("light"));
        for (var y = 0; y < n.length; y++) n[y].classList.contains("dark") && (n[y].classList.remove("dark"), n[y].classList.add("light"));
        for (var y = 0; y < a.length; y++) a[y].classList.contains("text-dark") && (a[y].classList.remove("text-dark"), a[y].classList.add("text-white"));
        for (var y = 0; y < i.length; y++) i[y].classList.contains("text-dark") && (i[y].classList.remove("text-dark"), i[y].classList.add("text-white"));
        for (var y = 0; y < r.length; y++) r[y].classList.contains("text-dark") && (r[y].classList.remove("text-dark"), r[y].classList.add("text-white"));
        for (var y = 0; y < c.length; y++) c[y].classList.contains("text-dark") && (c[y].classList.remove("text-dark"), c[y].classList.add("text-white"));
        for (var y = 0; y < u.length; y++) u[y].classList.contains("text-secondary") && (u[y].classList.remove("text-secondary"), u[y].classList.add("text-white"), u[y].classList.add("opacity-8"));
        for (var y = 0; y < f.length; y++) f[y].classList.contains("bg-gray-100") && (f[y].classList.remove("bg-gray-100"), f[y].classList.add("bg-gray-600"));
        for (var y = 0; y < v.length; y++) v[y].classList.remove("text-dark"), v[y].classList.add("text-white");
        for (var y = 0; y < L.length; y++) L[y].hasAttribute("fill") && L[y].setAttribute("fill", "#fff");
        for (var y = 0; y < h.length; y++) h[y].classList.add("border-dark");
        e.setAttribute("checked", "true")
    }
}
window.addEventListener("resize", navbarColorOnResize), window.addEventListener("resize", sidenavTypeOnResize), window.addEventListener("load", sidenavTypeOnResize);
//# sourceMappingURL=_site_dashboard_free/assets/js/dashboard-free.js.map