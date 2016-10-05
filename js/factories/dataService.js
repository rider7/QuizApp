(function() {
    angular.module("csharpFacts")
        .factory("DataService", DataFactory);

    function DataFactory() {
        var dataObj = {
            csharp_Data: csharp_Data,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        return dataObj;
    }

    var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];

    var quizQuestions = [{
        type: "text",
        text: "How much can a loggerhead weigh?",
        possibilities: [{
            answer: "Up to 20kg"
        }, {
            answer: "Up to 115kg"
        }, {
            answer: "Up to 220kg"
        }, {
            answer: "Up to 500kg"
        }],
        selected: null,
        correct: null
    }, {
        type: "text",
        text: "What is the typical vocab_desc_two of a Green Sea csharp?",
        possibilities: [{
            answer: "150 years"
        }, {
            answer: "10 years"
        }, {
            answer: "80 years"
        }, {
            answer: "40 years"
        }],
        selected: null,
        correct: null
    }, {
        type: "image",
        text: "Which of these is the Alligator Snapping csharp?",
        possibilities: [{
            answer: "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1"
        }, {
            answer: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-csharp_688_600x450.jpg"
        }, {
            answer: "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-csharp-007.jpg"
        }, {
            answer: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_csharp_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
        }],
        selected: null,
        correct: null
    }, {
        type: "image",
        text: "Which of these is the Green csharp?",
        possibilities: [{
            answer: "http://blog.mexi-go.ca/wp-content/uploads/2013/05/sea-csharp-swimming.jpg"
        }, {
            answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_csharp_nesting.JPG"
        }, {
            answer: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_csharp_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
        }, {
            answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
        }],
        selected: null,
        correct: null
    }, {
        type: "text",
        text: "Where does the Kemp's Ridley Sea csharp live?'",
        possibilities: [{
            answer: "Tropical waters all around the world"
        }, {
            answer: "Eastern Australia"
        }, {
            answer: "Coastal North Atlantic"
        }, {
            answer: "South pacific islands"
        }],
        selected: null,
        correct: null
    }, {
        type: "text",
        text: "What is the most common csharp in US waters?",
        possibilities: [{
            answer: "Loggerhead csharp"
        }, {
            answer: "Leatherback csharp"
        }, {
            answer: "Hawksbill csharp"
        }, {
            answer: "Alligator Snapping csharp"
        }],
        selected: null,
        correct: null
    }, {
        type: "text",
        text: "What is the largest sea csharp on earth?",
        possibilities: [{
            answer: "Eastern Snake Necked csharp"
        }, {
            answer: "Olive Ridley Sea csharp"
        }, {
            answer: "Kemp's Ridley Sea csharp'"
        }, {
            answer: "Leatherback"
        }],
        selected: null,
        correct: null
    }, {
        type: "image",
        text: "Which of these is the Olive Ridley csharp?",
        possibilities: [{
            answer: "http://i.telegraph.co.uk/multimedia/archive/02651/loggerheadcsharp_2651448b.jpg"
        }, {
            answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
        }, {
            answer: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-csharp_688_600x450.jpg"
        }, {
            answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_csharp_nesting.JPG"
        }],
        selected: null,
        correct: null
    }, {
        type: "text",
        text: "How Heavy can a leatherback csharp be?",
        possibilities: [{
            answer: "900kg"
        }, {
            answer: "40kg"
        }, {
            answer: "110kg"
        }, {
            answer: "300kg"
        }],
        selected: null,
        correct: null
    }, {
        type: "text",
        text: "Which of these csharp_ are herbivores?",
        possibilities: [{
            answer: "Loggerhead csharp"
        }, {
            answer: "Hawksbill csharp"
        }, {
            answer: "Leatherback csharp"
        }, {
            answer: "Green csharp"
        }],
        selected: null,
        correct: null
    }];

    var csharp_Data = [{
        type: "Object Oriented Programming",
        quiz: "Lesson 1",
        image_url: "images/image1.png",
        summary: "Object Oriented Programming really helps us create very efficient applications that can be very easily maintained even extended and changed. To really appreciate this, you would have to have experience working with some of the non-objected oritened languages such as basic or C that required a structured line by line set of instructions that would start from top to bottom running in order.",
        vocab_word_one: "Encapsulation:",
        vocab_word_two: "Inheritance:",
        vocab_word_three: "Polymorphims:",
        vocab_desc_one: " Grouping of data and functions into a single component. This will also allow seletive 'hiding' of data and functionalities. Security is a hot topic today, making sure a user is not a hacker so we focus on hiding some of the functionality. Some of this is for security and part of it is for simplicty and ease of use of objects. The best example of this is using a smart phone to make a telephone call. Now you can take any smart phone such as an iPhone, Android, Windows Phone and still understand how to make a call. As a new user, you may not understand how to make a call at first but it's not going to take long to learn. This is because the functionality is encapsulated into a providers system which is shared across different cell phone platforms.",
        vocab_desc_two: " The second major aspect of object oriented programming. This is the process that enables one class to reuse code from another class. So a sungle object can posses the functionality of mulitple classes. Now, this is where we avoid code duplication. Inheritance provides the ability to extend and modify the behavior in a very easilty maintainble environment, allowing us to continue to seperate functionality into discrete sections or classes inside the code and then inherite the functionality into other classes that need it and allow those classes that are inheriting them to add additional functionality.",
        vocab_desc_three: " It's the natural result of inheritance and encapsulation working together. What's going to happen here is we are going to end up with multiple classes that have the same method or action name in there. So we can have one class tha thas a functionality called savefile, and it's saving the file in a location and we have another class with the same name saving to a database. They share the same name but we want to call the correct method when the times comes and very different actions will be taken. As far as the end user and sometimes the developer is concerned, we simple just call the appropriate method with that name. The difference is based on the context on how the method is called and where it's called from. Overall, an inheritance of classes and objets can provide multiple functions having the same name, but provide different functionalities.",
        description: "Object oriented programming is a term you will hear and read about often. Not only when it comes to C# but other modern programming languages. Terminology can be very important when you are understanding all the concepts and fully graps all the functionality of a programming language."
    }, {
        type: "Program Flow",
        quiz: "Lesson 2",
        image_url: "images/image1.png",
        summary: "Object Oriented Programming really helps us create very efficient applications that can be very easily maintained even extended and changed. To really appreciate this, you would have to have experience working with some of the non-objected oritened languages such as basic or C that required a structured line by line set of instructions that would start from top to bottom running in order.",
        vocab_word_one: "Encapsulation:",
        vocab_word_two: "Inheritance:",
        vocab_word_three: "Polymorphims:",
        vocab_desc_one: " Grouping of data and functions into a single component. This will also allow seletive 'hiding' of data and functionalities. Security is a hot topic today, making sure a user is not a hacker so we focus on hiding some of the functionality. Some of this is for security and part of it is for simplicty and ease of use of objects. The best example of this is using a smart phone to make a telephone call. Now you can take any smart phone such as an iPhone, Android, Windows Phone and still understand how to make a call. As a new user, you may not understand how to make a call at first but it's not going to take long to learn. This is because the functionality is encapsulated into a providers system which is shared across different cell phone platforms.",
        vocab_desc_two: " The second major aspect of object oriented programming. This is the process that enables one class to reuse code from another class. So a sungle object can posses the functionality of mulitple classes. Now, this is where we avoid code duplication. Inheritance provides the ability to extend and modify the behavior in a very easilty maintainble environment, allowing us to continue to seperate functionality into discrete sections or classes inside the code and then inherite the functionality into other classes that need it and allow those classes that are inheriting them to add additional functionality.",
        vocab_desc_three: " It's the natural result of inheritance and encapsulation working together. What's going to happen here is we are going to end up with multiple classes that have the same method or action name in there. So we can have one class tha thas a functionality called savefile, and it's saving the file in a location and we have another class with the same name saving to a database. They share the same name but we want to call the correct method when the times comes and very different actions will be taken. As far as the end user and sometimes the developer is concerned, we simple just call the appropriate method with that name. The difference is based on the context on how the method is called and where it's called from. Overall, an inheritance of classes and objets can provide multiple functions having the same name, but provide different functionalities.",
        description: "Object oriented programming is a term you will hear and read about often. Not only when it comes to C# but other modern programming languages. Terminology can be very important when you are understanding all the concepts and fully graps all the functionality of a programming language."
    }, {
        type: "Operators",
        quiz: "Lesson 3",
        image_url: "images/image1.png",
        summary: "Object Oriented Programming really helps us create very efficient applications that can be very easily maintained even extended and changed. To really appreciate this, you would have to have experience working with some of the non-objected oritened languages such as basic or C that required a structured line by line set of instructions that would start from top to bottom running in order.",
        vocab_word_one: "Encapsulation:",
        vocab_word_two: "Inheritance:",
        vocab_word_three: "Polymorphims:",
        vocab_desc_one: " Grouping of data and functions into a single component. This will also allow seletive 'hiding' of data and functionalities. Security is a hot topic today, making sure a user is not a hacker so we focus on hiding some of the functionality. Some of this is for security and part of it is for simplicty and ease of use of objects. The best example of this is using a smart phone to make a telephone call. Now you can take any smart phone such as an iPhone, Android, Windows Phone and still understand how to make a call. As a new user, you may not understand how to make a call at first but it's not going to take long to learn. This is because the functionality is encapsulated into a providers system which is shared across different cell phone platforms.",
        vocab_desc_two: " The second major aspect of object oriented programming. This is the process that enables one class to reuse code from another class. So a sungle object can posses the functionality of mulitple classes. Now, this is where we avoid code duplication. Inheritance provides the ability to extend and modify the behavior in a very easilty maintainble environment, allowing us to continue to seperate functionality into discrete sections or classes inside the code and then inherite the functionality into other classes that need it and allow those classes that are inheriting them to add additional functionality.",
        vocab_desc_three: " It's the natural result of inheritance and encapsulation working together. What's going to happen here is we are going to end up with multiple classes that have the same method or action name in there. So we can have one class tha thas a functionality called savefile, and it's saving the file in a location and we have another class with the same name saving to a database. They share the same name but we want to call the correct method when the times comes and very different actions will be taken. As far as the end user and sometimes the developer is concerned, we simple just call the appropriate method with that name. The difference is based on the context on how the method is called and where it's called from. Overall, an inheritance of classes and objets can provide multiple functions having the same name, but provide different functionalities.",
        description: "Object oriented programming is a term you will hear and read about often. Not only when it comes to C# but other modern programming languages. Terminology can be very important when you are understanding all the concepts and fully graps all the functionality of a programming language."
    }, {
        type: "Advanced OOP Concepts",
        quiz: "Lesson 4",
        image_url: "images/image1.png",
        summary: "Object Oriented Programming really helps us create very efficient applications that can be very easily maintained even extended and changed. To really appreciate this, you would have to have experience working with some of the non-objected oritened languages such as basic or C that required a structured line by line set of instructions that would start from top to bottom running in order.",
        vocab_word_one: "Encapsulation:",
        vocab_word_two: "Inheritance:",
        vocab_word_three: "Polymorphims:",
        vocab_desc_one: " Grouping of data and functions into a single component. This will also allow seletive 'hiding' of data and functionalities. Security is a hot topic today, making sure a user is not a hacker so we focus on hiding some of the functionality. Some of this is for security and part of it is for simplicty and ease of use of objects. The best example of this is using a smart phone to make a telephone call. Now you can take any smart phone such as an iPhone, Android, Windows Phone and still understand how to make a call. As a new user, you may not understand how to make a call at first but it's not going to take long to learn. This is because the functionality is encapsulated into a providers system which is shared across different cell phone platforms.",
        vocab_desc_two: " The second major aspect of object oriented programming. This is the process that enables one class to reuse code from another class. So a sungle object can posses the functionality of mulitple classes. Now, this is where we avoid code duplication. Inheritance provides the ability to extend and modify the behavior in a very easilty maintainble environment, allowing us to continue to seperate functionality into discrete sections or classes inside the code and then inherite the functionality into other classes that need it and allow those classes that are inheriting them to add additional functionality.",
        vocab_desc_three: " It's the natural result of inheritance and encapsulation working together. What's going to happen here is we are going to end up with multiple classes that have the same method or action name in there. So we can have one class tha thas a functionality called savefile, and it's saving the file in a location and we have another class with the same name saving to a database. They share the same name but we want to call the correct method when the times comes and very different actions will be taken. As far as the end user and sometimes the developer is concerned, we simple just call the appropriate method with that name. The difference is based on the context on how the method is called and where it's called from. Overall, an inheritance of classes and objets can provide multiple functions having the same name, but provide different functionalities.",
        description: "Object oriented programming is a term you will hear and read about often. Not only when it comes to C# but other modern programming languages. Terminology can be very important when you are understanding all the concepts and fully graps all the functionality of a programming language."
    }, {
        type: "Arrays and Methods",
        quiz: "Lesson 5",
        image_url: "images/image1.png",
        summary: "Object Oriented Programming really helps us create very efficient applications that can be very easily maintained even extended and changed. To really appreciate this, you would have to have experience working with some of the non-objected oritened languages such as basic or C that required a structured line by line set of instructions that would start from top to bottom running in order.",
        vocab_word_one: "Encapsulation:",
        vocab_word_two: "Inheritance:",
        vocab_word_three: "Polymorphims:",
        vocab_desc_one: " Grouping of data and functions into a single component. This will also allow seletive 'hiding' of data and functionalities. Security is a hot topic today, making sure a user is not a hacker so we focus on hiding some of the functionality. Some of this is for security and part of it is for simplicty and ease of use of objects. The best example of this is using a smart phone to make a telephone call. Now you can take any smart phone such as an iPhone, Android, Windows Phone and still understand how to make a call. As a new user, you may not understand how to make a call at first but it's not going to take long to learn. This is because the functionality is encapsulated into a providers system which is shared across different cell phone platforms.",
        vocab_desc_two: " The second major aspect of object oriented programming. This is the process that enables one class to reuse code from another class. So a sungle object can posses the functionality of mulitple classes. Now, this is where we avoid code duplication. Inheritance provides the ability to extend and modify the behavior in a very easilty maintainble environment, allowing us to continue to seperate functionality into discrete sections or classes inside the code and then inherite the functionality into other classes that need it and allow those classes that are inheriting them to add additional functionality.",
        vocab_desc_three: " It's the natural result of inheritance and encapsulation working together. What's going to happen here is we are going to end up with multiple classes that have the same method or action name in there. So we can have one class tha thas a functionality called savefile, and it's saving the file in a location and we have another class with the same name saving to a database. They share the same name but we want to call the correct method when the times comes and very different actions will be taken. As far as the end user and sometimes the developer is concerned, we simple just call the appropriate method with that name. The difference is based on the context on how the method is called and where it's called from. Overall, an inheritance of classes and objets can provide multiple functions having the same name, but provide different functionalities.",
        description: "Object oriented programming is a term you will hear and read about often. Not only when it comes to C# but other modern programming languages. Terminology can be very important when you are understanding all the concepts and fully graps all the functionality of a programming language."
    }, {
        type: "Writing and Reading Files",
        quiz: "Lesson 6",
        image_url: "images/image1.png",
        summary: "Object Oriented Programming really helps us create very efficient applications that can be very easily maintained even extended and changed. To really appreciate this, you would have to have experience working with some of the non-objected oritened languages such as basic or C that required a structured line by line set of instructions that would start from top to bottom running in order.",
        vocab_word_one: "Encapsulation:",
        vocab_word_two: "Inheritance:",
        vocab_word_three: "Polymorphims:",
        vocab_desc_one: " Grouping of data and functions into a single component. This will also allow seletive 'hiding' of data and functionalities. Security is a hot topic today, making sure a user is not a hacker so we focus on hiding some of the functionality. Some of this is for security and part of it is for simplicty and ease of use of objects. The best example of this is using a smart phone to make a telephone call. Now you can take any smart phone such as an iPhone, Android, Windows Phone and still understand how to make a call. As a new user, you may not understand how to make a call at first but it's not going to take long to learn. This is because the functionality is encapsulated into a providers system which is shared across different cell phone platforms.",
        vocab_desc_two: " The second major aspect of object oriented programming. This is the process that enables one class to reuse code from another class. So a sungle object can posses the functionality of mulitple classes. Now, this is where we avoid code duplication. Inheritance provides the ability to extend and modify the behavior in a very easilty maintainble environment, allowing us to continue to seperate functionality into discrete sections or classes inside the code and then inherite the functionality into other classes that need it and allow those classes that are inheriting them to add additional functionality.",
        vocab_desc_three: " It's the natural result of inheritance and encapsulation working together. What's going to happen here is we are going to end up with multiple classes that have the same method or action name in there. So we can have one class tha thas a functionality called savefile, and it's saving the file in a location and we have another class with the same name saving to a database. They share the same name but we want to call the correct method when the times comes and very different actions will be taken. As far as the end user and sometimes the developer is concerned, we simple just call the appropriate method with that name. The difference is based on the context on how the method is called and where it's called from. Overall, an inheritance of classes and objets can provide multiple functions having the same name, but provide different functionalities.",
        description: "Object oriented programming is a term you will hear and read about often. Not only when it comes to C# but other modern programming languages. Terminology can be very important when you are understanding all the concepts and fully graps all the functionality of a programming language."
    }, {
        type: "Modern Language Features",
        quiz: "Lesson 7",
        image_url: "images/image1.png",
        summary: "Object Oriented Programming really helps us create very efficient applications that can be very easily maintained even extended and changed. To really appreciate this, you would have to have experience working with some of the non-objected oritened languages such as basic or C that required a structured line by line set of instructions that would start from top to bottom running in order.",
        vocab_word_one: "Encapsulation:",
        vocab_word_two: "Inheritance:",
        vocab_word_three: "Polymorphims:",
        vocab_desc_one: " Grouping of data and functions into a single component. This will also allow seletive 'hiding' of data and functionalities. Security is a hot topic today, making sure a user is not a hacker so we focus on hiding some of the functionality. Some of this is for security and part of it is for simplicty and ease of use of objects. The best example of this is using a smart phone to make a telephone call. Now you can take any smart phone such as an iPhone, Android, Windows Phone and still understand how to make a call. As a new user, you may not understand how to make a call at first but it's not going to take long to learn. This is because the functionality is encapsulated into a providers system which is shared across different cell phone platforms.",
        vocab_desc_two: " The second major aspect of object oriented programming. This is the process that enables one class to reuse code from another class. So a sungle object can posses the functionality of mulitple classes. Now, this is where we avoid code duplication. Inheritance provides the ability to extend and modify the behavior in a very easilty maintainble environment, allowing us to continue to seperate functionality into discrete sections or classes inside the code and then inherite the functionality into other classes that need it and allow those classes that are inheriting them to add additional functionality.",
        vocab_desc_three: " It's the natural result of inheritance and encapsulation working together. What's going to happen here is we are going to end up with multiple classes that have the same method or action name in there. So we can have one class tha thas a functionality called savefile, and it's saving the file in a location and we have another class with the same name saving to a database. They share the same name but we want to call the correct method when the times comes and very different actions will be taken. As far as the end user and sometimes the developer is concerned, we simple just call the appropriate method with that name. The difference is based on the context on how the method is called and where it's called from. Overall, an inheritance of classes and objets can provide multiple functions having the same name, but provide different functionalities.",
        description: "Object oriented programming is a term you will hear and read about often. Not only when it comes to C# but other modern programming languages. Terminology can be very important when you are understanding all the concepts and fully graps all the functionality of a programming language."
    }, {
        type: "Getting Started With LINQ",
        quiz: "Lesson 8",
        image_url: "images/image1.png",
        summary: "Object Oriented Programming really helps us create very efficient applications that can be very easily maintained even extended and changed. To really appreciate this, you would have to have experience working with some of the non-objected oritened languages such as basic or C that required a structured line by line set of instructions that would start from top to bottom running in order.",
        vocab_word_one: "Encapsulation:",
        vocab_word_two: "Inheritance:",
        vocab_word_three: "Polymorphims:",
        vocab_desc_one: " Grouping of data and functions into a single component. This will also allow seletive 'hiding' of data and functionalities. Security is a hot topic today, making sure a user is not a hacker so we focus on hiding some of the functionality. Some of this is for security and part of it is for simplicty and ease of use of objects. The best example of this is using a smart phone to make a telephone call. Now you can take any smart phone such as an iPhone, Android, Windows Phone and still understand how to make a call. As a new user, you may not understand how to make a call at first but it's not going to take long to learn. This is because the functionality is encapsulated into a providers system which is shared across different cell phone platforms.",
        vocab_desc_two: " The second major aspect of object oriented programming. This is the process that enables one class to reuse code from another class. So a sungle object can posses the functionality of mulitple classes. Now, this is where we avoid code duplication. Inheritance provides the ability to extend and modify the behavior in a very easilty maintainble environment, allowing us to continue to seperate functionality into discrete sections or classes inside the code and then inherite the functionality into other classes that need it and allow those classes that are inheriting them to add additional functionality.",
        vocab_desc_three: " It's the natural result of inheritance and encapsulation working together. What's going to happen here is we are going to end up with multiple classes that have the same method or action name in there. So we can have one class tha thas a functionality called savefile, and it's saving the file in a location and we have another class with the same name saving to a database. They share the same name but we want to call the correct method when the times comes and very different actions will be taken. As far as the end user and sometimes the developer is concerned, we simple just call the appropriate method with that name. The difference is based on the context on how the method is called and where it's called from. Overall, an inheritance of classes and objets can provide multiple functions having the same name, but provide different functionalities.",
        description: "Object oriented programming is a term you will hear and read about often. Not only when it comes to C# but other modern programming languages. Terminology can be very important when you are understanding all the concepts and fully graps all the functionality of a programming language."
    }];


})();
