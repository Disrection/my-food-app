// src/data/mockData.js

// 1) Add more cuisines (we're simply treating each cuisine as a category)
export const categories = [
  { id: 'american', name: 'American' },
  { id: 'italian',  name: 'Italian'  },
  { id: 'mexican', name: 'Mexican' },
  { id: 'indian',  name: 'Indian'  },
  { id: 'chinese', name: 'Chinese' },
  { id: 'japanese',name: 'Japanese'},
];

// 2) Add items for each new cuisine
export const items = [
  // existing
  { id: 1, category: 'american', name: 'Classic Burger', price:  5.99,
    img: 'https://media.istockphoto.com/id/1185421185/photo/classic-burger-with-fries-horizontal.jpg?s=612x612&w=0&k=20&c=-UhvlIpbx4FC3PKZcmQr_J1YlNcoElUAkbsH3nU2y1I=', tag: 'Popular',
  
  Location: 'MC Donalds',
  rating: 4.5, 
  reviews: [
    { user: 'Alice', comment: 'Best burger in town!', rating: 5 },
    { user: 'Bob', comment: 'A bit too salty for my taste.', rating: 3 },
  ],
  origin: `The classic burger, as we know it, likely originated in the late 19th or early 20th century in the United States,
           with several individuals and places laying claim to its invention.
           While the exact origin is debated,
           several key figures and events stand out in its early history.`,
  cookTime: '15 mins'
},

  { id: 2, category: 'american',  name: 'Mango-Cheesecake', price:  10.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiS9WSUfbvj_wpdVCUkJHA4H1v92kDxei42boEk7tp_iF7mQkHBrXSvn3tlJzRmc4wP0w&usqp=CAU', tag: 'Sweet',
  
  Location: 'Bakery Delight',
  rating: 4.7, 
  reviews: [
    { user: 'Cris', comment: 'Fresh and Pure taste', rating: 5 },
    { user: 'Ray', comment: 'It is super smooth in texture and delicious in taste', rating: 4.5 },
  ],
  origin: `Cheesecake has a long and rich history, 
           with origins traced back to ancient Greece. 
           The earliest evidence of a cheesecake-like dessert dates 
           back to the 5th century BC on the island of Samos.`,
  cookTime: '1 hour' 
},

  { id: 3, category: 'american',  name: 'Chocolate-Foundant', price:  12.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPvJY162c61WmKiZabwSObYQWdg6sAiSe7_w&s', tag: 'sweet', 
  
  Location: 'Bakery Delight',
  rating: 4.6, 
  reviews: [
    { user: 'Sam', comment: 'Chocolaty and little too sweet', rating: 4.0 },
    { user: 'Sailly', comment: 'Soft and chocolaty texture', rating: 4.5 },
  ],
  origin: `Chocolate fondant, a famous French dessert, 
           was created by Michelin chef Michel Bras in 1981. 
           Fondant au chocolat, which means "melted chocolate", 
           is a small chocolate cake with soft outer layer and mellow hot chocolate paste inside`,
  cookTime: '10-12 mins'
},

    // new Italian items
  { id: 4, category: 'italian',   name: 'Margherita Pizza', price:  8.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzmc0r2QKTOoFqSqnNf50udN2Gel1grF5yg&s',  tag: 'Popular',
  
  Location: 'La Pizzeria',
  rating: 4.6, 
  reviews: [
    { user: 'Rusell', comment: 'Just loved the cheese pull', rating: 4.7 },
    { user: 'Siya', comment: 'Soft and tangy texture', rating: 4.5 },
  ],
  origin: `Margherita pizza, a simple yet iconic pizza, 
           is believed to have originated in Naples, Italy, in 1889. 
           It's said to have been created by pizzaiolo Raffaele Esposito, 
           in honor of Queen Margherita of Savoy. `,
  cookTime: '8-12 mins'},

  { id: 5, category: 'italian',   name: 'Pasta Carbonara', price:  9.49,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStLk3SXck4nO5f6MTNmW4RnifKpukKq77gHQ&s', tag: 'New',
  
  Location: 'Pasta House',
  rating: 4.8,
  reviews: [
    { user: 'John', comment: 'Creamy and delicious', rating: 5 },
    { user: 'Emma', comment: 'Perfectly cooked pasta', rating: 4.9 },
  ],
  origin: `Pasta Carbonara is a classic Roman dish that originated in the mid-20th century.
           Its exact origins are debated, but it is believed to have been created by Italian charcoal workers (carbonari) 
           who made the dish with simple ingredients like eggs, cheese, and cured pork.`,
  cookTime: '15 mins'},

  { id: 6, category: 'italian',   name: 'Tiramisu', price:  4.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNShEAFdmxjaAUST8irsTLrdJSHowauI4tw&s', tag: 'Sweet',
  
  Location: 'Dessert Corner',
  rating: 4.9,
  reviews: [
    { user: 'Lily', comment: 'Heavenly coffee flavor', rating: 5 },
    { user: 'Mike', comment: 'Perfect balance of sweetness', rating: 4.8 },
  ],
  origin: `Tiramisu, a beloved Italian dessert,
           is believed to have originated in the Veneto region of Italy in the 1960s.
           Its name means "pick me up" in Italian, likely referring to the energizing effects of coffee and cocoa.`,
  cookTime: '30 mins'},

  // new Mexican items
  { id: 7, category: 'mexican', name: 'Chicken Tacos', price:  6.49,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5-dHGRWLSvqUkHi_qRfG_y9VSWWRsqaERA&s', tag: 'Spicy',
  
  Location: 'Taco Fiesta',
  rating: 4.5, 
  reviews: [
    { user: 'Tom', comment: 'Spicy and flavorful', rating: 4.6 },
    { user: 'Sara', comment: 'Loved the fresh ingredients', rating: 4.8 },
  ],
  origin: `Tacos, a staple of Mexican cuisine,
            have a rich history that dates back to the 18th century.
            The word "taco" is believed to have originated from the silver mines of Mexico,
            where miners would use small pieces of paper to wrap gunpowder, which they called "tacos".`,
  cookTime: '10 mins'},

  { id: 8, category: 'mexican', name: 'Chicken Burrito', price:  7.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3FmLLsBJB5fAnw46tadM21Cbe3qbKv9BYmw&s', tag: 'Spicy',
  
  Location: 'Burrito Bar',
  rating: 4.7, 
  reviews: [
    { user: 'Nina', comment: 'Generous portion size', rating: 5 },
    { user: 'Leo', comment: 'Great balance of flavors', rating: 4.9 },
  ],
  origin: `Burritos, a popular Mexican-American dish,
           are believed to have originated in the early 20th century in the Mexican-American border region.
           The name "burrito" means "little donkey" in Spanish, 
           possibly referring to the way the wrapped tortilla resembles a donkey's ear.`,
  cookTime: '15 mins'},

  { id: 9, category: 'mexican', name: 'Veg Quesadilla', price:  5.49,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtMMTlr2iZ05V1wYYoDwphzF6GFh3OU0cldQ&s', tag: 'New',
  
  Location: 'Quesadilla House',
  rating: 4.6, 
  reviews: [
    { user: 'Olivia', comment: 'Cheesy and satisfying', rating: 4.8 },
    { user: 'Ethan', comment: 'Perfectly grilled tortilla', rating: 4.7 },
  ],
  origin: `Quesadillas, a traditional Mexican dish,
           have a history that dates back to the 16th century.
           The name "quesadilla" comes from the Spanish word "queso", meaning cheese,
           and it originally referred to a tortilla filled with cheese and folded in half.`,
  cookTime: '8 mins'},

  // new Indian items
  { id: 10, category: 'indian',  name: 'Butter Paneer Masala', price: 10.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW2ANWx6_vxJ0JZvcXqbFlIqY9KQC8W2q0yQ&s', tag: 'Spicy',
  Location: 'Spice Junction',
  rating: 4.8,
  reviews: [
    { user: 'Raj', comment: 'Rich and creamy sauce', rating: 5 },
    { user: 'Priya', comment: 'Perfectly spiced', rating: 4.9 },
  ],
  origin: `Butter Paneer Masala, a popular North Indian dish,
           is believed to have originated in the 1950s at the Moti Mahal restaurant in Delhi.
           It features paneer (Indian cottage cheese) cooked in a rich tomato-based gravy with butter and spices.`,
  cookTime: '20 mins'},

  { id: 11, category: 'indian',  name: 'Masala Dosa', price:  4.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv4F_s0QF9Q_xnKUxOdINmO_jVTnCiPB8QCA&s', tag: 'Popular',
  
  Location: 'South Indian Delight',
  rating: 4.7,
  reviews: [
    { user: 'Anita', comment: 'Crispy and flavorful', rating: 5 },
    { user: 'Vikram', comment: 'Loved the coconut chutney', rating: 4.8 },
  ],
  origin: `Masala Dosa, a South Indian specialty,
           is believed to have originated in the Udupi region of Karnataka, India.
           It consists of a fermented rice and lentil crepe filled with spiced potatoes.`,
  cookTime: '15 mins'},

  { id: 12, category: 'indian',  name: 'Gulab Jamun', price:  8.49,
    img: 'https://cdn.igp.com/f_auto,q_auto,t_pnopt19prodlp/products/p-luscious-gulab-jamun-400-gm--286452-m.jpg', tag: 'Sweet',
  
  Location: 'Sweet Treats',
  rating: 4.9,
  reviews: [
    { user: 'Aarav', comment: 'Soft and syrupy', rating: 5 },
    { user: 'Diya', comment: 'Perfectly sweet', rating: 4.9 },
  ],
  origin: `Gulab Jamun, a beloved Indian dessert,
           is believed to have been inspired by Persian and Mughal cuisine.
           It consists of deep-fried dough balls soaked in sugar syrup flavored with rose water.`,
  cookTime: '30 mins'},

  // new Chinese items
  { id: 13, category: 'chinese', name: 'Kung Pao Chicken', price: 11.49,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwXHVMFnVLa2-aQ-wFwfbEb6TRRIRzW97Gkw&s', tag: 'New',
  
  Location: 'Dragon Wok',
  rating: 4.6,
  reviews: [
    { user: 'Li', comment: 'Spicy and tangy', rating: 4.8 },
    { user: 'Chen', comment: 'Loved the crunch of peanuts', rating: 4.7 },
  ],
  origin: `Kung Pao Chicken, a classic Sichuan dish,
           is believed to have originated in the late Qing Dynasty in China.
           It features diced chicken stir-fried with peanuts, vegetables, and chili peppers.`,
  cookTime: '15 mins'},

  { id: 14, category: 'chinese', name: 'Veg Fried Rice', price:  5.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaLseIn0ejXsJyqrZDJFktUGMMddL84-nneA&s', tag: 'Popular',
  
  Location: 'Rice Bowl',
  rating: 4.5,
  reviews: [
    { user: 'Ming', comment: 'Flavorful and filling', rating: 4.6 },
    { user: 'Xiao', comment: 'Perfectly cooked rice', rating: 4.5 },
  ],
  origin: `Fried rice, a staple in Chinese cuisine,
           has a history that dates back to the Sui Dynasty (581–618 AD).
           It is believed to have been created as a way to use leftover rice and ingredients.`,
  cookTime: '10 mins'},

  { id: 15, category: 'chinese', name: 'Spring Rolls', price:  4.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpj9gOE4yiwoc3rmg_yv3sMlxx6Q38Xsslgw&s', tag: 'Popular',
  
  Location: 'Spring Roll House',
  rating: 4.8,
  reviews: [
    { user: 'Ying', comment: 'Crispy and delicious', rating: 5 },
    { user: 'Hua', comment: 'Loved the dipping sauce', rating: 4.9 },
  ],
  origin: `Spring rolls, a popular Chinese appetizer,
           have a history that dates back to the Eastern Jin Dynasty (317–420 AD).
           They were originally eaten during the Spring Festival to symbolize wealth and prosperity.`,
  cookTime: '8 mins'},

  // new Japanese items
  { id: 16, category: 'japanese',name: 'California Roll', price:  8.49,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS28rBgmGqO_zm-aDdYUsQo_EBP7fWlRHkenQ&s', tag: 'Popular',
  
  Location: 'Sushi World',
  rating: 4.7,
  reviews: [
    { user: 'Akira', comment: 'Fresh and flavorful', rating: 5 },
    { user: 'Yuki', comment: 'Perfectly rolled sushi', rating: 4.8 },
  ],
  origin: `California Roll, a popular sushi roll,
           is believed to have been created in the 1960s in Los Angeles, California.
           It features imitation crab, avocado, and cucumber wrapped in rice and seaweed.`,
  cookTime: '10 mins'},

  { id: 17, category: 'japanese',name: 'Chicken Yakitori', price:  7.49,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGzqFffPY5cideqG-3CsilbZtQwfeYfgwbw&s', tag: 'Spicy',
  
  Location: 'Yakitori Grill',
  rating: 4.6,
  reviews: [
    { user: 'Hiro', comment: 'Tender and juicy', rating: 4.8 },
    { user: 'Sakura', comment: 'Loved the smoky flavor', rating: 4.7 },
  ],
  origin: `Yakitori, a popular Japanese dish,
           originated in the Edo period (1603–1868) in Japan.
           It consists of skewered and grilled chicken, often seasoned with salt or a savory sauce.`,
  cookTime: '15 mins'},

  { id: 18, category: 'japanese',name: 'Mochi Ice Cream', price:  3.99,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjVKU1Dr-U-guoopq5LskW6bH9Vbm0cBZ_w&s', tag: 'Sweet',
   
  Location: 'Dessert Haven',
  rating: 4.9,
  reviews: [
    { user: 'Riku', comment: 'Chewy and delightful', rating: 5 },
    { user: 'Aiko', comment: 'Loved the variety of flavors', rating: 4.8 },
  ],
  origin: `Mochi ice cream, a fusion dessert,
           is believed to have originated in Japan in the 1980s.
           It consists of a chewy rice cake (mochi) filled with ice cream, combining traditional and modern flavors.`,
  cookTime: '5 mins'},
];