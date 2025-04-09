const myLibrary = [];
const mainContainer = document.querySelector('.main-container');
const addBookForm = document.getElementById('bookForm');
const dialog = document.querySelector('dialog');
const addABook = document.querySelector('.addABook');
const cancelBtn = document.querySelector('.cancel');
function Book(title,author,pages,read){
    this.title = title;
    this.author= author;
    this.pages = pages;
    this.read = read;
}

const addBookToLibrary = ()=>{

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value; 
    const pages = document.getElementById('pages').value; 
    const read = document.getElementById('read').checked;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    console.log(myLibrary);
    displayBooks();
}


const displayBooks = () =>{
    mainContainer.innerHTML = "";
    myLibrary.forEach((books,index) =>{
    const libraryDisplay = document.createElement('div');
    libraryDisplay.classList.add('libaryDisplay');
    const bookName = document.createElement('p');
    bookName.textContent = `${books.title}`;
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Author: ${books.author}`;
    const bookPages = document.createElement('p');
    bookPages.textContent = `No of Page: ${books.pages}`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent ="Remove";

    const toggleButton = document.createElement('button');
    toggleButton.textContent = books.read? "Read" : "Not Read";

    removeBtn.addEventListener("click",()=>{
        myLibrary.splice(index,1);
        displayBooks();
    });

    toggleButton.addEventListener("click",()=>{
        books.read = !books.read;
        displayBooks();
    });

    
    libraryDisplay.appendChild(bookName);
    libraryDisplay.appendChild(bookAuthor);
    libraryDisplay.appendChild(bookPages);
    libraryDisplay.appendChild(removeBtn);
    libraryDisplay.appendChild(toggleButton);
    mainContainer.appendChild(libraryDisplay);


        //some styling

        mainContainer.style.display = "flex"; 
        mainContainer.style.flexDirection = "row"; 
        mainContainer.style.flexWrap = "wrap"; 
        mainContainer.style.justifyContent = "center"; 
        mainContainer.style.alignItems = "flex-start"; 
        mainContainer.style.padding = "20px"; 
        mainContainer.style.margin = "0 auto"; 
        mainContainer.style.maxWidth = "1200px"; 
        mainContainer.style.marginTop = "1.2rem";
        mainContainer.style.gap = "0.85rem";





        libraryDisplay.style.border = "1px solid #ccc";
        libraryDisplay.style.borderRadius = "8px"; 
        libraryDisplay.style.padding = "15px"; 
        libraryDisplay.style.margin = "10px 0"; 
        libraryDisplay.style.backgroundColor = "#f9f9f9"; 
        libraryDisplay.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)"; 
        libraryDisplay.style.transition = "transform 0.2s"; 
        libraryDisplay.style["width"] = "250px";



        removeBtn.style.backgroundColor = "#ff4d4d"; 
        removeBtn.style.color = "white";
        removeBtn.style.border = "none";
        removeBtn.style.borderRadius = "5px";
        removeBtn.style.cursor = "pointer";
        removeBtn.style.padding = "5px 10px";
        removeBtn.style.marginRight ="12px";

        toggleButton.style.backgroundColor = books.read ? "#4CAF50" : "#f44336"; 
        toggleButton.style.color = "white";
        toggleButton.style.border = "none";
        toggleButton.style.borderRadius = "5px";
        toggleButton.style.cursor = "pointer";
        toggleButton.style.padding = "5px 10px";


        bookName.style.fontSize = "1.5em"; 
        bookName.style.fontWeight = "bold"; 
        bookName.style.color = "#f1c40f"; 
        bookName.style.marginBottom = "5px";
        bookName.style.fontFamily = "Lato";

        bookAuthor.style.fontSize = "1.2rem"; 
        bookAuthor.style.fontWeight = "bold"; 
        bookAuthor.style.color = "#f1c40f"; 
        bookAuthor.style.marginBottom = "0.4rem";
        bookPages.style.fontFamily = "Lato";

        bookPages.style.fontSize = "1,2rem"; 
        bookPages.style.color = "#f1c40f"; 
        bookPages.style.fontWeight = "bold"; 
        bookPages.style.marginBottom = "0.6rem";
        bookPages.style.fontFamily = "Lato";


    });
}

addBookForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    addBookToLibrary();
    
})


addABook.addEventListener("click",()=>{
    dialog.showModal();
})


cancelBtn.addEventListener('click', () => {
    dialog.close();
});