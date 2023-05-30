student = {
    "firstName": "Retha",
    "lastName": "Killeen",
    "age": 32,
    "email": "rkilleen0@mysql.com",
    "gender": "F",
    "country": "Philippines",
    "isStudentActive": false,
    "favouriteSubjects": [
        "maths",
        "english",
        "it"
    ],
    "totalSpentInBooks": 0.00
}

room = {
    "roomName": "onyx room",
    "roomColor": "Red",
    "Room Number": 2,
    "Price": 70000.00
}

student2 = {
    "firstName": "omatsola",
    "lastName": "sobotie",
    "age": 30,
    "email": "rkillgheen0@mysql.com",
    "gender": "F",
    "country": "Philippines",
    "isStudentActive": true,
    "favouriteSubjects": [
        "maths",
        "english",
        "it"
    ],
    "totalSpentInBooks": 0.00
}

students = [
    {
        "firstName": "Retha",
        "lastName": "Killeen",
        "email": "rkilleen0@mysql.com",
        "gender": "F",
        "country": "Philippines",
        "isStudentActive": false,
        "favouriteSubjects": [
            "maths",
            "english",
            "it"
        ],
        "totalSpentInBooks": 100.00
    },
    {
        "firstName": "Coraline",
        "lastName": "Langham",
        "email": "clangham1@globo.com",
        "gender": "F",
        "country": "Philippines",
        "isStudentActive": true,
        "favouriteSubjects": [],
        "totalSpentInBooks": 5.00
    },
    {
        "firstName": "Ario",
        "lastName": "Frye",
        "email": "afrye2@blogs.com",
        "gender": "M",
        "country": "Argentina",
        "isStudentActive": true,
        "favouriteSubjects": [
            "science",
            "history"
        ],
        "totalSpentInBooks": 0.00
    },
    {
        "firstName": "Sandye",
        "lastName": "Iddens",
        "email": "siddens3@spiegel.de",
        "gender": "F",
        "country": "France",
        "isStudentActive": true,
        "favouriteSubjects": [
            "it"
        ],
        "totalSpentInBooks": 0.00
    },
    {
        "firstName": "Lynn",
        "lastName": "Antonsson",
        "email": "lantonsson4@yelp.com",
        "gender": "F",
        "country": "Indonesia",
        "isStudentActive": true,
        "favouriteSubjects": [
            "computer science",
            "it",
            "maths"
        ],
        "totalSpentInBooks": 0.00
    },
    {
        "firstName": "Fabe",
        "lastName": "Chartman",
        "email": "fchartman5@reuters.com",
        "gender": "M",
        "country": "Angola",
        "isStudentActive": false,
        "favouriteSubjects": [
            "history"
        ],
        "totalSpentInBooks": 66.00
    },
    {
        "firstName": "Nealon",
        "lastName": "Tabord",
        "email": "ntabord6@devhub.com",
        "gender": "M",
        "country": "Greece",
        "isStudentActive": false,
        "favouriteSubjects": [
            "maths"
        ],
        "totalSpentInBooks": 0.00
    },
    {
        "firstName": "Jule",
        "lastName": "Brough",
        "email": "jbrough7@wix.com",
        "gender": "M",
        "country": "Russia",
        "isStudentActive": true,
        "favouriteSubjects": [
            "english",
            "science"
        ],
        "totalSpentInBooks": 100.00
    },
    {
        "firstName": "Mufinella",
        "lastName": "Sansun",
        "email": "msansun8@google.com",
        "gender": "F",
        "country": "China",
        "isStudentActive": false,
        "favouriteSubjects": [
            "science"
        ],
        "totalSpentInBooks": 0.00
    },
    {
        "firstName": "Cally",
        "lastName": "Walkden",
        "email": "cwalkden9@craigslist.org",
        "gender": "F",
        "country": "Niger",
        "isStudentActive": true,
        "favouriteSubjects": [
            "it"
        ],
        "totalSpentInBooks": 165.00
    }
]

var comment1 = {
    fullText: "This is my first comment 1",
    user: {
        name: "John Doe",
        email: "john@example.com"
    },
    date: new Date()
};

var comment2 = {
    fullText: "This is my second comment 2",
    user: {
        name: "Jane Smith",
        email: "jane@example.com"
    },
    date: new Date()
};

db.TBL_COMMENTS.updateOne(
    { _id: ObjectId("your_movie_id") },
    { $push: { comments: { $each: [comment1, comment2] } } }
);