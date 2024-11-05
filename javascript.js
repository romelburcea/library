
const library = document.querySelector(".library")
const bookDiv = document.querySelector(".book")
const booksLibrary = document.querySelector(".booksLibrary")
const deleteBtn = document.querySelector(".deletebook")


const myLibrary = [new Book("Genesis", "God", "Ungodly Amount", "Not Read"),
   new Book("One Flew Over the Cuckoos Nest", "Ken Kasey", "410", "Read")
];


function showBooks(){
   
   for(let i = 0; i < myLibrary.length; i++){
     
     const bookNew = document.createElement("div")
     bookNew.classList.add("bookNew")
     bookNew.innerHTML = `<div class="book">
            <h4> Title: ${myLibrary[i].name} </h4>
            <h4>Author: ${myLibrary[i].author}</h4>
            <h4>Pages: ${myLibrary[i].pages}</h4>
            <h4>${myLibrary[i].ifRead}</h4>
        </div>`
        booksLibrary.appendChild(bookNew)
   }
}


function Book(name, author, pages,ifRead) {
   this.name = name
   this.author = author
   this.pages = pages
   this.ifRead = ifRead
}

function addBookToLibrary() {
   const titleFrm = document.getElementById("title").value
   const authorFrm = document.getElementById("authorName").value
   const pagesFrm = document.getElementById("pagesNr").value
   const readCheckbox = document.getElementById("read").checked
   //  const book = new Book(name, author, pages, ifRead)

   const ifReadFrm = readCheckbox ? "Read" : "Not Read"
    const book = new Book(titleFrm, authorFrm, pagesFrm, ifReadFrm)
   
   
   myLibrary.push(book)

   for(let i = 0; i < myLibrary.length; i++){
      console.log(myLibrary[i])
   }
   
   const container = document.createElement("div") ///creca trb sa pun $ aici mai jos, sa nu uit ideea
   container.classList.add("container")
   container.innerHTML = `<div class="book">
            <h4> Title: ${titleFrm} </h4>
            <h4>Author: ${authorFrm}</h4>
            <h4>Pages: ${pagesFrm}</h4>
            <h4>${ifReadFrm}</h4>
        </div>`

        booksLibrary.appendChild(container)
}

// addBookToLibrary("a", "b", "c", "d") 
// addBookToLibrary("a", "b", "c", "tttt")


const addbtn = document.querySelector(".addbook")
const dialog = document.querySelector(".mydialog")
const cancel = document.getElementById("cancel")
const submit = document.getElementById("submit")

addbtn.addEventListener("click", () => {
   dialog.showModal()
})

cancel.addEventListener("click", () => {
   dialog.close()
})


submit.addEventListener("click", (event) => {
   event.preventDefault()
   addBookToLibrary()
   
})


deleteBtn.addEventListener("click", () => {
   if (booksLibrary.children.length > 0) {
       booksLibrary.removeChild(booksLibrary.lastElementChild);
       myLibrary.pop();
   }
});

showBooks()