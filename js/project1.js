console.log('this is  magice notes website ');
shownotes();

// if user add the notes add it to the local storage
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {
    let addtext = document.getElementById('addtext');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtext.value = "";
    console.log(notesobj);
    shownotes();//funtion definition of shownotes
});

// notes ko show karane ke liye use karte hai
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
}
let html = "";
notesobj.forEach(function (element, index) {//include the notes to in your notes
    html += `
<div class="notescard mx-2 my-2 card" style="width: 20rem;">
                <div class="card-body">
                  <h5 class="card-title">Note ${index + 1}</h5>
                  <p class="card-text">${element}</p>
                  <button id="${index}" onclick="deletenotes(this.id)" class="btn btn-primary">delete now</button>
                </div>
                </div>`;

});
let noteselment = document.getElementById("notes");
if (notesobj.length != 0) {
    noteselment.innerHTML = html;
} else {
    noteselment.innerHTML = `nothing the data in notes box`;
};

//function to delete notes
function deletenotes(index) {
    console.log("it is delete the node")

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();

}

// include javascript in seachbar
let search = document.getElementById("searchtext");
search.addEventListener('input', function () {
    let inputvalue = search.value;
    // console.log("input value fired " ,inputvalue);
    let notescard = document.getElementsByClassName("notescard");
    Array.from(notescard).forEach(function (element) {
        let textcard = document.getElementsByTagName("p")[0].innerText;//select the particular eliment from notescard;
        if (textcard.includes(inputvalue)) {//condition to checked and display 
            element.style.display = "block";

        } else {
            element.style.display = "none";
        };

    });
});