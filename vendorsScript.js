const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/marrymint"
);

const Vendors = require("./models/vendors");

Vendors.insertMany([
    {
        "name": "Bird Dog Wedding", 
        "category": "Planner",
        "link": "https://www.birddogwedding.com/",
        "photo": "https://i.postimg.cc/T3tnyrcy/bird-dog-wedding.png",
        "description": "Colorful and fun events for the modern bride."
    },
    {
        "name": "36th Street Events", 
        "category": "Planner",
        "link": "http://www.36thstreetevents.com/",
        "photo": "https://i.postimg.cc/qRzwBmVM/36th-street-events.jpg ",
        "description": "Classic weddings with a touch of romance."
    },
    {
        "name": "Kindle & Gather", 
        "category": "Planner",
        "link": "http://www.kindleandgather.com/",
        "photo": "https://i.postimg.cc/8PBRG8Jm/kindle-and-gather.jpg",
        "description": "Minimal and modern weddings for the simple bride."
    },
    {
        "name": "Sophie Epton", 
        "category": "Photographer",
        "link": "http://www.sophieepton.com/",
        "photo": "https://i.postimg.cc/yNJ3k2d5/sophie-epton.png",
        "description": "Romantic film photographer with a love for details."
    },
    {
        "name": "Paige Newton", 
        "category": "Photographer",
        "link": "https://www.birddogwedding.com/",
        "photo": "http://www.paigenewtonweddings.com/",
        "description": "Photojournalistic photographer with a modern touch."
    },
    {
        "name": "Kayla Snell", 
        "category": "Photographer",
        "link": "http://www.kaylasnell.com/",
        "photo": "https://i.postimg.cc/VNNB47NB/kayla-snell.jpg",
        "description": "Classic photographer with a passion for light and love."
    },
    {
        "name": "Davy Gray", 
        "category": "Florist",
        "link": "http://www.davygray.com/",
        "photo": "https://i.postimg.cc/NfhDY7NB/davy-gray.jpg",
        "description": "Bohemian florist creating asymmetrical arrangements."
    }
]);