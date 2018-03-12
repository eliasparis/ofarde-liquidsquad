(function(o = {
    'r': () => t(() => {
            let m = o.c.reduce((pp, nn) => `${pp}\x1b[${nn}m█████`, '');
            let p = o.s.join('');
            console.log(`${p}\x1b[1m${m}\x1b[0m\x1b[39m`);
            o.r();
        }, 26),
    'g': () => t(()=> {
            let v = Math.floor(Math.random() * (10000 - 1)) + 1;
            v > 10000/2 || o.s.length < 2 ? o.s.unshift(' ') : o.s.pop();
            o.g();
        }, 65),
    's': new Array(40).fill(' '),
    'c': [31, 33, 32, 36, 34, 35],
}, t = setTimeout){
    o.g();
    o.r();
})();