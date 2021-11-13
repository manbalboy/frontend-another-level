//class => object
// {mark:'male', jade: 'male'}
// {chloe:'female', alex: 'male', anna: 'female'}
class Students {
    [index: string]: "male" | "female" ;
}

const a = new Students();
a.mark = 'male';
a.jade = 'male';

console.log(a);

const b = new Students();
b.chloe = 'female';
b.alex = 'female';
