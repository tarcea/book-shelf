<template>
<Navbar 
  @darkMode="toggleDarkMode" 
  @showAdmin="toggleAdmin" 
  :length="length"
  :darkMode="darkMode"
/>
<teleport to="#modals" v-if="showAddModal && width > 1000">
    <Modal theme="dark" @close="() => this.showAddModal = false" >
      <template v-slot:title>
        Add a new book
      </template>
      <template v-slot:form>
        <InputForm  @submitForm="createBook" @clear="reset"/>
      </template>
      <template v-slot:buttons>
        <div class="reset">
          <button @click="reset">reset form</button>
          <button @click="cancel">cancel</button>
        </div>
      </template>
    </Modal>
  </teleport>
  <teleport to="#modals" v-if="showEditModal && width > 1000">
    <Modal theme="dark" @close="() => this.showEditModal = false" >
      <template v-slot:title>
        Edit
      </template>
      <template v-slot:form>
        <EditForm :book="selectedBook" />
      </template>
      <template v-slot:buttons>
        <div class="reset">
          <button>reset form</button>
          <button @click="cancel">cancel</button>
        </div>
      </template>
    </Modal>
  </teleport>
  <h1 class="title" v-if="adminMode">admin bookshelf</h1>
  <h1 class="title" v-else>my bookshelf</h1>
  <div class="main_container">
    <div class="right">
    <Books :books="books" @filterBook="getSelectedBook" />
    </div>
    <div class="left">
      <div v-if="showAddModal && width <= 1000" class="form_bcg">
        Add a new book
        <InputForm @submitForm="createBook"/>
        <div class="reset">
          <button >reset form</button>
          <button @click="cancel">cancel</button>
        </div>
      </div>
      <div v-if="showEditModal && width <= 1000" class="form_bcg">
        Edit this book
        <EditForm :book="selectedBook" />
        <div class="reset">
          <button >reset form</button>
          <button @click="cancel">cancel</button>
        </div>
      </div>
      <SelectedBook 
        v-if="selectedBook" 
        :book="selectedBook" 
        :admin="adminMode" 
        @deleteBook="deleteBook" 
        @openAddFormModal="toggleAddModal"
        @openEditFormModal="toggleEditModal"
        :showEditModal="showEditModal"
        :showAddModal="showAddModal"
      />
    </div>
  </div>
</template>

<script>
import firebase from "./firebaseConfig"
import Books from './components/Books'
import SelectedBook from './components/SelectedBook'
import Navbar from './components/Navbar'
import AddForm from './components/AddForm'
import Modal from './components/Modal'
import InputForm from './components/InputForm'
import EditForm from './components/EditForm'
import  GetWindowDimension  from './utils/GetWindowDimension'

const db = firebase.firestore()


export default {
  name: 'App',
  setup() {
    const { width, type } = GetWindowDimension()
    return { width, type }
  },
  data() {
    return {
      books: [],
      selectedBook: {},
      adminMode: false,
      length: 0,
      darkMode: false,
      showAddModal: false,
      showEditModal: false,
    }
  },
  components: {
    Books, SelectedBook, Navbar, AddForm, Modal, InputForm, EditForm
  },
  methods: {
    getBooks() {
      this.books = JSON.parse(localStorage.getItem('books'))
      //fetching from firebase just if localStorage is empty
      if (!this.books || this.books.length === 0) {
        db.collection("books")
      .onSnapshot((snapshot) => {
        const fetchedBooks = snapshot.docs.map((doc) => ({
          id: new Date().getTime() + Math.floor(Math.random() * Math.floor(1000)),
          ...doc.data()
        })).reverse()
        // this.books = fetchedBooks;
        // load fetched books from firebase to localStorage
        localStorage.setItem('books', JSON.stringify(fetchedBooks))
        // update local state
        this.books = JSON.parse(localStorage.getItem('books'))
        // call getRandomBook for have a book as default to show
        this.getRandomBook();
      })
      } else {
        // if localStorage is not empty, update local state
        this.books = JSON.parse(localStorage.getItem('books'))
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
    toggleDarkMode() {
      return this.darkMode = !this.darkMode
    },
    toggleAdmin() {
      return this.adminMode = !this.adminMode
    },
    toggleAddModal() {
      this.showAddModal = !this.showAddModal
    },
    toggleEditModal() {
      this.showEditModal = !this.showEditModal
    },
    async createBookInFirebase(book) {
      //for create a new book in firebase -- not used
      await db.collection("books").add(book)
    },
    async createBook(book) {
      //for create in localStorage
      this.books = [{ ...book, id: new Date().getTime() + Math.floor(Math.random() * Math.floor(1000)) }, ...this.books]
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
    },
    cancel() {
      this.showEditModal = false
      this.showAddModal = false
    },
    reset() {
      // this.clearForm()
    }
  },
  mounted() {
    this.getBooks()
    // this.length = this.books.length
    
  },
  beforeUpdate() {
    this.updateLength(this.books)
  }
}

</script>

<style>
#app, #modals {
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
body {
  margin: 0;
  /* background: #eeeeee; */
}
.reset button {
  background: crimson;
  border: 0;
  padding: 8px 16px;
  margin-top: 8px;
  color: white;
  border-radius: 20px;
}
.reset {
  display: flex;
  justify-content: space-evenly;
}
.form_bcg {
  width: 350px;
  padding: 20px;
  margin: 80px auto;
  background: #ffffff;
  border-radius: 10px;
  background: rgb(27, 41, 70);
  color: #ffffff;
}
</style>
