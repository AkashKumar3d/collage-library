console.log('building a collage libaray project ');

//constructor
function Book(Name, Author, type) {
    this.Name = Name;
    this.Author = Author;
    this.type = type;
}

//function display
function display() {

}

// add method to display prototype



// add submit button to addlistener for libarary form
let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libararyformsubmit);

function libararyformsubmit(e) {
    console.log('you have submit the book');
    let name = document.getElementById('Bookname').Value;
    let author = document.getElementById('Author').value;

    //   fiction programing cocaking 
    let fiction = document.getElementById('fiction');
    let programing = document.getElementById('programing');
    let cooking = document.getElementById('cooking');
    let type;
    if (fiction.checked) {
        type = fiction.value;

    }
    else if (programing.checked) {
        type = programing.value;

    }
    else if (cooking.checked) {
        type = cooking.value;

    }
    let book = new Book(name, author, type);
    console.log(book);
    e.preventDefault();
    //form automatic reload ho jata hai esliye reload n ho preeventdefault karke usake behaviour set karte hai;
}