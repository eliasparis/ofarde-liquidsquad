const f = () => {
    setTimeout(() => {
        // console.log('\x1b[1m', '\x1b[31m',4444, '\x1b[33m',3333, '\x1b[32m', 8888,  '\x1b[36m', '❤','\x1b[34m', 9999, '\x1b[35m', '❤', '\x1b[0m', '\x1b[39m') ;
        console.log('\x1b[1m\x1b[31m❤❤❤❤❤\x1b[33m❤❤❤❤❤❤❤❤❤❤\x1b[0m');
        console.log(`\x1b[1m\x1b[31m${'❤'}\x1b[33m${'❤'}\x1b[0m`);
        f();
    },42)
};
f();