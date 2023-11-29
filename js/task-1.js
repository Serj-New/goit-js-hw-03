'use strict';

/* Перша варіація функції slugify() */

function slugify(title) {
    const normalizedTitle = title.toLowerCase();
    const words = normalizedTitle.split(' ');
    const slugTitle = words.join("-");
    return slugTitle;
}

/* Друга варіація функції  slugify()

function slugify(title) {
    const normalizedTitle = title.toLowerCase();

    let slugTitle = '';

    for (let i = 0; i < normalizedTitle.length; i++) {

        if (normalizedTitle[i] !== " ") {
            slugTitle += normalizedTitle[i];
        } else {
            slugTitle += "-";
        }
    }
    
    return slugTitle;
}
*/

/* Третя варіація функції  slugify()

function slugify(title) {
    const normalizedTitle = title.toLowerCase();

    let slugTitle = '';

    for (let i = 0; i < normalizedTitle.length; i++) {
        slugTitle += normalizedTitle[i] === " " ? "-" : normalizedTitle[i];
    }
    
    return slugTitle;
}
*/

console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"