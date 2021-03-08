(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    [10], {
        "32cf": function(t, e, a) {},
        "7f1d": function(t, e, a) {
            "use strict";
            a.r(e);
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("q-page", {
                        staticClass: "flex projects-page"
                    }, [a("div", {
                        staticClass: "q-pa-xl row items-start justify-md-between justify-center q-gutter-md"
                    }, t._l(t.projects, (function(e) {
                        return a("q-card", {
                            key: e.name,
                            staticClass: "project-card",
                            class: t.$q.dark.isActive ? "bg-primary" : "",
                            attrs: {
                                dark: !1,
                                flat: "",
                                bordered: ""
                            }
                        }, [a("q-img", {
                            attrs: {
                                width: "298px",
                                height: "160px",
                                src: e.img
                            }
                        }), a("q-card-section", [a("div", {
                            staticClass: "text-warning"
                        }, [t._v(t._s(e.date))]), a("div", {
                            staticClass: "text-h5 q-mt-sm q-mb-xs text-accent"
                        }, [t._v(t._s(e.name))]), a("div", {
                            staticClass: "text-caption text-grey"
                        }, [t._v(t._s(e.desc))])]), a("q-card-actions", {
                            staticClass: "absolute-bottom"
                        }, [a("q-btn", {
                            attrs: {
                                flat: "",
                                color: t.$q.dark.isActive ? "white" : "black",
                                type: "a",
                                href: e.link,
                                target: "_blank",
                                icon: "link",
                                label: "View Project"
                            }
                        })], 1)], 1)
                    })), 1)])
                },
                i = [],
                r = {
                    name: "Projects",
                    data: function() {
                        return {
                            projects: [{
                                name: "this.",
                                date: "April 2020",
                                desc: "Designed and developed my personal portfolio website",
                                link: "https://jonafrank13.github.io/",
                                img: "/statics/website.png"
                            }, {
                                name: "Corona Virus Risk Calculator",
                                date: "March 2020",
                                desc: "Created a vue app to calculate the risk percentage for contracting the virus",
                                link: "https://jonafrank13.github.io/corona/#/",
                                img: "/statics/corona.png"
                            }, {
                                name: "Wordpress Blog Viewer",
                                date: "March 2020",
                                desc: "Created a web app to view wordpress blogs using Wordpress APIs",
                                link: "https://jonafrank13.github.io/blog/#/",
                                img: "/statics/blog.png"
                            }, {
                                name: "Simple Meeting Scheduler",
                                date: "Sep 2019",
                                desc: "Created a vue app to schedule meetings in the browser itself using localStorage, has some nifty features",
                                link: "https://jonafrank13.github.io/calendar/#/",
                                img: "/statics/calendar.png"
                            }, {
                                name: "Brimma Tech Official Website",
                                date: "Jan 2018",
                                desc: "Created the official website for the company",
                                link: "https://brimmatech.com/",
                                img: "/statics/brimma.png"
                            }, {
                                name: "GrabGrubScribe",
                                date: "Dec 2017",
                                desc: "Created a app similar to swiggy (POC)",
                                link: "https://jonafrank13.github.io/grabgrubscribe/",
                                img: "/statics/ggs.png"
                            }, {
                                name: "Hackernews PWA",
                                date: "Sep 2017",
                                desc: "Created a PWA for hackernews using it's public APIs",
                                link: "https://jonafrank13.github.io/hnpwa-quasar/",
                                img: "/statics/hnpwa.png"
                            }, {
                                name: "ElectroOculogram - Eye Gesture Recognition",
                                date: "Sep 2012",
                                desc: "Created a User - Computer/Platform Interface using electrooculogram based gesture recognition",
                                link: "http://onloop.net/hairyplotter/",
                                img: "/statics/eog.png"
                            }, {
                                name: "Github Repository (Rest of my projects)",
                                date: "Jun 2013 - Present",
                                desc: "Collection of all the rest of my projects that live on github",
                                link: "https://github.com/jonafrank13",
                                img: "/statics/git.png"
                            }]
                        }
                    }
                },
                n = r,
                c = (a("b2d5"), a("2877")),
                o = a("eebe"),
                l = a.n(o),
                p = a("9989"),
                d = a("f09f"),
                g = a("068f"),
                m = a("a370"),
                u = a("4b7e"),
                b = a("9c40"),
                h = Object(c["a"])(n, s, i, !1, null, "6198aead", null);
            e["default"] = h.exports;
            l()(h, "components", {
                QPage: p["a"],
                QCard: d["a"],
                QImg: g["a"],
                QCardSection: m["a"],
                QCardActions: u["a"],
                QBtn: b["a"]
            })
        },
        b2d5: function(t, e, a) {
            "use strict";
            var s = a("32cf"),
                i = a.n(s);
            i.a
        }
    }
]);