class Books {
    constructor(is,title,author)
    {
        this.id=id;
        this.title=title;
        this.author=authos;
    }
}

const container= document.querySelector('.reading-collection');
class bookManagement {
    static addBooks(book){
        const bookDiv=document.createElement('div');
        bookDiv.classList.add('.book');
        const bookTitle= document.createAttribute('h2');
        const bookAuthor = document.createElement('h3');
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove');
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        removeBtn.textContent = 'remove';
        removeBtn.setAttribute('id',book.id);
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(removeBtn);
        container.appendChild(bookDiv);

        const bookJSON = JSON.stringify(book);
        localStorage.setItem(book.id,bookJSON);
    }

    static deleteBook(bookID){
        localStorage.removeItem(bookID);
    }
    static displayBooks(){
        
    }
}