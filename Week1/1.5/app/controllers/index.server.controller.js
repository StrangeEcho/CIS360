exports.render = function (req, res, ) { 
    var defs = [ // Declare a dictionary with the names of the MEAN stack and defs
        { name: 'MongoDB', definition: 'NoSQL database storing data in JSON-like documents' },
        { name: 'Express', definition: 'Web application framework for Node.js, simplifies server-side coding.' },
        { name: 'Angular', definition: 'Front-end framework for building dynamic web applications.' },
        { name: 'Node.js', definition: 'JavaScript runtime for server-side application development' },
    ]

    var myname = "Ruben Thomas";

    res.render('index', { // Passable to index.ejs
        title: 'The MEAN Stack!',
        definitions: defs,
        myname: myname
    });
};

