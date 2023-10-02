//click event
//An element receives a click event when a pointing device button (such as a mouse's primary mouse button)
//  is both pressed and released while the pointer is located inside the element.


const boxElement = document.getElementById("box");


//add a click event listener to the element

boxElement.addEventListener("click", function () {
    alert("clicked me");
});