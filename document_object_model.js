// Author: Odion Fross
//console.log(document.body);
//console.log(document.getElementsByTagName('div'));

/*var body = document.body;
// this is more fun if it's a random page with stuff already on it (like the learning platform for example).
body.innerHTML = "Hello World"; */

var bod = document.body;
for (var i = 0; i < 10; i++) {
    bod.innerHTML += "<p>This has gone through the loop completely: " + i + " times</p>";
}

/* for (var i = 0; i < 10; i ++){
    document.body.innerHTML += "<p>This has gone through the loop completely: " +i+ " times</p>";
} */

var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
for (var i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].addEventListener);
    paragraphs[i].addEventListener('click', function () {
        this.style.background = 'blue';
    });
}
