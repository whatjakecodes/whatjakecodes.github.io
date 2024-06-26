import {A as AA, S as eA, T as V, C as j, a as Y, b as X, P as tA} from "./vendor.f765fced.js";

const oA = function () {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) o(l);
    new MutationObserver(l => {
        for (const n of l) if (n.type === "childList") for (const s of n.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && o(s)
    }).observe(document, {childList: !0, subtree: !0});

    function t(l) {
        const n = {};
        return l.integrity && (n.integrity = l.integrity), l.referrerpolicy && (n.referrerPolicy = l.referrerpolicy), l.crossorigin === "use-credentials" ? n.credentials = "include" : l.crossorigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
    }

    function o(l) {
        if (l.ep) return;
        l.ep = !0;
        const n = t(l);
        fetch(l.href, n)
    }
};
oA();

function lA() {
    const A = new AA({width: 620, height: 440, transparent: !1, resolution: 1});
    return A.renderer.backgroundColor = 0, document.body.appendChild(A.view), A
}

var nA = "/assets/falling-leaf/leaf.f4d6898f.svg";

function sA(A, e) {
    const t = A, o = e, l = [t, o];
    let n, s, i, c, d, r;
    for (let m = 0; m < l.length; m++) {
        let u = l[m];
        for (let E = 0; E < u.length; E += 2) {
            const P = (E + 2) % u.length, W = {x: u[P + 1] - u[E + 1], y: u[E] - u[P]};
            for (n = s = null, r = 0; r < t.length; r += 2) i = W.x * t[r] + W.y * t[r + 1], (n === null || i < n) && (n = i), (s === null || i > s) && (s = i);
            for (c = d = null, r = 0; r < o.length; r += 2) i = W.x * o[r] + W.y * o[r + 1], (c === null || i < c) && (c = i), (d === null || i > d) && (d = i);
            if (s < c || d < n) return !1
        }
    }
    return !0
}

class F extends eA {
    collides(e) {
        let t = this.getLeafPoints();
        return sA(t, e)
    }

    getLeafPoints() {
        const e = this, t = 100, o = 125, {x: l, y: n} = e.toGlobal({x: 0, y: -o / 2}), {
            x: s,
            y: i
        } = e.toGlobal({x: t / 2, y: 0}), {x: c, y: d} = e.toGlobal({x: 0, y: o / 2}), {
            x: r,
            y: m
        } = e.toGlobal({x: -t / 2, y: 0});
        return [l, n, s, i, c, d, r, m]
    }
}

let h;
const R = Math.PI;
let v;
const iA = A => {
    v = A
}, rA = A => {
    const e = V.from(nA);
    let t = new j;
    t.x = A.screen.width / 2, t.y = A.screen.height / 2;
    const o = new F(e);
    o.anchor.x = .5, o.anchor.y = .5, o.scale.x = .5, o.scale.y = .5, t.addChild(o), o.name = "LEAF", h = t, H(), A.stage.addChild(h), document.addEventListener("keydown", M), document.addEventListener("keyup", Q), uA(h, A.screen.width)
}, cA = () => h.y - .5 * h.height, aA = A => {
    h.x = A.screen.width / 2, h.y = A.screen.height / 2, H(), document.addEventListener("keydown", M), document.addEventListener("keyup", Q), v(6), I.start()
}, O = [.4, .2, -.2, -.4];
let B;
const b = O.length - 1, dA = 0, N = A => {
    h.rotation = R + Math.PI * O[A]
};

function H() {
    N(b), B = b
}

const hA = () => {
    B !== dA && N(--B)
}, fA = () => {
    B !== b && N(++B)
};
let x = !1, g;
const M = A => {
    if (x) return;
    x = !0, clearTimeout(g), g = setTimeout(function t() {
        !x || (e(), g = setTimeout(t, 125))
    }, 50);

    function e() {
        (A.code === "KeyA" || A.code === "ArrowLeft") && hA(), (A.code === "KeyD" || A.code === "ArrowRight") && fA()
    }
}, Q = () => {
    clearTimeout(g), x = !1
};
let I;
const uA = (A, e) => {
    I = Y.shared.add(() => {
        const o = A.getChildAt(0), l = _(0), n = _(1);
        if (o.collides(l) || o.collides(n) || t(e)) {
            wA();
            return
        }
        A.x = A.x + (A.rotation - R) / Math.PI * -12;
        const s = 8;
        let i = Math.abs(A.rotation - R) / Math.PI;
        const c = s - i * s;
        v(c)
    });

    function t(o) {
        const l = A.x + A.width, n = A.x - A.width, s = 20, i = o - s, c = s, d = l >= i, r = n <= c;
        return d || r
    }
}, gA = () => {
    I && I.stop(), v(0)
}, wA = () => {
    gA(), YA(), RA(vA()), yA()
};

function yA() {
    document.removeEventListener("keydown", M), document.removeEventListener("keyup", Q), g && (clearTimeout(g), x = !1)
}

var mA = "data:image/jpeg;base64,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",
    EA = "/assets/falling-leaf/vertical_wall.a31291fe.jpg";
const BA = V.from(mA), xA = V.from(EA);
let S = 0;
iA(A => {
    S = A
});
const a = new j;
let K, z, w, y;
const LA = A => {
    a.x = A.screen.width / 2, a.y = A.screen.height, w = Z(-A.screen.width, 0), y = Z(A.screen.width, A.screen.height), a.addChild(w), a.addChild(y), A.stage.addChild(a), K = w.y, z = y.y, CA(A, a), WA(A)
};

function WA(A) {
    const e = new j;
    [p(A), p(A), J(A), J(A)].forEach(o => e.addChild(o)), A.stage.addChild(e), VA(A, e)
}

const YA = () => {
    T && T.stop()
};
let U = 0, C = !1;
const vA = () => U, IA = A => {
    U = 0, C = !1, a.x = A.screen.width / 2, a.y = A.screen.height, a.removeChild(w), a.removeChild(y), w.y = K, y.y = z, a.addChild(w), a.addChild(y), T.start()
};
let T;

function CA(A, e) {
    T = Y.shared.add(() => {
        e.y = e.y - S;
        const t = e.getChildAt(0);
        TA(t, e), k(t, e) && (e.removeChild(t), L(t, e, A.screen.height), e.addChild(t), C = !1)
    })
}

function TA(A, e) {
    const t = cA(), o = A.y + e.y;
    t > o && !C && (C = !0, U += 1)
}

function VA(A, e) {
    Y.shared.add(() => {
        e.y = e.y - S;
        const t = e.getChildByName("right-wall-1"), o = e.getChildByName("left-wall-1"),
            l = e.getChildByName("right-wall-2"), n = e.getChildByName("left-wall-2");
        k(t, e) ? (L(t, e, A.screen.height), L(o, e, A.screen.height)) : k(l, e) && (L(l, e, A.screen.height), L(n, e, A.screen.height))
    })
}

function k(A, e) {
    return A.y + A.height / 2 + e.y < 0
}

function L(A, e, t) {
    A.y = t - e.y + A.height / 2
}

let jA = 0;

function Z(A, e) {
    const t = new F(BA);
    t.name = `wall-${++jA}`, t.width = 300, t.height = 40, t.anchor.set(.5, .5);
    const o = .25, l = .6;
    return t.x = A * o, t.y = e * l, t
}

let D = 0;

function p(A) {
    D += 1;
    const e = A.screen.width - 20, o = (D - 1) * A.screen.height + A.screen.height / 2, l = q(e, o);
    return l.name = `right-wall-${D}`, l
}

let G = 0;

function J(A) {
    G += 1;
    const e = 20, o = (G - 1) * A.screen.height + A.screen.height / 2, l = q(e, o);
    return l.name = `left-wall-${G}`, l
}

function q(A, e) {
    const t = new F(xA);
    return t.width = 40, t.height = 444, t.anchor.set(.5, .5), t.x = A, t.y = e, t
}

function _(A) {
    let e = a.getChildAt(A).getBounds();
    const t = e.x, o = e.y, l = e.x + e.width, n = e.y, s = e.x + e.width, i = e.y + e.height, c = e.x,
        d = e.y + e.height;
    return [t, o, l, n, s, i, c, d]
}

const $ = ["Enter"];
let f;

function FA(A) {
    f = A;
    const e = new X('Press "Enter" to start', {fill: "white"});
    e.anchor.set(.5), e.x = A.screen.width / 2, e.y = A.screen.height / 2, document.addEventListener("keyup", t), A.stage.addChild(e);

    function t(o) {
        $.indexOf(o.code) !== -1 && (rA(A), LA(A), A.stage.removeChild(e), document.removeEventListener("keyup", t))
    }
}

function RA(A) {
    const e = "Score: " + A + `
Press "Enter" to try again`, t = new X(e, {fill: "white"});
    t.anchor.set(.5), t.x = f.screen.width / 2, t.y = f.screen.height / 2, f.stage.addChild(t), document.addEventListener("keyup", o);

    function o(l) {
        $.indexOf(l.code) !== -1 && (aA(f), IA(f), f.stage.removeChild(t), document.removeEventListener("keyup", o))
    }
}

const bA = lA();
FA(bA);
Y.shared.maxFPS = 60;
window.PIXI = tA;
