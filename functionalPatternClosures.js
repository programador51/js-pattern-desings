// This throws an error because
// the scope of x it's just only on
// "f" function.

const y = 'lili';

const g = () => {
    const a = 'lulu';
    console.log(x,a);
}

const f = () => {
    const x = 'lala';

    console.log(x,y);
}

f();
g();

//////////////////////////////////////