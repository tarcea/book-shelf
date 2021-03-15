<template>
<Navbar @showForm="toggleShowForm" @showAdmin="toggleAdmin" :length="length"/>
  <h1 class="title" v-if="adminMode">admin book shelf</h1>
  <h1 class="title" v-else>my book shelf</h1>
  <div class="main_container">
    <div class="right">
    <Books :books="books" @filterBook="getSelectedBook" />
    </div>
    <div class="left">
      <div v-show="showForm">
        <AddForm @submitForm="createBook" @cancelForm="showForm = false"/>
      </div>
      <SelectedBook v-if="selectedBook" :book="selectedBook" :admin="adminMode" @deleteBook="deleteBook"/>
    </div>
  </div>
</template>

<script>
import firebase from "./firebaseConfig"
import Books from './components/Books'
import SelectedBook from './components/SelectedBook'
import Navbar from './components/Navbar'
import AddForm from './components/AddForm'

const db = firebase.firestore()

export default {
  name: 'App',
  data() {
    return {
      books: [],
      selectedBook: {},
      showForm: false,
      adminMode: false,
      length: 0
    }
  },
  components: {
    Books, SelectedBook, Navbar, AddForm
  },
  methods: {
    getBooks() {
      this.books = JSON.parse(localStorage.getItem('books'))
      //fetching from firebase just if localStorage is empty
      if (!this.books) {
        db.collection("books")
      .onSnapshot((snapshot) => {
        const fetchedBooks = snapshot.docs.map((doc) => ({
          id: new Date().getTime() + Math.floor(Math.random() * Math.floor(1000)),
          ...doc.data()
        }))
        // this.books = fetchedBooks;
        // load fetched books from firebase to localStorage
        localStorage.setItem('books', JSON.stringify(fetchedBooks))
        // update local state
        this.books = JSON.parse(localStorage.getItem('books')).reverse()
        // call getRandomBook for have a book as default to show
        this.getRandomBook();
      })
      } else {
        // if localStorage is not empty, update local state
        this.books = JSON.parse(localStorage.getItem('books')).reverse()
        // and pick a book as default to show
        this.getRandomBook();
      }
      
    },
    getSelectedBook(id) {
     const book = this.books.filter((book) => {
      //  console.log(id, book.id)
        return id === book.id
      })
      this.selectedBook = book[0]
    },
    getRandomBook() {
      return this.selectedBook = this.books && this.books[Math.floor(Math.random() * this.books.length)]
    },
    toggleShowForm() {
      return this.showForm = !this.showForm
    },
    toggleAdmin() {
      return this.adminMode = !this.adminMode
    },
    async createBookInFirebase(book) {
      //for create a new book in firebase -- not used
      this.showForm = false;
      await db.collection("books").add(book)
    },
    async createBook(book) {
      //for create in localStorage
      // this.showForm = false;
      this.books = [...this.books, { ...book, id: new Date().getTime() + Math.floor(Math.random() * Math.floor(1000)) }]
      localStorage.setItem('books', JSON.stringify(this.books))
    },
    deleteBook(id) {
    const books = this.books.filter((book) => {
        return id !== book.id
      })
      const message = confirm(`Do you really want to delete this book ??`)
      if (!message) {
        return
      }
      localStorage.setItem('books', JSON.stringify(books))
      this.getBooks()
    },
    updateLength(array) {
      if(array) {
        this.length = array.length
      }
      
    }
  },
  mounted() {
    this.getBooks()
    // this.length = this.books.length
  },
  updated() {
    this.updateLength(this.books)
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.mainContainer {
  display: flex;
  flex-direction: column;
}
.title {
  margin-top: 80px;
  text-align:center;
}
</style>
