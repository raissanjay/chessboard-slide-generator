function addSlide(){
    var currentSlide = {
        fen: window.currentFen,
        squares: window.squares,
        arrows: window.arrows,
        title: "someTitle",
    };

    var someDiv = document.createElement("div");
    someDiv.innerHTML = JSON.stringify(currentSlide);
    document.getElementById("slides").appendChild(someDiv);
    window.slides.push(currentSlide);

    // reset tool diagram
    window.currentFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"; // starting position
    window.squares = [];
    window.arrows = [];

    drawBoardDiagram(window.divId, window.currentFen, window.squares, window.arrows)
}