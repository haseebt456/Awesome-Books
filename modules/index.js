class Books {
    constructor(id,title,author)
    {
        this.id=id;
        this.title=title;
        this.author=author;
    }
}

const container= document.querySelector('.reading-collection');
/* function deleteBook(){
    console.log(this);
    this.parentElement.remove();
    bookManagement.deleteBook(this.id);
}*/
class bookManagement {
    static addBooks(book){
        const bookDiv=document.createElement('div');
        bookDiv.classList.add('book');
        const bookTitle= document.createElement('h2');
        const bookAuthor = document.createElement('h3');
        const text = document.createElement('p');
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove');
        bookTitle.textContent = book.title;
        text.textContent = 'By';
        bookAuthor.textContent = book.author;
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute('id',book.id);
        removeBtn.addEventListener("click", bookManagement.deleteBook)
        bookDiv.append(bookTitle);
        bookDiv.appendChild(text);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(removeBtn);
        container.appendChild(bookDiv);

        const bookJSON = JSON.stringify(book);
        localStorage.setItem(book.id,bookJSON);
    }
    static deleteBook(){
        console.log(this);
        console.log(this.id);
    this.parentElement.remove();
        localStorage.removeItem(this.id);
    }
    static displayBooks(){
        for (let i= 0; i < localStorage.length ; i++)
        {
            const keyBookId = localStorage.key(i);
            const book = JSON.parse(localStorage.getItem(keyBookId));
            bookManagement.addBooks(book);
        }
    }

    static clearFormFields (){
        document.querySelector('#title').value='';
        document.querySelector('#author').value = '';
    }
}

const form=document.querySelector('.input-section');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const id = Math.random();

    const newBook = new Books(id,title,author);

    bookManagement.addBooks(newBook);

    bookManagement.clearFormFields();
});

window.addEventListener('load',bookManagement.displayBooks);

document.addEventListener('DOMContentLoaded',function(){
    const listbtn = document.getElementById('list-btn');
    const addbtn  = document.getElementById('add_book-btn');
    const contactbtn = document.getElementById('contact-btn');
    
    const bookList = document.getElementById('index');
    const addBookPage = document.getElementById('add_book');
    const conatctPage = document.getElementById('contact');
    
    showPage('index');

    listbtn.addEventListener('click',() =>showPage('index'));
    addbtn.addEventListener('click',() => showPage('add_book'));
    contactbtn.addEventListener('click',() => showPage('contact'));

    function showPage(pageId)
    {
        bookList.classList.remove('active')
        addBookPage.classList.remove('active')
        conatctPage.classList.remove('active')

        const selectedPage = document.getElementById(pageId);
        selectedPage.classList.add('active');
    }
})