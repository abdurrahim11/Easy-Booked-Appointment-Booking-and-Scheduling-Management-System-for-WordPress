function abs_add_to_calendar() {
    function $d(e) {
        return document.getElementById(e)
    }
    var addeventatc = function () {
        var e, t, a, o, n, d, c, i, r = !1,
            s = 1,
            l = !1,
            p = !0,
            u = !1,
            v = !1,
            m = !1,
            g = 1,
            h = "",
            f = !0,
            b = !0,
            w = !0,
            x = !0,
            k = !0,
            y = !0,
            _ = "Apple Calendar",
            T = "Google <em>(online)</em>",
            z = "Outlook",
            E = "Outlook.com <em>(online)</em>",
            N = "Yahoo <em>(online)</em>",
            I = "Facebook Event",
            C = null,
            $ = null,
            L = null,
            A = null,
            H = null,
            R = null,
            M = !1;
        return {
            initialize: function () {
                if (!r) {
                    r = !0;
                    try {
                        addeventasync()
                    } catch (e) {}
                    t = (e = "https:") + "//" + (a = "addevent.com"), o = "undefined" != typeof SVGRect ? "https://www.addevent.com/gfx/icon-calendar-t1.svg" : "https://www.addevent.com/gfx/icon-calendar-t5.png", addeventatc.trycss(), addeventatc.generate()
                }
            },
            generate: function () {
                for (var e = document.getElementsByTagName("*"), t = 0; t < e.length; t += 1) addeventatc.hasclass(e[t], "addeventatc") && function () {
                    var a = "addeventatc" + s;
                    e[t].id = a, e[t].title = "", e[t].style.visibility = "visible", e[t].setAttribute("aria-haspopup", "true"), e[t].setAttribute("aria-expanded", "false"), e[t].setAttribute("tabindex", "0"), l ? (e[t].onclick = function () {
                        return !1
                    }, e[t].onmouseover = function () {
                        clearTimeout(c), addeventatc.toogle(this, {
                            type: "mouseover",
                            id: a
                        })
                    }, e[t].onmouseout = function () {
                        c = setTimeout(function () {
                            addeventatc.mouseout(this, {
                                type: "mouseout",
                                id: a
                            })
                        }, 100)
                    }) : (e[t].onclick = function () {
                        return addeventatc.toogle(this, {
                            type: "click",
                            id: a
                        }), !1
                    }, e[t].onmouseover = function () {}, e[t].onmouseout = function () {}), e[t].onkeydown = function (e) {
                        var t = e.which || e.keyCode;
                        "13" != t && "32" != t && "27" != t && "38" != t && "40" != t || e.preventDefault(), "13" != t && "32" != t || (addeventatc.keyboardclick(this, {
                            type: "click",
                            id: a
                        }), addeventatc.toogle(this, {
                            type: "click",
                            id: a,
                            keynav: !0
                        })), "27" == t && addeventatc.hideandreset(), "38" == t && addeventatc.keyboard(this, {
                            type: "keyboard",
                            id: a,
                            key: "up"
                        }), "40" == t && addeventatc.keyboard(this, {
                            type: "keyboard",
                            id: a,
                            key: "down"
                        }), M = !0
                    }, e[t].onblur = function () {
                        M && setTimeout(function () {
                            addeventatc.hideandreset()
                        }, 300)
                    };
                    var o = e[t];
                    if ("none" != e[t].getAttribute("data-styling") && "inline-buttons" != e[t].getAttribute("data-render") || (p = !1), p) {
                        var n = document.createElement("span");
                        n.className = "addeventatc_icon", o.appendChild(n)
                    }
                    s++, u = !0;
                    for (var d = e[t].getElementsByTagName("*"), i = 0; i < d.length; i += 1) addeventatc.hasclass(d[i], "atc_node") || ("" != d[i].className ? d[i].className += " atc_node" : d[i].className += "atc_node");
                    if ("inline-buttons" == e[t].getAttribute("data-render")) {
                        e[t].onclick = function () {}, addeventatc.toogle(e[t], {
                            type: "render",
                            id: a
                        }), e[t].setAttribute("aria-expanded", "true"), e[t].removeAttribute("tabindex"), e[t].onkeydown = function () {}, e[t].blur = function () {};
                        var r = document.getElementById(a + "-drop");
                        if (r) {
                            r.setAttribute("aria-hidden", "false");
                            for (var d = r.getElementsByTagName("SPAN"), i = 0; i < d.length; i += 1) {
                                d[i];
                                d[i].tabIndex = "0", d[i].onkeydown = function (e) {
                                    var t = e.which || e.keyCode;
                                    "13" != t && "32" != t || e.target.click()
                                }
                            }
                        }
                    }
                }();
                g = addeventatc.topzindex(), p ? addeventatc.applycss() : (addeventatc.removeelement($d("ate_css")), addeventatc.removeelement($d("ate_tmp_css")), addeventatc.helpercss()), u && !v && (v = !0, addeventatc.track({
                    typ: "exposure",
                    cal: ""
                }))
            },
            toogle: function (e, t) {
                var a, o, c, i = !1,
                    r = "";
                if (a = e.id, o = $d(a)) {
                    c = o.getAttribute("data-direct");
                    var s = o.getAttribute("data-intel"),
                        l = o.getAttribute("data-intel-apple");
                    if ("ios" == addeventatc.agent() && "click" == t.type && "true" !== l && "false" !== s && (c = "appleical", o.setAttribute("data-intel-apple", "true")), "outlook" == c || "google" == c || "yahoo" == c || "hotmail" == c || "outlookcom" == c || "appleical" == c || "apple" == c || "facebook" == c) "click" == t.type && (addeventatc.click({
                        button: a,
                        service: c,
                        id: t.id
                    }), null != C && addeventatc.trigger("button_click", {
                        id: a
                    }));
                    else if ("mouseover" == t.type && d != o && (m = !1), "click" == t.type || "render" == t.type || "mouseover" == t.type && !m) {
                        "mouseover" == t.type && (m = !0, null != $ && addeventatc.trigger("button_mouseover", {
                            id: a
                        })), i = addeventatc.getburl({
                            id: a,
                            facebook: !0
                        }), "" == h && (h = "appleical,google,outlook,outlookcom,yahoo,facebook");
                        for (var p = (h = (h += ",").replace(/ /gi, "")).split(","), u = 0; u < p.length; u += 1)(f && "ical" == p[u] || f && "appleical" == p[u]) && (r += '<span class="ateappleical" id="' + a + '-appleical" role="menuitem">' + _ + "</span>"), b && "google" == p[u] && (r += '<span class="ategoogle" id="' + a + '-google" role="menuitem">' + T + "</span>"), w && "outlook" == p[u] && (r += '<span class="ateoutlook" id="' + a + '-outlook" role="menuitem">' + z + "</span>"), (x && "hotmail" == p[u] || x && "outlookcom" == p[u]) && (r += '<span class="ateoutlookcom" id="' + a + '-outlookcom" role="menuitem">' + E + "</span>"), k && "yahoo" == p[u] && (r += '<span class="ateyahoo" id="' + a + '-yahoo" role="menuitem">' + N + "</span>"), i && "facebook" == p[u] && y && "facebook" == p[u] && (r += '<span class="atefacebook" id="' + a + '-facebook" role="menuitem">' + I + "</span>");
                        if (addeventatc.getlicense(n) || (r += '<em class="copyx"><em class="brx"></em><em class="frs"><a href="https://www.addevent.com" title="" tabindex="-1" id="' + a + '-home">AddEvent.com</a></em></em>'), !$d(a + "-drop")) {
                            var v = document.createElement("span");
                            v.id = a + "-drop", v.className = "addeventatc_dropdown", v.setAttribute("aria-hidden", "true"), v.setAttribute("aria-labelledby", a), v.innerHTML = r, o.appendChild(v)
                        }
                        $d(a + "-appleical") && ($d(a + "-appleical").onclick = function () {
                            addeventatc.click({
                                button: a,
                                service: "appleical",
                                id: t.id
                            })
                        }), $d(a + "-google") && ($d(a + "-google").onclick = function () {
                            addeventatc.click({
                                button: a,
                                service: "google",
                                id: t.id
                            })
                        }), $d(a + "-outlook") && ($d(a + "-outlook").onclick = function () {
                            addeventatc.click({
                                button: a,
                                service: "outlook",
                                id: t.id
                            })
                        }), $d(a + "-outlookcom") && ($d(a + "-outlookcom").onclick = function () {
                            addeventatc.click({
                                button: a,
                                service: "outlookcom",
                                id: t.id
                            })
                        }), $d(a + "-yahoo") && ($d(a + "-yahoo").onclick = function () {
                            addeventatc.click({
                                button: a,
                                service: "yahoo",
                                id: t.id
                            })
                        }), $d(a + "-facebook") && ($d(a + "-facebook").onclick = function () {
                            addeventatc.click({
                                button: a,
                                service: "facebook",
                                id: t.id
                            })
                        }), $d(a + "-home") && ($d(a + "-home").onclick = function () {
                            addeventatc.click({
                                button: a,
                                service: "home",
                                id: t.id
                            })
                        }), addeventatc.show(a, t)
                    }
                    return d = o, !1
                }
            },
            click: function (e) {
                var t, a, o, n = location.origin,
                    d = !0;
                if (void 0 === location.origin && (n = location.protocol + "//" + location.host), t = $d(e.button)) {
                    if ("home" == e.service) o = "https://www.addevent.com";
                    else {
                        a = addeventatc.getburl({
                            id: e.button,
                            facebook: !1
                        }), o = "https://www.addevent.com/create/?service=" + e.service + a + "&reference=" + n, "outlook" != e.service && "appleical" != e.service || (d = !1, addeventatc.usewebcal() && (o = "webcal://www.addevent.com/create/?uwc=on&service=" + e.service + a + "&reference=" + n));
                        var c = t.getAttribute("data-id");
                        null !== c && (o = "https://www.addevent.com/event/?" + c + "+" + e.service)
                    }
                    if (!$d("atecllink")) {
                        var i = document.createElement("a");
                        i.id = "atecllink", i.rel = "external", i.setAttribute("data-role", "none"), i.innerHTML = "{addeventatc-ghost-link}", i.style.display = "none", document.body.appendChild(i)
                    }
                    var r = $d("atecllink");
                    if (r.target = d ? "_blank" : "_self", r.href = o, addeventatc.eclick("atecllink"), addeventatc.track({
                        typ: "click",
                        cal: e.service
                    }), null != R) {
                        addeventatc.trigger("button_dropdown_click", {
                            id: e.button,
                            service: e.service
                        });
                        try {
                            (event || window.event).stopPropagation()
                        } catch (e) {}
                    }
                }
            },
            mouseout: function (e, t) {
                m = !1, addeventatc.hideandreset(), null != L && addeventatc.trigger("button_mouseout", {
                    id: t.id
                })
            },
            show: function (e, t) {
                var a = $d(e),
                    o = $d(e + "-drop");
                if (a && o)
                    if ("block" == addeventatc.getstyle(o, "display")) addeventatc.hideandreset();
                    else {
                        addeventatc.hideandreset(!0), o.style.display = "block", a.style.outline = "0", a.style.zIndex = g + 1, a.className = a.className + " addeventatc-selected", a.className = a.className.replace(/\s+/g, " "), a.setAttribute("aria-expanded", "true"), o.setAttribute("aria-hidden", "false"), t.keynav && addeventatc.keyboard(this, {
                            type: "keyboard",
                            id: e,
                            key: "down"
                        });
                        var n = a.getAttribute("data-dropdown-x"),
                            d = a.getAttribute("data-dropdown-y"),
                            c = "auto",
                            i = "auto";
                        null != n && (i = n), null != d && (c = d), o.style.left = "0px", o.style.top = "0px", o.style.display = "block";
                        var r = parseInt(a.offsetHeight),
                            s = parseInt(a.offsetWidth),
                            l = parseInt(o.offsetHeight),
                            p = parseInt(o.offsetWidth),
                            u = addeventatc.viewport(),
                            v = parseInt(u.w),
                            m = parseInt(u.h),
                            h = parseInt(u.x),
                            f = parseInt(u.y),
                            b = addeventatc.elementposition(o),
                            w = parseInt(b.x),
                            x = parseInt(b.y) + l,
                            k = m + f,
                            y = w + p,
                            _ = v + h,
                            T = 0,
                            z = 0;
                        "down" == c && "left" == i ? (T = "0px", z = r + "px") : "up" == c && "left" == i ? (T = "0px", z = -l + "px") : "down" == c && "right" == i ? (T = -(p - s) + "px", z = r + "px") : "up" == c && "right" == i ? (T = -(p - s) + "px", z = -l + "px") : "auto" == c && "left" == i ? (T = "0px", z = x > k ? -l + "px" : r + "px") : "auto" == c && "right" == i ? (T = -(p - s) + "px", z = x > k ? -l + "px" : r + "px") : (z = x > k ? -l + "px" : r + "px", T = y > _ ? -(p - s) + "px" : "0px"), o.style.left = T, o.style.top = z, "click" == t.type && null != C && addeventatc.trigger("button_click", {
                            id: e
                        }), null != A && addeventatc.trigger("button_dropdown_show", {
                            id: e
                        })
                    }
            },
            hide: function (e) {
                var t = !1;
                ("string" == typeof e && "" !== e || e instanceof String && "" !== e) && (e.indexOf("addeventatc") > -1 || e.indexOf("atc_node") > -1) && (t = !0), t || addeventatc.hideandreset()
            },
            hideandreset: function (e) {
                for (var t = "", a = document.getElementsByTagName("*"), o = 0; o < a.length; o += 1)
                    if (addeventatc.hasclass(a[o], "addeventatc")) {
                        a[o].className = a[o].className.replace(/addeventatc-selected/gi, ""), a[o].className = a[o].className.replace(/\s+$/, ""), a[o].style.zIndex = "auto", a[o].style.outline = "";
                        var n = $d(a[o].id + "-drop");
                        if (n) {
                            var d = addeventatc.getstyle(n, "display");
                            "block" == d && (t = a[o].id), n.style.display = "none", "block" !== (d = addeventatc.getstyle(n, "display")) && (a[o].setAttribute("aria-expanded", "false"), n.setAttribute("aria-hidden", "true"));
                            for (var c = n.getElementsByTagName("SPAN"), i = 0; i < c.length; i += 1) {
                                var r = new RegExp("(\\s|^)drop_markup(\\s|$)");
                                c[i].className = c[i].className.replace(r, " "), c[i].className = c[i].className.replace(/\s+$/, "")
                            }
                        }
                    }
                e || null != H && addeventatc.trigger("button_dropdown_hide", {
                    id: t
                })
            },
            getburl: function (e) {
                var t = $d(e.id),
                    a = "",
                    o = !1;
                if (t)
                    for (var n = t.getElementsByTagName("*"), d = 0; d < n.length; d += 1)(addeventatc.hasclass(n[d], "_start") || addeventatc.hasclass(n[d], "start")) && (a += "&dstart=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_end") || addeventatc.hasclass(n[d], "end")) && (a += "&dend=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_zonecode") || addeventatc.hasclass(n[d], "zonecode")) && (a += "&dzone=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_timezone") || addeventatc.hasclass(n[d], "timezone")) && (a += "&dtime=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_summary") || addeventatc.hasclass(n[d], "summary") || addeventatc.hasclass(n[d], "title")) && (a += "&dsum=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_description") || addeventatc.hasclass(n[d], "description")) && (a += "&ddesc=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_location") || addeventatc.hasclass(n[d], "location")) && (a += "&dloca=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_organizer") || addeventatc.hasclass(n[d], "organizer")) && (a += "&dorga=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_organizer_email") || addeventatc.hasclass(n[d], "organizer_email")) && (a += "&dorgaem=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_attendees") || addeventatc.hasclass(n[d], "attendees")) && (a += "&datte=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_all_day_event") || addeventatc.hasclass(n[d], "all_day_event")) && (a += "&dallday=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_date_format") || addeventatc.hasclass(n[d], "date_format")) && (a += "&dateformat=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_alarm_reminder") || addeventatc.hasclass(n[d], "alarm_reminder")) && (a += "&alarm=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_recurring") || addeventatc.hasclass(n[d], "recurring")) && (a += "&drule=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_facebook_event") || addeventatc.hasclass(n[d], "facebook_event")) && (a += "&fbevent=" + encodeURIComponent(n[d].innerHTML), o = !0), (addeventatc.hasclass(n[d], "_client") || addeventatc.hasclass(n[d], "client")) && (a += "&client=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_calname") || addeventatc.hasclass(n[d], "calname")) && (a += "&calname=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_uid") || addeventatc.hasclass(n[d], "uid")) && (a += "&uid=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_status") || addeventatc.hasclass(n[d], "status")) && (a += "&status=" + encodeURIComponent(n[d].innerHTML)), (addeventatc.hasclass(n[d], "_method") || addeventatc.hasclass(n[d], "method")) && (a += "&method=" + encodeURIComponent(n[d].innerHTML));
                return e.facebook && (a = o), a
            },
            trycss: function () {
                if (!$d("ate_tmp_css")) {
                    try {
                        var e = "";
                        e = ".addeventatc {visibility:hidden;}", e += ".addeventatc .data {display:none!important;}", e += ".addeventatc .start, .addeventatc .end, .addeventatc .timezone, .addeventatc .title, .addeventatc .description, .addeventatc .location, .addeventatc .organizer, .addeventatc .organizer_email, .addeventatc .facebook_event, .addeventatc .all_day_event, .addeventatc .date_format, .addeventatc .alarm_reminder, .addeventatc .recurring, .addeventatc .attendees, .addeventatc .client, .addeventatc .calname, .addeventatc .uid, .addeventatc .status, .addeventatc .method {display:none!important;}", p && (e += ".addeventatc {background-image:url(https://www.addevent.com/gfx/icon-calendar-t5.png), url(https://www.addevent.com/gfx/icon-calendar-t1.svg), url(https://www.addevent.com/gfx/icon-apple-t1.svg), url(https://www.addevent.com/gfx/icon-facebook-t1.svg), url(https://www.addevent.com/gfx/icon-google-t1.svg), url(https://www.addevent.com/gfx/icon-outlook-t1.svg), url(https://www.addevent.com/gfx/icon-yahoo-t1.svg);background-position:-9999px -9999px;background-repeat:no-repeat;}");
                        var t = document.createElement("style");
                        t.type = "text/css", t.id = "ate_tmp_css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t)
                    } catch (e) {}
                    addeventatc.track({
                        typ: "jsinit",
                        cal: ""
                    })
                }
            },
            applycss: function () {
                if (!$d("ate_css")) {
                    var e = "";
                    e += '.addeventatc {display:inline-block;*display:inline;zoom:1;position:relative;z-index:1;font-family:Roboto,"Helvetica Neue",Helvetica,Optima,Segoe,"Segoe UI",Candara,Calibri,Arial,sans-serif;color:#000!important;font-weight:300;line-height:100%!important;background-color:#fff;border:1px solid;border-color:#e5e6e9 #dfe0e4 #d0d1d5;font-size:15px;text-decoration:none;padding:13px 12px 12px 43px;-webkit-border-radius:3px;border-radius:3px;cursor:pointer;-webkit-font-smoothing:antialiased!important;text-shadow:1px 1px 1px rgba(0,0,0,0.004);-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);background-image:url(https://www.addevent.com/gfx/icon-calendar-t5.png), url(https://www.addevent.com/gfx/icon-calendar-t1.svg), url(https://www.addevent.com/gfx/icon-apple-t1.svg), url(https://www.addevent.com/gfx/icon-facebook-t1.svg), url(https://www.addevent.com/gfx/icon-google-t1.svg), url(https://www.addevent.com/gfx/icon-outlook-t1.svg), url(https://www.addevent.com/gfx/icon-yahoo-t1.svg);background-position:-9999px -9999px;background-repeat:no-repeat;}', e += ".addeventatc:hover {border:1px solid #aab9d4;color:#000;font-size:15px;text-decoration:none;}", e += ".addeventatc:focus {outline:none;border:1px solid #aab9d4;}", e += ".addeventatc:active {top:1px;}", e += ".addeventatc-selected {background-color:#f9f9f9;}", e += ".addeventatc .addeventatc_icon {width:18px;height:18px;position:absolute;z-index:1;left:12px;top:10px;background:url(" + o + ") no-repeat;background-size:18px 18px;}", e += ".addeventatc .start, .addeventatc .end, .addeventatc .timezone, .addeventatc .title, .addeventatc .description, .addeventatc .location, .addeventatc .organizer, .addeventatc .organizer_email, .addeventatc .facebook_event, .addeventatc .all_day_event, .addeventatc .date_format, .addeventatc .alarm_reminder, .addeventatc .recurring, .addeventatc .attendees, .addeventatc .client, .addeventatc .calname, .addeventatc .uid, .addeventatc .status, .addeventatc .method {display:none!important;}", e += ".addeventatc .data {display:none!important;}", addeventatc.getlicense(n) ? e += ".addeventatc_dropdown {width:200px;position:absolute;z-index:99999;padding:6px 0px 6px 0px;background:#fff;text-align:left;display:none;margin-top:-2px;margin-left:-1px;border-top:1px solid #c8c8c8;border-right:1px solid #bebebe;border-bottom:1px solid #a8a8a8;border-left:1px solid #bebebe;-moz-border-radius:2px;-webkit-border-radius:2px;-webkit-box-shadow:1px 3px 6px rgba(0,0,0,0.15);-moz-box-shadow:1px 3px 6px rgba(0,0,0,0.15);box-shadow:1px 3px 6px rgba(0,0,0,0.15);}" : e += ".addeventatc_dropdown {width:200px;position:absolute;z-index:99999;padding:6px 0px 0px 0px;background:#fff;text-align:left;display:none;margin-top:-2px;margin-left:-1px;border-top:1px solid #c8c8c8;border-right:1px solid #bebebe;border-bottom:1px solid #a8a8a8;border-left:1px solid #bebebe;-moz-border-radius:2px;-webkit-border-radius:2px;-webkit-box-shadow:1px 3px 6px rgba(0,0,0,0.15);-moz-box-shadow:1px 3px 6px rgba(0,0,0,0.15);box-shadow:1px 3px 6px rgba(0,0,0,0.15);}", e += ".addeventatc_dropdown span {display:block;line-height:100%;background:#fff;text-decoration:none;font-size:14px;color:#333;padding:9px 10px 9px 40px;}", e += ".addeventatc_dropdown span:hover {background-color:#f4f4f4;color:#000;text-decoration:none;font-size:14px;}", e += ".addeventatc_dropdown .drop_markup {background-color:#f4f4f4;color:#000;text-decoration:none;font-size:14px;}", e += ".addeventatc_dropdown .copyx {height:21px;display:block;position:relative;cursor:default;}", e += ".addeventatc_dropdown .brx {height:1px;overflow:hidden;background:#e0e0e0;position:absolute;z-index:100;left:10px;right:10px;top:9px;}", e += ".addeventatc_dropdown .frs {position:absolute;top:5px;cursor:pointer;right:10px;font-style:normal!important;font-weight:normal!important;text-align:right;z-index:101;line-height:9px!important;background:#fff;text-decoration:none;font-size:9px!important;color:#cacaca!important;}", e += ".addeventatc_dropdown .frs a {margin:0!important;padding:0!important;font-style:normal!important;font-weight:normal!important;line-height:9px!important;background-color:#fff!important;text-decoration:none;font-size:9px!important;color:#cacaca!important;padding-left:10px!important;display:inline-block;}", e += ".addeventatc_dropdown .frs a:hover {color:#999!important;}", e += ".addeventatc_dropdown .ateappleical {background-image:url(https://www.addevent.com/gfx/icon-apple-t1.svg);background-repeat:no-repeat;background-position:13px 50%;background-size:14px auto;}", e += ".addeventatc_dropdown .ateoutlook {background-image:url(https://www.addevent.com/gfx/icon-outlook-t1.svg);background-repeat:no-repeat;background-position:12px 50%;background-size:16px auto;}", e += ".addeventatc_dropdown .ateoutlookcom {background-image:url(https://www.addevent.com/gfx/icon-outlook-t1.svg);background-repeat:no-repeat;background-position:12px 50%;background-size:16px auto;}", e += ".addeventatc_dropdown .ategoogle {background-image:url(https://www.addevent.com/gfx/icon-google-t1.svg);background-repeat:no-repeat;background-position:12px 50%;background-size:16px auto;}", e += ".addeventatc_dropdown .ateyahoo {background-image:url(https://www.addevent.com/gfx/icon-yahoo-t1.svg);background-repeat:no-repeat;background-position:12px 50%;background-size:16px auto;}", e += ".addeventatc_dropdown .atefacebook {background-image:url(https://www.addevent.com/gfx/icon-facebook-t1.svg);background-repeat:no-repeat;background-position:12px 50%;background-size:16px auto;}", e += ".addeventatc_dropdown em {font-size:12px!important;color:#999!important;}";
                    var t = document.createElement("style");
                    t.type = "text/css", t.id = "ate_css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t), addeventatc.removeelement($d("ate_tmp_css"))
                }
            },
            helpercss: function () {
                if (!$d("ate_helper_css")) {
                    var e = "";
                    e += ".addeventatc_dropdown .drop_markup {background-color:#f4f4f4;}", e += ".addeventatc_dropdown .frs a {margin:0!important;padding:0!important;font-style:normal!important;font-weight:normal!important;line-height:110%!important;background-color:#fff!important;text-decoration:none;font-size:9px!important;color:#cacaca!important;display:inline-block;}", e += ".addeventatc_dropdown .frs a:hover {color:#999!important;}", e += ".addeventatc .start, .addeventatc .end, .addeventatc .timezone, .addeventatc .title, .addeventatc .description, .addeventatc .location, .addeventatc .organizer, .addeventatc .organizer_email, .addeventatc .facebook_event, .addeventatc .all_day_event, .addeventatc .date_format, .addeventatc .alarm_reminder, .addeventatc .recurring, .addeventatc .attendees, .addeventatc .client, .addeventatc .calname, .addeventatc .uid, .addeventatc .status, .addeventatc .method {display:none!important;}";
                    var t = document.createElement("style");
                    t.type = "text/css", t.id = "ate_helper_css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.getElementsByTagName("head")[0].appendChild(t)
                }
            },
            removeelement: function (e) {
                try {
                    return !!(hdx = e) && hdx.parentNode.removeChild(hdx)
                } catch (e) {}
            },
            topzindex: function () {
                for (var e = 1, t = document.getElementsByTagName("*"), a = 0; a < t.length; a += 1)
                    if (addeventatc.hasclass(t[a], "addeventatc") || addeventatc.hasclass(t[a], "addeventstc")) {
                        var o = addeventatc.getstyle(t[a], "z-index");
                        !isNaN(parseFloat(o)) && isFinite(o) && (o = parseInt(o)) > e && (e = o)
                    }
                return e
            },
            viewport: function () {
                var e = 0,
                    t = 0,
                    a = 0,
                    o = 0;
                return "number" == typeof window.innerWidth ? (e = window.innerWidth, t = window.innerHeight) : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? (e = document.documentElement.clientWidth, t = document.documentElement.clientHeight) : document.body && (document.body.clientWidth || document.body.clientHeight) && (e = document.body.clientWidth, t = document.body.clientHeight), document.all ? (o = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft, a = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) : (o = window.pageXOffset, a = window.pageYOffset), {
                    w: e,
                    h: t,
                    x: o,
                    y: a
                }
            },
            elementposition: function (e) {
                var t = 0,
                    a = 0;
                if (e.offsetParent)
                    for (t = e.offsetLeft, a = e.offsetTop; e = e.offsetParent;) t += e.offsetLeft, a += e.offsetTop;
                return {
                    x: t,
                    y: a
                }
            },
            getstyle: function (e, t) {
                var a, o = e;
                return o.currentStyle ? a = o.currentStyle[t] : window.getComputedStyle && (a = document.defaultView.getComputedStyle(o, null).getPropertyValue(t)), a
            },
            getlicense: function (e) {
                var t = location.origin,
                    a = !1;
                if (void 0 === location.origin && (t = location.protocol + "//" + location.host), e) {
                    var o = e.substring(0, 1),
                        n = e.substring(9, 10),
                        d = e.substring(17, 18);
                    "a" == o && "z" == n && "m" == d && (a = !0)
                }
                return (-1 == t.indexOf("addevent.com") && "aao8iuet5zp9iqw5sm9z" == e || -1 == t.indexOf("addevent.to") && "aao8iuet5zp9iqw5sm9z" == e || -1 == t.indexOf("addevent.com") && "aao8iuet5zp9iqw5sm9z" == e) && (a = !0), a
            },
            refresh: function () {
                for (var e = document.getElementsByTagName("*"), t = [], a = 0; a < e.length; a += 1)
                    if (addeventatc.hasclass(e[a], "addeventatc")) {
                        e[a].className = e[a].className.replace(/addeventatc-selected/gi, ""), e[a].id = "";
                        for (var o = e[a].getElementsByTagName("*"), n = 0; n < o.length; n += 1)(addeventatc.hasclass(o[n], "addeventatc_icon") || addeventatc.hasclass(o[n], "addeventatc_dropdown")) && t.push(o[n])
                    }
                for (var d = 0; d < t.length; d += 1) addeventatc.removeelement(t[d]);
                addeventatc.removeelement($d("ate_css")), s = 1, v = !1, addeventatc.generate()
            },
            hasclass: function (e, t) {
                return new RegExp("(\\s|^)" + t + "(\\s|$)").test(e.className)
            },
            eclick: function (e) {
                var t = document.getElementById(e);
                if (t.click) t.click();
                else if (document.createEvent) {
                    var a = document.createEvent("MouseEvents");
                    a.initEvent("click", !0, !0), t.dispatchEvent(a)
                }
            },
            track: function (e) {
                new Image, (new Date).getTime(), encodeURIComponent(window.location.origin)
            },
            getguid: function () {
                for (var e = "addevent_track_cookie=", t = "", a = document.cookie.split(";"), o = 0; o < a.length; o++) {
                    for (var n = a[o];
                         " " == n.charAt(0);) n = n.substring(1, n.length);
                    0 == n.indexOf(e) && (t = n.substring(e.length, n.length))
                }
                if ("" == t) {
                    var d = (addeventatc.s4() + addeventatc.s4() + "-" + addeventatc.s4() + "-4" + addeventatc.s4().substr(0, 3) + "-" + addeventatc.s4() + "-" + addeventatc.s4() + addeventatc.s4() + addeventatc.s4()).toLowerCase(),
                        c = new Date;
                    c.setTime(c.getTime() + 31536e6);
                    var i = "expires=" + c.toUTCString();
                    document.cookie = "addevent_track_cookie=" + d + "; " + i, t = d
                }
                return t
            },
            s4: function () {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            },
            documentclick: function (e) {
                e = e || window.event, e = e.target || e.srcElement, ate_touch_capable ? (clearTimeout(i), i = setTimeout(function () {
                    addeventatc.hide(e.className)
                }, 500)) : addeventatc.hide(e.className)
            },
            trigger: function (e, t) {
                if ("button_click" == e) try {
                    C(t)
                } catch (e) {}
                if ("button_mouseover" == e) try {
                    $(t)
                } catch (e) {}
                if ("button_mouseout" == e) try {
                    L(t)
                } catch (e) {}
                if ("button_dropdown_show" == e) try {
                    A(t)
                } catch (e) {}
                if ("button_dropdown_hide" == e) try {
                    H(t)
                } catch (e) {}
                if ("button_dropdown_click" == e) try {
                    R(t)
                } catch (e) {}
            },
            register: function (e, t) {
                "button-click" == e && (C = t), "button-mouseover" == e && ($ = t), "button-mouseout" == e && (L = t), "button-dropdown-show" == e && (A = t), "button-dropdown-hide" == e && (H = t), "button-dropdown-click" == e && (R = t)
            },
            settings: function (e) {
                void 0 != e.license && (n = e.license), void 0 != e.css && (e.css ? p = !0 : (p = !1, addeventatc.removeelement($d("ate_css")))), void 0 != e.mouse && (l = e.mouse), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (l = !1), void 0 != e.outlook && void 0 != e.outlook.show && (w = e.outlook.show), void 0 != e.google && void 0 != e.google.show && (b = e.google.show), void 0 != e.yahoo && void 0 != e.yahoo.show && (k = e.yahoo.show), void 0 != e.hotmail && void 0 != e.hotmail.show && (x = e.hotmail.show), void 0 != e.outlookcom && void 0 != e.outlookcom.show && (x = e.outlookcom.show), void 0 != e.ical && void 0 != e.ical.show && (f = e.ical.show), void 0 != e.appleical && void 0 != e.appleical.show && (f = e.appleical.show), void 0 != e.facebook && void 0 != e.facebook.show && (y = e.facebook.show), void 0 != e.outlook && void 0 != e.outlook.text && (z = e.outlook.text), void 0 != e.google && void 0 != e.google.text && (T = e.google.text), void 0 != e.yahoo && void 0 != e.yahoo.text && (N = e.yahoo.text), void 0 != e.hotmail && void 0 != e.hotmail.text && (E = e.hotmail.text), void 0 != e.outlookcom && void 0 != e.outlookcom.text && (E = e.outlookcom.text), void 0 != e.ical && void 0 != e.ical.text && (_ = e.ical.text), void 0 != e.appleical && void 0 != e.appleical.text && (_ = e.appleical.text), void 0 != e.facebook && void 0 != e.facebook.text && (I = e.facebook.text), void 0 != e.dropdown && void 0 != e.dropdown.order && (h = e.dropdown.order)
            },
            keyboard: function (e, t) {
                var a = document.getElementById(t.id + "-drop");
                if (a && "block" == addeventatc.getstyle(a, "display")) {
                    for (var o = a.getElementsByTagName("SPAN"), n = null, d = 0, c = 0, i = 0; i < o.length; i += 1) d++, addeventatc.hasclass(o[i], "drop_markup") && (n = o[i], c = d);
                    null === n ? c = 1 : "down" == t.key ? c >= d ? c = 1 : c++ : 1 == c ? c = d : c--, d = 0;
                    for (i = 0; i < o.length; i += 1)
                        if (++d == c) o[i].className += " drop_markup";
                        else {
                            var r = new RegExp("(\\s|^)drop_markup(\\s|$)");
                            o[i].className = o[i].className.replace(r, " "), o[i].className = o[i].className.replace(/\s+$/, "")
                        }
                }
            },
            keyboardclick: function (e, t) {
                var a = document.getElementById(t.id + "-drop");
                if (a) {
                    for (var o = a.getElementsByTagName("SPAN"), n = null, d = 0; d < o.length; d += 1) addeventatc.hasclass(o[d], "drop_markup") && (n = o[d]);
                    if (null !== n) {
                        n.click();
                        for (d = 0; d < o.length; d += 1) {
                            var c = new RegExp("(\\s|^)drop_markup(\\s|$)");
                            o[d].className = o[d].className.replace(c, " "), o[d].className = o[d].className.replace(/\s+$/, "")
                        }
                    }
                }
            },
            usewebcal: function () {
                var e = !1,
                    t = window.navigator.userAgent.toLowerCase();
                return /iphone|ipod|ipad/.test(t) && (e = !!t.match("crios") || !t.match("safari")), e
            },
            agent: function () {
                var e = navigator.userAgent || navigator.vendor || window.opera;
                return /windows phone/i.test(e) ? "windows_phone" : /android/i.test(e) ? "android" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "ios" : "unknown"
            }
        }
    }();
    ! function (e, t) {
        "use strict";

        function a() {
            if (!d) {
                d = !0;
                for (var e = 0; e < n.length; e++) n[e].fn.call(window, n[e].ctx);
                n = []
            }
        }

        function o() {
            "complete" === document.readyState && a()
        }
        e = e || "docReady";
        var n = [],
            d = !1,
            c = !1;
        (t = t || window)[e] = function (e, t) {
            if ("function" != typeof e) throw new TypeError("callback for docReady(fn) must be a function");
            d ? setTimeout(function () {
                e(t)
            }, 1) : (n.push({
                fn: e,
                ctx: t
            }), "complete" === document.readyState || !document.attachEvent && "interactive" === document.readyState ? setTimeout(a, 1) : c || (document.addEventListener ? (document.addEventListener("DOMContentLoaded", a, !1), window.addEventListener("load", a, !1)) : (document.attachEvent("onreadystatechange", o), window.attachEvent("onload", a)), c = !0))
        }
    }("addeventReady", window);
    var ate_touch_capable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;
    window.addEventListener ? (document.addEventListener("click", addeventatc.documentclick, !1), ate_touch_capable && document.addEventListener("touchend", addeventatc.documentclick, !1)) : window.attachEvent ? (document.attachEvent("onclick", addeventatc.documentclick), ate_touch_capable && document.attachEvent("ontouchend", addeventatc.documentclick)) : document.onclick = function () {
        addeventatc.documentclick(event)
    }, addeventReady(function () {
        addeventatc.initialize(), setTimeout("addeventatc.initialize();", 200)
    });
}

abs_add_to_calendar();