const inputField = document.getElementById('div');
const cancel = document.getElementById('cancel');
const submit = document.getElementById('submit');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const finished = document.getElementById('finished');
const addBook = document.getElementById('add_book');
const table = document.getElementById('table');
let rowNumber = 'a';
let myLibrary = [];
class Book {
  constructor (title, author, pages, finished) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.finished = finished;
  }
  returnInfo() {
    return `You have${this.finished ? '' : 'n\'t'} read the ${this.pages} page ${this.title} by ${this.author}.`;
  }
}
const clearInputs = function() {
  title.value = '';
  author.value = '';
  pages.value = '';
  finished.checked = false;
}
const addNewBook = function(title, author, pages, finished) {
  myLibrary.push(new Book(title, author, pages, finished))
}
const addNewRow = function(object) {
  const newRow = document.createElement('tr');
  newRow.setAttribute('id', rowNumber);
  const titleData = document.createElement('td');
  const authorData = document.createElement('td');
  const pagesData = document.createElement('td');
  const finishedData = document.createElement('td');
  finishedData.addEventListener('click', function() {
    if (event.target.innerHTML === 'Finished') {
      event.target.innerHTML = 'Not Finished';
    } else {
      event.target.innerHTML = 'Finished';
    }
  })
  titleData.innerHTML = object.title;
  authorData.innerHTML = object.author;
  pagesData.innerHTML = object.pages;
  if (object.finished) {
    finishedData.innerHTML = 'Finished';
    finishedData.style.cursor = 'pointer';
  } else {
    finishedData.innerHTML = 'Not Finished';
    finishedData.style.cursor = 'pointer';
  }
  table.appendChild(newRow);
  document.getElementById(rowNumber).appendChild(titleData);
  document.getElementById(rowNumber).appendChild(authorData);
  document.getElementById(rowNumber).appendChild(pagesData);
  document.getElementById(rowNumber).appendChild(finishedData);
  rowNumber += 'a';
}
addBook.addEventListener('click', function() {
  if (inputField.style.top === '110px') {
    inputField.style.top = '70px';
    addBook.style.transform = 'rotate(0deg)';
  } else {
    inputField.style.top = '110px';
    addBook.style.transform = 'rotate(135deg)';
  }
})
cancel.addEventListener('click', function() {
  inputField.style.top = '70px';
  addBook.style.transform = 'rotate(0deg)';
  clearInputs();
})
submit.addEventListener('click', function() {
  if (title.value === '' || author.value === '' || pages.value === '') {
    if (title.value === '') {
      title.style.borderColor = '#871D20';
    }
    if (author.value === '') {
      author.style.borderColor = '#871D20';
    }
    if (pages.value === '') {
      pages.style.borderColor = '#871D20';
    }
  } else {
    inputField.style.top = '70px';
    addNewBook(title.value, author.value, pages.value, finished.checked);
    addNewRow(myLibrary[myLibrary.length - 1]);
    clearInputs();
    addBook.style.transform = 'rotate(0deg)';
    pages.style.borderColor = '';
    title.style.borderColor = '';
    author.style.borderColor = '';
  }
})
