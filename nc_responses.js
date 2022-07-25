var romance = ["Seven Days in June by Tia Williams", "Love at First by Kate Clayborn", "A Spot of Trouble by Teri Wilson"];
var History = ["The Dovekeepers", "The Winter King","The Pillars of the Earth"];
var horror = ["Hellraiser by Clive Barker","Dracula by Bram Stoker","Psycho by Robert Bloch"];
var literary_fiction = ["Of Mice and Men", "Things Fall Apart", "The House on Mango Street", "Lilac Girls"];
var mystery = ["The Whistler", "The Da Vinci Code","The Woman in White","The Eye of the Beholder"];
var thriller = ["The Woman in Cabin 10", "Gone Girl", "Your House Will Pay","The Guest List"];
var science_fiction = ["Dune by Frank Herbert","Neuromancer","The Time Machine","The Left Hand of Darkness"];
var fantasy = ["Game of Thrones", "The Name of the Wind","The Way of Kings","The Lies of Locke Lamora"];
var religious = ["Angels & Demons","Assassins","Surrender the Heart","The Shack: Where Tragedy Confronts Eternity"];
var biography = ["Into The Wild","Brown Girl Dreaming","The Glass Castle","The Diary of A Young Girl"];
var motivation = ["The 7 Habits of Highly Effective People","The 7 Habits of Highly Effective People","The Power of Positive Thinking","The Greatest Salesman in the World"];
var user_response = ["hello", "hi", "hey", "hey there"];
var bot_response = ["Hello", "Hi", "Hello There!", "Welcome back."];
var genre = ["Literary Fiction", "Mystery", "Thriller", "Horror", "Historical", "Romance", "Science Fiction", "Fantasy", "Magical Realism", "Religious", "Autobiography", "Biography", "Motivation"];
var user_input= ["genre", "new", "books", "book", "suggest", "top", "best","suggestion"];
var user_end = ["thank you", "goodbye", "end","done"];
var bot_end = ["Talk to you later!", "Thank You", "Welcome"];
//var user_sent = ["I am new here", "Suggest me some books","What are the different genre"];
var user_intro = ["Tell me about Kitabe", "What is Kitabe"];
var user_greet = ["How are you"];
var bot_greet = ["I am Good! How are you"]

function getBotResponse(input) {
    if (input.toLowerCase() == "romance") {
        var randomBook = romance[Math.floor(Math.random()*romance.length)];
        return "Book:"+randomBook;
    } else if (input.toLowerCase() == "horror") {
        var randomBook = horror[Math.floor(Math.random()*horror.length)];
        return "Book:"+randomBook;
    } else if (input.toLowerCase() == "history") {
        var randomBook = History[Math.floor(Math.random()*History.length)];
        return "Book:"+randomBook;
    }else if (input.toLowerCase() == 'literary fiction'){
        var randomBook = literary_fiction[Math.floor(Math.random()*literary_fiction.length)];
        return "Book:"+randomBook;
    }else if (input.toLowerCase() == 'mystery'){
        var randomBook = mystery[Math.floor(Math.random()*mystery.length)];
        return "Book:"+randomBook;
    }else if (input.toLowerCase() == 'thriller'){
        var randomBook = thriller[Math.floor(Math.random()*thriller.length)];
        return "Book:"+randomBook;
    }else if (input.toLowerCase() == 'science fiction'){
        var randomBook = science_fiction[Math.floor(Math.random()*science_fiction.length)];
        return "Book:"+randomBook;
    }else if (input.toLowerCase() == 'fantasy'){
        var randomBook = fantasy[Math.floor(Math.random()*fantasy.length)];
        return "Book:"+randomBook;
    }else if (input.toLowerCase() == 'religious'){
        var randomBook = religious[Math.floor(Math.random()*religious.length)];
        return "Book:"+randomBook;
    }else if (input.toLowerCase() == 'biography'){
        var randomBook = biography[Math.floor(Math.random()*biography.length)];
        return "Book:"+randomBook;
    }else if (input.toLowerCase() == 'motivation'){
        var randomBook = motivation[Math.floor(Math.random()*motivation.length)];
        return "Book:"+randomBook;
    }

    // Simple responses
    if (user_response.includes(input.toLowerCase()) == true) {
        return bot_response[Math.floor(Math.random()*bot_response.length)];
    }else if (input.toLowerCase() == "genre" || "new" || "books" || "suggest") {
        return "Books of Genre Avaialble in Kitabe: "+genre.join(","+"\n");
    }else if (user_end.includes(input.toLowerCase()) == true) {
        return bot_end[Math.floor(Math.random()*bot_end.length)];
    } else {
        return "I am unable to understand what you want!";
       }

    // Response to users other input questions
}