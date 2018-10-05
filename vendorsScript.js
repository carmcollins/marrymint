const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/marrymint"
);

const Vendors = require("./models/vendors");

Vendors.insertMany([
    {
        "number": 1,
        "name": "Bird Dog Wedding", 
        "category": "Planner",
        "link": "https://www.birddogwedding.com/",
        "photo": "https://i.postimg.cc/T3tnyrcy/bird-dog-wedding.png",
        "description": "Colorful and fun events for the modern bride."
        
    },
    {
        "number": 2,
        "name": "Birch & Brass", 
        "category": "Rentals",
        "link": "https://www.birchandbrass.com/",
        "photo": "https://i.postimg.cc/KvnNYkVL/birch-and-brass.png",
        "description": "Mid-century modern rentals for the color-loving bride."
    },
    {
        "number": 3,
        "name": "Blue Eye Brown Eye", 
        "category": "Stationery",
        "link": "https://blueeyebrowneye.com/",
        "photo": "https://i.postimg.cc/vZbvx8FK/blue-eye-brown-eye.png",
        "description": "Calligrapher with a passion for fun colors and patterns."
    },
    {
        "number": 4,
        "name": "Barr Mansion", 
        "category": "Venue",
        "link": "http://barrmansion.com/",
        "photo": "https://i.postimg.cc/HxR2rQd0/barr-mansion.jpg",
        "description": "Modern meets traditional at this East Austin mansion."
    },
    {
        "number": 5,
        "name": "36th Street Events", 
        "category": "Planner",
        "link": "http://www.36thstreetevents.com/",
        "photo": "https://i.postimg.cc/qRzwBmVM/36th-street-events.jpg ",
        "description": "Classic weddings with a touch of romance."
    },
    {
        "number": 6,
        "name": "Sweet Treets", 
        "category": "Bakers",
        "link": "http://www.sweettreetsbakery.com/",
        "photo": "https://i.postimg.cc/KYdkLQ3Y/sweet-treets.png",
        "description": "Irresistible wedding cakes with a modern twist."
    },
    {
        "number": 7,
        "name": "Davy Gray", 
        "category": "Florist",
        "link": "http://www.davygray.com/",
        "photo": "https://i.postimg.cc/NfhDY7NB/davy-gray.jpg",
        "description": "Bohemian florist creating asymmetrical arrangements."
    },
    {
        "number": 8,
        "name": "La Tavola Linens", 
        "category": "Rentals",
        "link": "https://latavolalinen.com/",
        "photo": "https://i.postimg.cc/4xPQ6CXx/la-tavola-linen.jpg",
        "description": "Unique linen patterns shipped to your front door."
    },
    {
        "number": 9,
        "name": "Little Gray Films", 
        "category": "Videographer",
        "link": "http://www.graysencummings.com/",
        "photo": "https://i.postimg.cc/VL1tD7Gr/little-gray-films.png",
        "description": "Simple and sweet wedding films set to indie music."
    },
    {
        "number": 10,
        "name": "Bricolage", 
        "category": "Florist",
        "link": "http://www.bricolagecf.com/",
        "photo": "https://i.postimg.cc/MHBYVvpC/bricolage.jpg",
        "description": "Dark and moody florals for the glamorous bride."
    },
    {
        "number": 11,
        "name": "Remi & Gold", 
        "category": "Florist",
        "link": "http://remiandgold.com/",
        "photo": "https://i.postimg.cc/HWb50G21/remi-and-gold.jpg",
        "description": "Big and bright florals always with a pop of hot pink."
    },
    {
        "number": 12,
        "name": "Royal Fig", 
        "category": "Caterer",
        "link": "https://www.royalfig.com/",
        "photo": "https://i.postimg.cc/br0tqbJw/royal-fig.jpg",
        "description": "Classic wedding dinners made with local ingredients."
    },
    {
        "number": 13,
        "name": "Coco Paloma", 
        "category": "Bakers",
        "link": "http://cocopalomadesserts.com/",
        "photo": "https://i.postimg.cc/PqFb7mpG/coco-paloma.png",
        "description": "Classic wedding cakes with a perfect finish."
    },
    {
        "number": 14,
        "name": "Kayla Snell", 
        "category": "Photographer",
        "link": "http://www.kaylasnell.com/",
        "photo": "https://i.postimg.cc/VNNB47NB/kayla-snell.jpg",
        "description": "Classic photographer with a passion for light and love."
    },
    {
        "number": 15,
        "name": "Boarding School", 
        "category": "Stationery",
        "link": "http://www.boardingschoolcollective.com/",
        "photo": "https://i.postimg.cc/sXQPCv7M/boarding-school-collective.png",
        "description": "Romantic, modern calligrapher and paper designer."
    },
    {
        "number": 16,
        "name": "Sophie Epton", 
        "category": "Photographer",
        "link": "http://www.sophieepton.com/",
        "photo": "https://i.postimg.cc/yNJ3k2d5/sophie-epton.png",
        "description": "Romantic film photographer with a love for details."
    },
    {
        "number": 17,
        "name": "Loot Rentals", 
        "category": "Rentals",
        "link": "http://lootrentals.com/",
        "photo": "https://i.postimg.cc/1XDp42WP/loot-rentals.jpg",
        "description": "Vintage rentals for designing a cozy, handmade party."
    },
    {
        "number": 18,
        "name": "Peyton Frank", 
        "category": "Videographer",
        "link": "http://www.peytonannefrank.com/",
        "photo": "https://i.postimg.cc/NjCrGQgm/peyton-frank.png",
        "description": "Romantic videographer who shines with short films."
    },
    {
        "number": 19,
        "name": "Avery Allen", 
        "category": "Beauty",
        "link": "https://www.averyallenmakeup.com/",
        "photo": "https://i.postimg.cc/q77jGYQf/avery-allen.png",
        "description": "Modern makeup artist who loves a pop of color."
    },
    {
        "number": 20,
        "name": "Kindle & Gather", 
        "category": "Planner",
        "link": "http://www.kindleandgather.com/",
        "photo": "https://i.postimg.cc/8PBRG8Jm/kindle-and-gather.jpg",
        "description": "Minimal and modern weddings for the simple bride."
    },
    {
        "number": 21,
        "name": "The Peached Tortilla", 
        "category": "Caterer",
        "link": "https://thepeachedtortilla.com/",
        "photo": "https://i.postimg.cc/gkDZ5vQM/peached-tortilla.png",
        "description": "Asian meets Southern at this catering food truck."
    },
    {
        "number": 22,
        "name": "LoLa Beauty", 
        "category": "Beauty",
        "link": "http://www.lolabeautyatx.com/",
        "photo": "https://i.postimg.cc/Y0BFc8tP/lola-beauty.png",
        "description": "A team of makeup artists to beautify all your girls."
    },
    {
        "number": 23,
        "name": "Contigo", 
        "category": "Caterer",
        "link": "https://contigotexas.com/",
        "photo": "https://i.postimg.cc/mZ1j06ym/contigo.jpg",
        "description": "Homegrown favorites known for their pig roast parties."
    },
    {
        "number": 24,
        "name": "Fine Day Press", 
        "category": "Stationery",
        "link": "https://www.finedaypress.com/",
        "photo": "https://i.postimg.cc/k5DKWBjT/fine-day-press.png",
        "description": "Colorful and fresh stationery for the modern bride."
    },
    {
        "number": 25,
        "name": "Sisterwolf", 
        "category": "Videographer",
        "link": "http://www.sisterwolfstudio.com/",
        "photo": "https://i.postimg.cc/YCCWwvwt/sisterwolf.png",
        "description": "Bohemian videographer with an eye for the details."
    },
    {
        "number": 26,
        "name": "Prospect House", 
        "category": "Venue",
        "link": "http://www.prospecthousetx.com/",
        "photo": "https://i.postimg.cc/ZRdNDXz3/prospect-house.jpg",
        "description": "The perfect modern, minimal, all-white wedding venue."
    },
    {
        "number": 27,
        "name": "Paige Newton", 
        "category": "Photographer",
        "link": "http://www.paigenewtonweddings.com/",
        "photo": "https://i.postimg.cc/x1fKTsLD/paige-newton.jpg",
        "description": "Photojournalistic photographer with a modern touch."
    },
    {
        "number": 28,
        "name": "Makenzi Laine", 
        "category": "Beauty",
        "link": "https://makenzilaine.com/",
        "photo": "https://i.postimg.cc/59z5PQfG/makenzi-laine.jpg",
        "description": "Artist who perfectly achieves the “no makeup” look."
    },
    {
        "number": 29,
        "name": "Mercury Hall", 
        "category": "Venue",
        "link": "https://www.mercuryhall.com/",
        "photo": "https://i.postimg.cc/15ZGbRtz/mercury-hall.jpg",
        "description": "An old-school Austin favorite with a pop of color."
    },
    {
        "number": 30,
        "name": "Walton's", 
        "category": "Bakers",
        "link": "https://www.waltonsfancyandstaple.com/",
        "photo": "https://i.postimg.cc/cHwKcYfB/waltons.png",
        "description": "Simply delicious desserts like your mom used to make."
    }
]);