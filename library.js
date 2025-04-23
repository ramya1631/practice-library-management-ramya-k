//Practice: Library Management System
//Instructions
//Scenario:
//You are tasked with designing a library management system. The library
//lends out various types of items such as books, DVDs, and magazines. While
//all items share some common properties (e.g., title, id, isAvailable), each
//type has unique properties and behaviors. For example:
//● Books have an author and a genre.
//● DVDs have a director and duration.
//● Magazines have an issueNumber and publisher.
//Tasks
//1. Step 1: Create a Base Class
//○ Define a class LibraryItem to represent shared properties
//(title, id, isAvailable) and methods (e.g., checkOut() and
//returnItem()).
//2. Step 2: Extend the Base Class
//○ Create child classes Book, DVD, and Magazine that inherit from
//LibraryItem.
//○ Add unique properties and methods for each child class:
//■ Book: Add properties like author and genre.
//■ DVD: Add properties like director and duration.
//■ Magazine: Add properties like issueNumber and publisher
//3. Step 3: Instantiate Objects
//○ Create instances of each class and test the shared and unique
//methods.
//4. Step 4: Test the Inheritance
//○ Use inherited methods like checkOut() and returnItem() to
//manage the availability of items.
//○ Test accessing and displaying unique properties of each child
//class.
//creating class for libraryItem
class LibraryItem {
    constructor(title, itemId, isAvailable = true){
      this.title = title;
      this.itemId = itemId;
      this.isAvailable = isAvailable;
    }
    //method for checkout
    checkOut(){
        if(this.isAvailable){
            console.log(`${this.title} has been checked out`);
        }else{
            console.log(`${this.title} is not available`);
        }
    }
    //method for returnItem
    returnItem(){
      if(this.isAvailable){
console.log(`${this.title} has been checked out`);
        }else{
            console.log(`${this.title} is not available`);
        }
    }
    //method for returnItem
    returnItem(){
      if(this.isAvailable){
        console.log(`Please return the book titled ${this.title}`);
      }else{
        console.log(`${this.title} has been returned`);
      }
    }
// Method to get details
    getDetails(){
      console.log(`Title: ${this.title}, ID: ${this.id}, IsAvailable: ${this.isAvailable}`);
    }

}
//child class book

class Book extends LibraryItem{
    constructor(title, itemId, isAvailable, author, genre){
     super(title, itemId, isAvailable);
     this.author = author;
     this.genre = genre;
    }
   //method to get book details
   getBookDetails(){
    console.log(`Author: ${this.author}, Genre: ${this.genre}`);
    super.getDetails();
   }
}
//child class for DVD
class Dvd extends LibraryItem{
    constructor(title, itemId, isAvailable, director, duration){
     super(title, itemId, isAvailable);
     this.director = director;
     this.duration = duration;
    }
   //method to get dvd details
   getDvdDetails(){
    console.log(`title: ${this.title}, Music: ${this.music}, director: ${this.director}`);
    super.getDetails();
   }
}
//child class for Magazine
class Magazine extends LibraryItem{
    constructor(title, itemId, isAvailable, publisher, issuenumber ){
     super(title, itemId, isAvailable);
     this.publisher = publisher;
     this.issuenumber = issuenumber;
    }
   //method to get magazine details
   getMagazineDetails(){
    console.log(`title: ${this.title}, Publisher: ${this.publisher}, IssueNumber: ${this.issuenumber}`);
    super.getDetails();
   }
}
const book1 = new Book("The Snowy Day", "58700", true, "Margaret Wise Brown", "Picture Book for Children");
 const dvd1 = new Dvd("The Queen", "DVD100", false, "Queen", "Shane Peters");
 const magazine1 = new Magazine("Better Homes and Garden", "Maga201", true, "Home and Lifestyle", "Meredith");

console.log(book1);
 book1.checkOut();
 book1.getBookDetails();
 book1.returnItem();
 console.log(dvd1);
 dvd1.checkOut();
 dvd1.returnItem();
 console.log(magazine1);
 magazine1.checkOut();
 magazine1.returnItem();