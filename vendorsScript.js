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
        "name": "Birch & Brass", 
        "category": "Rentals",
        "link": "https://www.birchandbrass.com/",
        "photo": "https://i.postimg.cc/KvnNYkVL/birch-and-brass.png",
        "description": "Mid-century modern rentals for the color-loving bride."
    },
    {
        "name": "Blue Eye Brown Eye", 
        "category": "Stationery",
        "link": "https://blueeyebrowneye.com/",
        "photo": "https://i.postimg.cc/vZbvx8FK/blue-eye-brown-eye.png",
        "description": "Calligrapher with a passion for fun colors and patterns."
    },
    {
        "name": "Barr Mansion", 
        "category": "Venue",
        "link": "http://barrmansion.com/",
        "photo": "https://i.postimg.cc/HxR2rQd0/barr-mansion.jpg",
        "description": "Modern meets traditional at this East Austin mansion."
    },
    {
        "name": "36th Street Events", 
        "category": "Planner",
        "link": "http://www.36thstreetevents.com/",
        "photo": "https://i.postimg.cc/qRzwBmVM/36th-street-events.jpg ",
        "description": "Classic weddings with a touch of romance."
    },
    {
        "name": "Sweet Treets", 
        "category": "Desserts",
        "link": "http://www.sweettreetsbakery.com/",
        "photo": "https://i.postimg.cc/KYdkLQ3Y/sweet-treets.png",
        "description": "Irresistible wedding cakes with a modern twist."
    },
    {
        "name": "Davy Gray", 
        "category": "Florist",
        "link": "http://www.davygray.com/",
        "photo": "https://i.postimg.cc/NfhDY7NB/davy-gray.jpg",
        "description": "Bohemian florist creating asymmetrical arrangements."
    },
    {
        "name": "La Tavola Linens", 
        "category": "Rentals",
        "link": "https://latavolalinen.com/",
        "photo": "https://i.postimg.cc/4xPQ6CXx/la-tavola-linen.jpg",
        "description": "Unique linen patterns shipped to your front door."
    },
    {
        "name": "Little Gray Films", 
        "category": "Videographer",
        "link": "http://www.graysencummings.com/",
        "photo": "https://i.postimg.cc/VL1tD7Gr/little-gray-films.png",
        "description": "Simple and sweet wedding films set to indie music."
    },
    {
        "name": "Bricolage", 
        "category": "Florist",
        "link": "http://www.bricolagecf.com/",
        "photo": "https://i.postimg.cc/MHBYVvpC/bricolage.jpg",
        "description": "Dark and moody florals for the glamorous bride."
    },
    {
        "name": "Remi & Gold", 
        "category": "Florist",
        "link": "http://remiandgold.com/",
        "photo": "https://i.postimg.cc/HWb50G21/remi-and-gold.jpg",
        "description": "Big and bright florals always with a pop of hot pink."
    },
    {
        "name": "Royal Fig", 
        "category": "Caterer",
        "link": "https://www.royalfig.com/",
        "photo": "https://i.postimg.cc/br0tqbJw/royal-fig.jpg",
        "description": "Classic wedding dinners made with local ingredients."
    },
    {
        "name": "Coco Paloma", 
        "category": "Desserts",
        "link": "http://cocopalomadesserts.com/",
        "photo": "https://i.postimg.cc/PqFb7mpG/coco-paloma.png",
        "description": "Classic wedding cakes with a perfect finish."
    },
    {
        "name": "Kayla Snell", 
        "category": "Photographer",
        "link": "http://www.kaylasnell.com/",
        "photo": "https://i.postimg.cc/VNNB47NB/kayla-snell.jpg",
        "description": "Classic photographer with a passion for light and love."
    },
    {
        "name": "Boarding School", 
        "category": "Stationery",
        "link": "http://www.boardingschoolcollective.com/",
        "photo": "https://i.postimg.cc/sXQPCv7M/boarding-school-collective.png",
        "description": "Romantic, modern calligrapher and paper designer."
    },
    {
        "name": "Sophie Epton", 
        "category": "Photographer",
        "link": "http://www.sophieepton.com/",
        "photo": "https://i.postimg.cc/yNJ3k2d5/sophie-epton.png",
        "description": "Romantic film photographer with a love for details."
    },
    {
        "name": "Loot Rentals", 
        "category": "Rentals",
        "link": "http://lootrentals.com/",
        "photo": "https://i.postimg.cc/1XDp42WP/loot-rentals.jpg",
        "description": "Vintage rentals for designing a cozy, handmade party."
    },
    {
        "name": "Peyton Frank", 
        "category": "Videographer",
        "link": "http://www.peytonannefrank.com/",
        "photo": "https://i.postimg.cc/NjCrGQgm/peyton-frank.png",
        "description": "Romantic videographer who shines with short films."
    },
    {
        "name": "Avery Allen", 
        "category": "Beauty",
        "link": "https://www.averyallenmakeup.com/",
        "photo": "https://i.postimg.cc/HxqwYd9B/avery-allen.png",
        "description": "Modern makeup artist who loves a pop of color."
    },
    {
        "name": "Kindle & Gather", 
        "category": "Planner",
        "link": "http://www.kindleandgather.com/",
        "photo": "https://i.postimg.cc/8PBRG8Jm/kindle-and-gather.jpg",
        "description": "Minimal and modern weddings for the simple bride."
    },
    {
        "name": "The Peached Tortilla", 
        "category": "Caterer",
        "link": "https://thepeachedtortilla.com/",
        "photo": "https://i.postimg.cc/gkDZ5vQM/peached-tortilla.png",
        "description": "Asian meets Southern at this catering food truck."
    },
    {
        "name": "LoLa Beauty", 
        "category": "Beauty",
        "link": "http://www.lolabeautyatx.com/",
        "photo": "https://i.postimg.cc/Y0BFc8tP/lola-beauty.png",
        "description": "A team of makeup artists to beautify all your girls."
    },
    {
        "name": "Contigo", 
        "category": "Caterer",
        "link": "https://contigotexas.com/",
        "photo": "https://i.postimg.cc/mZ1j06ym/contigo.jpg",
        "description": "Homegrown favorites known for their pig roast parties."
    },
    {
        "name": "Fine Day Press", 
        "category": "Stationery",
        "link": "https://www.finedaypress.com/",
        "photo": "https://i.postimg.cc/k5DKWBjT/fine-day-press.png",
        "description": "Colorful and fresh stationery for the modern bride."
    },
    {
        "name": "Sisterwolf", 
        "category": "Videographer",
        "link": "http://www.sisterwolfstudio.com/",
        "photo": "https://i.postimg.cc/YCCWwvwt/sisterwolf.png",
        "description": "Bohemian videographer with an eye for the details."
    },
    {
        "name": "Prospect House", 
        "category": "Venue",
        "link": "http://www.prospecthousetx.com/",
        "photo": "https://i.postimg.cc/ZRdNDXz3/prospect-house.jpg",
        "description": "The perfect modern, minimal, all-white wedding venue."
    },
    {
        "name": "Paige Newton", 
        "category": "Photographer",
        "link": "http://www.paigenewtonweddings.com/",
        "photo": "https://i.postimg.cc/x1fKTsLD/paige-newton.jpg",
        "description": "Photojournalistic photographer with a modern touch."
    },
    {
        "name": "Makenzi Laine", 
        "category": "Beauty",
        "link": "https://makenzilaine.com/",
        "photo": "https://i.postimg.cc/59z5PQfG/makenzi-laine.jpg",
        "description": "Artist who perfectly achieves the “no makeup” look."
    },
    {
        "name": "Mercury Hall", 
        "category": "Venue",
        "link": "https://www.mercuryhall.com/",
        "photo": "https://i.postimg.cc/15ZGbRtz/mercury-hall.jpg",
        "description": "An old-school Austin favorite with a pop of color."
    },
    {
        "name": "Walton's", 
        "category": "Desserts",
        "link": "https://www.waltonsfancyandstaple.com/",
        "photo": "https://i.postimg.cc/cHwKcYfB/waltons.png",
        "description": "Simply delicious desserts like your mom used to make."
    }
]);