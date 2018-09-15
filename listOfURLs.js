// Problem: Display list in HTML. Target id of my "mylists".

// var arr = [
//     { 
//         name: "LinkedIn",
//         link: "http://linkedin.com"
//     },
//     {
//         name: "Blog",
//         link: "http://blog.com"
//     },
//     {
//         name: "Twitter",
//         link: "http:twitter.com"
//     }
// ];



var myTarget = document.querySelector("#mylists");

Arr.forEach(function(item) {
    var link = document.createElement('a');
    link.href = item.link;
    link.innerText = item.name;

    myTarget.appendChild(link);
})

