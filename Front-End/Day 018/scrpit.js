var i = 0

var counter = function () {
    return i += 1;
}

var decounter = function () {
    return i -= 1;
}

var btnAdd = document.querySelector('#add');
var btnSub = document.querySelector('#sub');
var count = document.querySelector('h1')

btnAdd.addEventListener('click', function () {
    count.style.color = "lightseagreen";
    count.innerHTML = counter();
})

btnSub.addEventListener('click', function () {
    count.style.color = "tomato";
    count.innerHTML = decounter();
})
