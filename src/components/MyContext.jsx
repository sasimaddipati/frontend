import React, { createContext, useState } from 'react';
const MyContext = createContext();
const MyProvider = ({ children }) => {
  const [state, setstate] = useState('beef');
  const [cartitems, setcartitems] = useState([]);
  const [address,setaddress]=useState([]);
  const [loginstatus,setloginstatus]=useState(false)
  const [filteredItems, setFilteredItems] = useState([]);
  const [user,setuser]=useState(null)
  const addUser=[]
  let items={
    "foodItems":[
       {
         "category": "beef",
         "name": "Classic Beef Burger",
         "restaurant": "Burger Haven",
         "imgAddress": "https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2021/06/Beef-Burgers-083-1025x1536.jpg",
         "description": "A juicy beef patty with lettuce, tomato, and cheese, served on a toasted bun."
       },
       {
         "category": "beef",
         "name": "Beef Tacos",
         "restaurant": "Taco Fiesta",
         "imgAddress": "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
         "description": "Soft corn tortillas filled with seasoned ground beef, topped with cilantro and onions."
       },
       {
         "category": "beef",
         "name": "Beef Stroganoff",
         "restaurant": "Gourmet Delights",
         "imgAddress": "https://hips.hearstapps.com/hmg-prod/images/beef-stroganoff-index-652e9646c4d0f.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
         "description": "Tender beef strips in a creamy mushroom sauce, served over egg noodles."
       },
       {
         "category": "beef",
         "name": "Beef Pho",
         "restaurant": "Pho Palace",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGnkz7LPNNnGZX1eG9Is04eyoMh6WCb8sd3Q&s",
         "description": "A flavorful Vietnamese noodle soup with thinly sliced beef, fresh herbs, and spices."
       },
       {
         "category": "beef",
         "name": "Beef and Broccoli",
         "restaurant": "Wok Master",
         "imgAddress": "https://natashaskitchen.com/wp-content/uploads/2019/08/Beef-and-Broccoli-2.jpg",
         "description": "Tender beef slices stir-fried with fresh broccoli in a savory sauce."
       },
       {
         "category": "beef",
         "name": "Beef Burrito",
         "restaurant": "Mexican Delight",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLIjuD8xnmXGf4PL-2SXCR6rB_XacNuLvgQ&s",
         "description": "A large flour tortilla filled with seasoned beef, rice, beans, and cheese."
       },
       {
         "category": "beef",
         "name": "Beef Wellington",
         "restaurant": "Elegant Eats",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkJPFzcA2gquBuxv9ETheC1AwbEnZjGvVc3g&s",
         "description": "A gourmet dish of beef tenderloin wrapped in puff pastry and baked to perfection."
       },
       {
         "category": "beef",
         "name": "Beef Enchiladas",
         "restaurant": "Cantina Mexicana",
         "imgAddress": "https://easyfamilyrecipes.com/wp-content/uploads/2023/08/Beef-Enchiladas-Recipe.jpg",
         "description": "Corn tortillas filled with seasoned beef, topped with enchilada sauce and melted cheese."
       },
       {
         "category": "beef",
         "name": "Beef Kebab",
         "restaurant": "Mediterranean Grill",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZe2UjnkNQ_ysCXdWLOKpcC3LPosva3e-IbA&s",
         "description": "Skewered and grilled beef cubes served with a side of tzatziki sauce."
       },
       {
         "category": "beef",
         "name": "Beef Ramen",
         "restaurant": "Ramen House",
         "imgAddress": "https://peaceloveandlowcarb.com/wp-content/uploads/2020/11/Beef-Ramen-Low-Carb-Peace-Love-and-Low-Carb-.jpg",
         "description": "Japanese noodle soup with tender beef slices, vegetables, and a savory broth."
       },
       {
         "category": "beef",
         "name": "Beef Sliders",
         "restaurant": "Mini Bites",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2EOHVZrgYVKpAw_ik-kfxvm9mjmWXd26niA&s",
         "description": "Mini beef burgers topped with cheese and pickles, served on small buns."
       },
       {
         "category": "beef",
         "name": "Beef Stew",
         "restaurant": "Home Comforts",
         "imgAddress": "https://www.skinnytaste.com/wp-content/uploads/2023/10/Beef-Stew-Recipe-10.jpg",
         "description": "Hearty stew with tender beef chunks, potatoes, carrots, and rich gravy."
       },
       {
         "category": "beef",
         "name": "Beef Gyro",
         "restaurant": "Greek Eats",
         "imgAddress": "https://www.mygreekdish.com/wp-content/uploads/2023/05/Beef-Gyro-souvlaki.jpeg",
         "description": "Seasoned beef wrapped in pita bread with tomatoes, onions, and tzatziki sauce."
       },
       {
         "category": "beef",
         "name": "Beef Pad Thai",
         "restaurant": "Thai Bistro",
         "imgAddress": "https://www.thaibistro.com/images/beef_pad_thai.jpg",
         "description": "Stir-fried rice noodles with beef, eggs, tofu, and peanuts in a tangy sauce."
       },
       {
         "category": "beef",
         "name": "Beef Fajitas",
         "restaurant": "Tex-Mex Grill",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqipf3El_teQlbYWpAVZXkWZKimZ2EZHvEJw&s",
         "description": "Sizzling beef strips with bell peppers and onions, served with warm tortillas."
       },
       {
         "category": "desserts",
         "name": "Chocolate Cake",
         "restaurant": "Sweet Tooth",
         "imgAddress": "https://cdn.sprinklebakes.com/media/2023/08/Death-By-Chocolate-Cake-2-500x500.jpg",
         "description": "A rich and moist chocolate cake topped with creamy chocolate frosting."
       },
       {
         "category": "desserts",
         "name": "Cheesecake",
         "restaurant": "Dessert Delight",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSGqt2B4PkFMlAyZwzMaqDsCALHUSf2HDWdA&s",
         "description": "A creamy cheesecake with a graham cracker crust and strawberry topping."
       },
       {
         "category": "desserts",
         "name": "Apple Pie",
         "restaurant": "Home Comforts",
         "imgAddress": "https://www.inspiredtaste.net/wp-content/uploads/2022/11/Apple-Pie-Recipe-Video.jpg",
         "description": "Classic apple pie with a flaky crust and a spiced apple filling."
       },
       {
         "category": "desserts",
         "name": "Tiramisu",
         "restaurant": "Italian Delights",
         "imgAddress": "https://bakeplaysmile.com/wp-content/uploads/2022/06/tiramisu-square-500x500.jpg",
         "description": "Traditional Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream."
       },
       {
         "category": "desserts",
         "name": "Brownie",
         "restaurant": "Chocolate Heaven",
         "imgAddress": "https://recipesblob.oetker.in/assets/0e7149831748458c9502e361e889f726/1272x764/brownie-with-vanilla-ice-cream.jpg",
         "description": "A rich and fudgy brownie topped with a layer of chocolate ganache."
       },
       {
         "category": "desserts",
         "name": "Ice Cream Sundae",
         "restaurant": "Sundae Shoppe",
         "imgAddress": "https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2022/08/Ice-cream-sundae-hero-11.jpg",
         "description": "Vanilla ice cream topped with hot fudge, whipped cream, and a cherry."
       },
       {
         "category": "desserts",
         "name": "Pavlova",
         "restaurant": "Sweet Sensations",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2rPxYgga97IKCLhBZ4Do0R8HgA2pBHxVgGw&s",
         "description": "A meringue-based dessert topped with whipped cream and fresh fruits."
       },
       {
         "category": "desserts",
         "name": "Lemon Tart",
         "restaurant": "French Patisserie",
         "imgAddress": "https://bakingamoment.com/wp-content/uploads/2023/03/IMG_1706-lemon-tart-720x720.jpg",
         "description": "A tangy lemon tart with a buttery crust and a smooth lemon filling."
       },
       {
         "category": "desserts",
         "name": "Carrot Cake",
         "restaurant": "Baker's Delight",
         "imgAddress": "https://butternutbakeryblog.com/wp-content/uploads/2019/04/carrot-cake-layers.jpg",
         "description": "A moist carrot cake with cream cheese frosting and a sprinkle of walnuts."
       },
       {
         "category": "desserts",
         "name": "Banoffee Pie",
         "restaurant": "Pie Heaven",
         "imgAddress": "https://www.allrecipes.com/thmb/pVexuFI-5Ww2XbIODbM0XA0DO_k=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/12625-Banoffee-pie-ddmfs-3x4-1770-a06db2a08ccc4f18835a1f9e2ceb280c.jpg",
         "description": "A delicious pie with layers of banana, toffee, and whipped cream."
       },
       {
         "category": "desserts",
         "name": "Profiteroles",
         "restaurant": "French Delights",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl39kWru44J5YZPgXQ8P7iKdgxNc8aSGvJBA&s",
         "description": "Cream-filled choux pastries topped with a rich chocolate sauce."
       },
       {
         "category": "desserts",
         "name": "Molten Lava Cake",
         "restaurant": "Chocolate Heaven",
         "imgAddress": "https://www.foodandwine.com/thmb/XdFd-DvTtouryLCjeCqwhfmmK-A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/molten-chocolate-cake-FT-RECIPE0220-0a33d7d0ab0c45588f7bfe742d33a9bc.jpg",
         "description": "A decadent chocolate cake with a gooey molten center."
       },
       {
         "category": "desserts",
         "name": "Strawberry Shortcake",
         "restaurant": "Berry Bliss",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdro8govsejIfzJgIdL3zBpgrRhAUYGJb6Uw&s",
         "description": "Layers of sponge cake, whipped cream, and fresh strawberries."
       },
       {
         "category": "desserts",
         "name": "Crème Brûlée",
         "restaurant": "French Patisserie",
         "imgAddress": "https://www.onceuponachef.com/images/2023/02/Creme-brulee-1.jpg",
         "description": "A creamy custard dessert topped with a layer of hard caramel."
       },
       {
         "category": "desserts",
         "name": "Macarons",
         "restaurant": "Macaron Magic",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bVq1SIgKMOeks4LzNEJ_HHhwkGrb-Y3rxg&s",
         "description": "Colorful French macarons with a variety of fillings."
       },
       {
         "category": "desserts",
         "name": "Panna Cotta",
         "restaurant": "Italian Delights",
         "imgAddress": "https://pescetarian.kitchen/wp-content/uploads/2017/01/IMG_1061.jpg",
         "description": "A creamy Italian dessert topped with a berry coulis."
       },
       {
         "category": "chicken",
         "name": "Chicken Alfredo",
         "restaurant": "Italian Bistro",
         "imgAddress": "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-above.jpg",
         "description": "Grilled chicken served over fettuccine pasta with a creamy Alfredo sauce."
       },
       {
         "category": "chicken",
         "name": "Chicken Tikka Masala",
         "restaurant": "Curry House",
         "imgAddress": "https://www.seriouseats.com/thmb/DbQHUK2yNCALBnZE-H1M2AKLkok=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-tikka-masala-for-the-grill-recipe-hero-2_1-cb493f49e30140efbffec162d5f2d1d7.JPG",
         "description": "Tender chicken pieces in a rich and creamy tomato sauce, served with rice."
       },
       {
         "category": "chicken",
         "name": "Chicken Caesar Salad",
         "restaurant": "Salad Stop",
         "imgAddress": "https://www.jessicagavin.com/wp-content/uploads/2022/06/chicken-caesar-salad-28-1200.jpg",
         "description": "Grilled chicken breast on a bed of romaine lettuce with Caesar dressing."
       },
       {
         "category": "chicken",
         "name": "BBQ Chicken Wings",
         "restaurant": "Wing Shack",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxOCD_aT3BQmGyYkUebbB5clO37Ak4tALuA&s",
         "description": "Juicy chicken wings coated in a tangy BBQ sauce."
       },
       {
         "category": "chicken",
         "name": "Chicken Quesadilla",
         "restaurant": "Mexican Delight",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xdYslga2lIvvLyGSWzl-_ykrAxI6dCZFHQ&s",
         "description": "A grilled tortilla filled with chicken, cheese, and peppers."
       },
       {
         "category": "chicken",
         "name": "Chicken Parmesan",
         "restaurant": "Italian Bistro",
         "imgAddress": "https://hips.hearstapps.com/hmg-prod/images/chicken-parmesan-index-644042afa49de.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*",
         "description": "Breaded chicken breast topped with marinara sauce and melted mozzarella."
       },
       {
         "category": "chicken",
         "name": "Chicken Fried Rice",
         "restaurant": "Wok Master",
         "imgAddress": "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/05/chicken-fried-rice.jpg",
         "description": "Stir-fried rice with chicken, vegetables, and soy sauce."
       },
       {
         "category": "chicken",
         "name": "Chicken Shawarma",
         "restaurant": "Mediterranean Grill",
         "imgAddress": "https://www.mediterraneangrill.com/images/chicken_shawarma.jpg",
         "description": "Spiced chicken served in a pita with lettuce, tomatoes, and garlic sauce."
       },
       {
         "category": "chicken",
         "name": "Chicken Pot Pie",
         "restaurant": "Home Comforts",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6kXsO6cjDbXrLEzUE9uTtODLC_XwIMj20FQ&s",
         "description": "A hearty pot pie filled with chicken, vegetables, and a creamy sauce."
       },
       {
         "category": "chicken",
         "name": "Chicken Satay",
         "restaurant": "Thai Bistro",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24Vhx-kLBK-NoNREpaEaYr1p5ZAK8jtjeQQ&s",
         "description": "Grilled chicken skewers served with a peanut dipping sauce."
       },
       {
         "category": "chicken",
         "name": "Chicken and Waffles",
         "restaurant": "Southern Comfort",
         "imgAddress": "https://s23209.pcdn.co/wp-content/uploads/2023/02/Honey-Fried-Chicken-and-Waffles_442.jpg",
         "description": "Crispy fried chicken served on top of fluffy waffles with maple syrup."
       },
       {
         "category": "chicken",
         "name": "Chicken Burrito",
         "restaurant": "Mexican Delight",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSGbisMUAc7OhBZWiIJypmjudDyJSZkvjSQ&s",
         "description": "A large flour tortilla filled with grilled chicken, rice, beans, and cheese."
       },
       {
         "category": "chicken",
         "name": "Chicken Biryani",
         "restaurant": "Spice Route",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP8l2kuZDANQExDsYteLg0NEUEjLkjudABRg&s",
         "description": "Aromatic basmati rice cooked with chicken and a blend of spices."
       },
       {
         "category": "chicken",
         "name": "Chicken Katsu",
         "restaurant": "Japanese Bistro",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsUKy3NBGeV5WOIIQmsrV4sgMUPvnLTN-whw&s",
         "description": "Breaded and fried chicken cutlets served with tonkatsu sauce."
       },
       {
         "category": "chicken",
         "name": "Chicken Fajitas",
         "restaurant": "Tex-Mex Grill",
         "imgAddress": "https://www.tasteofhome.com/wp-content/uploads/2018/01/Flavorful-Chicken-Fajitas_EXPS_CIW19_12540_B08_30_6b.jpg",
         "description": "Sizzling chicken strips with bell peppers and onions, served with warm tortillas."
       },
       {
         "category": "chicken",
         "name": "Chicken Soup",
         "restaurant": "Soup Kitchen",
         "imgAddress": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSiBhzLqtvY3W_qll7iuIDlFt2QbUQux9tbA&s",
         "description": "A warm and comforting soup with chicken, noodles, and vegetables."
       },
        {
         "category": "seafood",
         "name": "Grilled Salmon",
         "restaurant": "Ocean Grill",
         "imgAddress": "https://tse1.mm.bing.net/th?id=OIP.fheAIiZm-ASUtmFZ8_AyDgAAAA&pid=Api&P=0&h=180",
         "description": "Perfectly grilled salmon fillet with a lemon dill sauce."
       },
       {
         "category": "seafood",
         "name": "Shrimp Scampi",
         "restaurant": "Seafood Haven",
         "imgAddress": "https://tse2.mm.bing.net/th?id=OIP.fZd3RIhJSCDnmGMdgvZIHgHaLH&pid=Api&P=0&h=180",
         "description": "Shrimp sautéed in garlic butter and white wine, served over pasta."
       },
       {
         "category": "seafood",
         "name": "Clam Chowder",
         "restaurant": "Coastal Eats",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.nfAwI5JdZuX0lqNxSJgoOgHaLH&pid=Api&P=0&h=180",
         "description": "A creamy soup with tender clams, potatoes, and celery."
       },
       {
         "category": "seafood",
         "name": "Lobster Roll",
         "restaurant": "New England Diner",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.xpsk3anqlGFOzFCPKeuImQAAAA&pid=Api&P=0&h=180",
         "description": "Fresh lobster meat in a buttered roll with a touch of mayo and celery."
       },
       {
         "category": "seafood",
         "name": "Fish Tacos",
         "restaurant": "Taco Shack",
         "imgAddress": "https://tse2.mm.bing.net/th?id=OIP.atiy1TSKvmMgs892KzR_HgHaLH&pid=Api&P=0&h=180",
         "description": "Soft tortillas filled with crispy fried fish, cabbage, and a tangy sauce."
       },
       {
         "category": "seafood",
         "name": "Paella",
         "restaurant": "Spanish Feast",
         "imgAddress": "https://tse4.mm.bing.net/th?id=OIP.6ZsA9w-_1_OJ9E0tOHR_3wHaHa&pid=Api&P=0&h=180",
         "description": "A Spanish rice dish with a mix of seafood, chicken, and vegetables."
       },
       {
         "category": "seafood",
         "name": "Crab Cakes",
         "restaurant": "Crab House",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.Uj25eoWN4tE6U4wpPihTOwHaLJ&pid=Api&P=0&h=180",
         "description": "Delicious crab cakes with a crispy exterior and tender interior."
       },
       {
         "category": "seafood",
         "name": "Mussels in White Wine Sauce",
         "restaurant": "Seafood Bistro",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.n4owL7m9r1hMU4zQR5E4rgHaHa&pid=Api&P=0&h=180",
         "description": "Steamed mussels in a savory white wine and garlic sauce."
       },
       {
         "category": "seafood",
         "name": "Sushi Rolls",
         "restaurant": "Sushi Spot",
         "imgAddress": "https://tse1.mm.bing.net/th?id=OIP.UdrvVsY_bSIBmD07UAsTngHaE6&pid=Api&P=0&h=180",
         "description": "A variety of sushi rolls with fresh fish and vegetables."
       },
       {
         "category": "seafood",
         "name": "Seafood Paella",
         "restaurant": "Mediterranean Eats",
         "imgAddress": "https://tse4.mm.bing.net/th?id=OIP.twn7kaRR5DN4CVC1Jvy-twHaE8&pid=Api&P=0&h=180",
         "description": "A flavorful rice dish with an assortment of seafood and spices."
       },
       {
         "category": "seafood",
         "name": "Crispy Calamari",
         "restaurant": "Seafood Delight",
         "imgAddress": "https://tse1.mm.bing.net/th?id=OIP.dO8EqGiZ0T038KBJ7zgTrAHaFU&pid=Api&P=0&h=180",
         "description": "Fried calamari served with a side of marinara sauce."
       },
       {
         "category": "seafood",
         "name": "Oysters on the Half Shell",
         "restaurant": "Shuckers",
         "imgAddress": "https://tse4.mm.bing.net/th?id=OIP.xa6vvSINtrpiBwccYA9nWgHaGy&pid=Api&P=0&h=180",
         "description": "Fresh oysters served on ice with lemon and cocktail sauce."
       },
       {
         "category": "seafood",
         "name": "Tuna Tartare",
         "restaurant": "Sushi Lounge",
         "imgAddress": "https://tse2.mm.bing.net/th?id=OIP.dxF8dzqVtwd_UuMChAfQ_QHaHa&pid=Api&P=0&h=180",
         "description": "Diced fresh tuna mixed with avocado, soy sauce, and sesame seeds."
       },
       {
         "category": "seafood",
         "name": "Scallops with Garlic Butter",
         "restaurant": "Seafood Grill",
         "imgAddress": "https://tse1.mm.bing.net/th?id=OIP.pOIEjMJKUrwISehuAgUJuQHaHa&pid=Api&P=0&h=180",
         "description": "Pan-seared scallops in a rich garlic butter sauce."
       },
       {
         "category": "seafood",
         "name": "Grilled Octopus",
         "restaurant": "Mediterranean Grill",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.vtoTlXIC0Mtv1HJbUrw3GAHaE8&pid=Api&P=0&h=180",
         "description": "Tender octopus grilled and served with a lemon and herb marinade."
       },
       {
         "category": "seafood",
         "name": "Baked Cod",
         "restaurant": "Fisherman's Wharf",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.EXBs645eV1A_KD_DYDZBlwHaFp&pid=Api&P=0&h=180",
         "description": "Cod fillet baked with a buttery breadcrumb topping."
       },
       {
         "category": "seafood",
         "name": "Seafood Chowder",
         "restaurant": "Chowder House",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.OCsNb7p8TWY7bkkG-YLafAHaE8&pid=Api&P=0&h=180",
         "description": "A creamy chowder loaded with various seafood and vegetables."
       },
       {
         "category": "seafood",
         "name": "Grilled Salmon",
         "restaurant": "Ocean Grill",
         "imgAddress": "https://tse1.mm.bing.net/th?id=OIP.fheAIiZm-ASUtmFZ8_AyDgAAAA&pid=Api&P=0&h=180",
         "description": "Perfectly grilled salmon fillet with a lemon dill sauce."
       },
       {
         "category": "seafood",
         "name": "Shrimp Scampi",
         "restaurant": "Seafood Haven",
         "imgAddress": "https://tse2.mm.bing.net/th?id=OIP.fZd3RIhJSCDnmGMdgvZIHgHaLH&pid=Api&P=0&h=180",
         "description": "Shrimp sautéed in garlic butter and white wine, served over pasta."
       },
       {
         "category": "seafood",
         "name": "Clam Chowder",
         "restaurant": "Coastal Eats",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.nfAwI5JdZuX0lqNxSJgoOgHaLH&pid=Api&P=0&h=180",
         "description": "A creamy soup with tender clams, potatoes, and celery."
       },
       {
         "category": "seafood",
         "name": "Lobster Roll",
         "restaurant": "New England Diner",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.xpsk3anqlGFOzFCPKeuImQAAAA&pid=Api&P=0&h=180",
         "description": "Fresh lobster meat in a buttered roll with a touch of mayo and celery."
       },
       {
         "category": "seafood",
         "name": "Fish Tacos",
         "restaurant": "Taco Shack",
         "imgAddress": "https://tse2.mm.bing.net/th?id=OIP.atiy1TSKvmMgs892KzR_HgHaLH&pid=Api&P=0&h=180",
         "description": "Soft tortillas filled with crispy fried fish, cabbage, and a tangy sauce."
       },
       {
         "category": "seafood",
         "name": "Paella",
         "restaurant": "Spanish Feast",
         "imgAddress": "https://tse4.mm.bing.net/th?id=OIP.6ZsA9w-_1_OJ9E0tOHR_3wHaHa&pid=Api&P=0&h=180",
         "description": "A Spanish rice dish with a mix of seafood, chicken, and vegetables."
       },
       {
         "category": "seafood",
         "name": "Crab Cakes",
         "restaurant": "Crab House",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.Uj25eoWN4tE6U4wpPihTOwHaLJ&pid=Api&P=0&h=180",
         "description": "Delicious crab cakes with a crispy exterior and tender interior."
       },
       {
         "category": "seafood",
         "name": "Mussels in White Wine Sauce",
         "restaurant": "Seafood Bistro",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.n4owL7m9r1hMU4zQR5E4rgHaHa&pid=Api&P=0&h=180",
         "description": "Steamed mussels in a savory white wine and garlic sauce."
       },
       {
         "category": "seafood",
         "name": "Sushi Rolls",
         "restaurant": "Sushi Spot",
         "imgAddress": "https://tse1.mm.bing.net/th?id=OIP.UdrvVsY_bSIBmD07UAsTngHaE6&pid=Api&P=0&h=180",
         "description": "A variety of sushi rolls with fresh fish and vegetables."
       },
       {
         "category": "seafood",
         "name": "Seafood Paella",
         "restaurant": "Mediterranean Eats",
         "imgAddress": "https://tse4.mm.bing.net/th?id=OIP.twn7kaRR5DN4CVC1Jvy-twHaE8&pid=Api&P=0&h=180",
         "description": "A flavorful rice dish with an assortment of seafood and spices."
       },
       {
         "category": "seafood",
         "name": "Crispy Calamari",
         "restaurant": "Seafood Delight",
         "imgAddress": "https://tse1.mm.bing.net/th?id=OIP.dO8EqGiZ0T038KBJ7zgTrAHaFU&pid=Api&P=0&h=180",
         "description": "Fried calamari served with a side of marinara sauce."
       },
       {
         "category": "seafood",
         "name": "Oysters on the Half Shell",
         "restaurant": "Shuckers",
         "imgAddress": "https://tse4.mm.bing.net/th?id=OIP.xa6vvSINtrpiBwccYA9nWgHaGy&pid=Api&P=0&h=180",
         "description": "Fresh oysters served on ice with lemon and cocktail sauce."
       },
       {
         "category": "seafood",
         "name": "Tuna Tartare",
         "restaurant": "Sushi Lounge",
         "imgAddress": "https://tse2.mm.bing.net/th?id=OIP.dxF8dzqVtwd_UuMChAfQ_QHaHa&pid=Api&P=0&h=180",
         "description": "Diced fresh tuna mixed with avocado, soy sauce, and sesame seeds."
       },
       {
         "category": "seafood",
         "name": "Scallops with Garlic Butter",
         "restaurant": "Seafood Grill",
         "imgAddress": "https://tse1.mm.bing.net/th?id=OIP.pOIEjMJKUrwISehuAgUJuQHaHa&pid=Api&P=0&h=180",
         "description": "Pan-seared scallops in a rich garlic butter sauce."
       },
       {
         "category": "seafood",
         "name": "Grilled Octopus",
         "restaurant": "Mediterranean Grill",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.vtoTlXIC0Mtv1HJbUrw3GAHaE8&pid=Api&P=0&h=180",
         "description": "Tender octopus grilled and served with a lemon and herb marinade."
       },
       {
         "category": "seafood",
         "name": "Baked Cod",
         "restaurant": "Fisherman's Wharf",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.EXBs645eV1A_KD_DYDZBlwHaFp&pid=Api&P=0&h=180",
         "description": "Cod fillet baked with a buttery breadcrumb topping."
       },
       {
         "category": "seafood",
         "name": "Seafood Chowder",
         "restaurant": "Chowder House",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.OCsNb7p8TWY7bkkG-YLafAHaE8&pid=Api&P=0&h=180",
         "description": "A creamy chowder loaded with various seafood and vegetables."
       },
       {
         "category": "pasta",
         "name": "Spaghetti Carbonara",
         "restaurant": "Italian Bistro",
         "imgAddress": "https://tse2.mm.bing.net/th?id=OIP.Jn-IYjic04dUHSd6p3AdbQHaLR&pid=Api&P=0&h=180",
         "description": "Classic Italian pasta with pancetta, egg, and Parmesan cheese in a creamy sauce."
       },
       {
         "category": "pasta",
         "name": "Fettuccine Alfredo",
         "restaurant": "Pasta Palace",
         "imgAddress": "https://tse1.mm.bing.net/th?id=OIP.LGs2XyxVrqOuTohMA7xjmwHaIj&pid=Api&P=0&h=180",
         "description": "Fettuccine pasta tossed in a rich and creamy Alfredo sauce with Parmesan cheese."
       },
       {
         "category": "pasta",
         "name": "Penne Arrabbiata",
         "restaurant": "Spicy Noodles",
         "imgAddress": "https://tse4.mm.bing.net/th?id=OIP.g8QZFp8UpG8SZOkwlUR73gHaJf&pid=Api&P=0&h=180",
         "description": "Penne pasta in a spicy tomato sauce with garlic and red chili flakes."
       },
       {
         "category": "pasta",
         "name": "Lasagna",
         "restaurant": "Comfort Cuisine",
         "imgAddress": "https://tse2.mm.bing.net/th?id=OIP.tF6Nw6HqUZYTImczmUTYLAHaE8&pid=Api&P=0&h=180",
         "description": "Layers of pasta, meat sauce, and cheese baked to perfection."
       },
       {
         "category": "pasta",
         "name": "Pesto Pasta",
         "restaurant": "Herb Garden",
         "imgAddress": "https://tse4.mm.bing.net/th?id=OIP.V0AkcelpRfe946FALGr7oAHaLG&pid=Api&P=0&h=180",
         "description": "Pasta tossed in a fragrant basil pesto sauce with pine nuts and Parmesan cheese."
       },
       {
         "category": "pasta",
         "name": "Seafood Linguine",
         "restaurant": "Ocean's Catch",
         "imgAddress": "https://tse1.mm.bing.net/th?id=OIP.eznte5nB4vzzvAeTxCGTawHaEo&pid=Api&P=0&h=180",
         "description": "Linguine pasta with a medley of seafood in a light tomato and white wine sauce."
       },
       {
         "category": "pasta",
         "name": "Baked Ziti",
         "restaurant": "Italian Delights",
         "imgAddress": "https://tse2.mm.bing.net/th?id=OIP.hNgKr4LDVBdjehXfed33FQAAAA&pid=Api&P=0&h=180",
         "description": "Ziti pasta baked with marinara sauce, ricotta, and mozzarella cheese."
       },
       {
         "category": "pasta",
         "name": "Ravioli",
         "restaurant": "Pasta Perfection",
         "imgAddress": "https://tse4.mm.bing.net/th?id=OIP.FFc3hMpMdoUsJTgUnoJI3wHaHa&pid=Api&P=0&h=180",
         "description": "Homemade ravioli stuffed with cheese or meat and served with marinara sauce."
       },
       {
         "category": "pasta",
         "name": "Macaroni and Cheese",
         "restaurant": "Comfort Eats",
         "imgAddress": "https://tse4.mm.bing.net/th?id=OIP.TRKuAA8Nt1iBs76N6HDM-AHaE8&pid=Api&P=0&h=180",
         "description": "Creamy macaroni pasta baked with a cheesy sauce."
       },
       {
         "category": "pasta",
         "name": "Pappardelle with Mushroom Sauce",
         "restaurant": "Gourmet Kitchen",
         "imgAddress": "https://tse1.mm.bing.net/th?id=OIP.JzXB9NoM4DLhx8n-75UnEgHaGa&pid=Api&P=0&h=180",
         "description": "Wide pappardelle noodles in a rich mushroom and cream sauce."
       },
       {
         "category": "pasta",
         "name": "Tortellini in Brodo",
         "restaurant": "Classic Italian",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.SHBfdk_bk_AKLQGP9R6jdAHaEK&pid=Api&P=0&h=180",
         "description": "Tortellini pasta served in a savory broth with vegetables."
       },
       {
         "category": "pasta",
         "name": "Farfalle with Tomato Basil Sauce",
         "restaurant": "Tomato Garden",
         "imgAddress": "https://tse2.mm.bing.net/th?id=OIP.CNnqyq256neECHMFtpzIhQHaE8&pid=Api&P=0&h=180",
         "description": "Bow-tie pasta in a fresh tomato and basil sauce."
       },
       {
         "category": "pasta",
         "name": "Tagliatelle Bolognese",
         "restaurant": "Meat Lovers",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.1n3nmKqgo-2OtQD5F0T5eQHaHa&pid=Api&P=0&h=180",
         "description": "Tagliatelle pasta served with a rich, slow-cooked meat sauce."
       },
       {
         "category": "pasta",
         "name": "Ziti alla Vodka",
         "restaurant": "Pasta Delight",
         "imgAddress": "https://tse1.mm.bing.net/th?id=OIP.fpuYRRtJf7ARFg5fD45ihgHaGs&pid=Api&P=0&h=180",
         "description": "Ziti pasta in a creamy tomato and vodka sauce."
       },
       {
         "category": "pasta",
         "name": "Penne alla Vodka",
         "restaurant": "The Pasta Bar",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.CupxXAcyliheeAx5OaQxKQHaJ4&pid=Api&P=0&h=180",
         "description": "Penne pasta in a rich vodka tomato sauce with a touch of cream."
       },
       {
         "category": "pasta",
         "name": "Gnocchi with Sage Butter",
         "restaurant": "Italian Trattoria",
         "imgAddress": "https://tse3.mm.bing.net/th?id=OIP.O9rvXbNwri8QyL3RC_7DJwHaEK&pid=Api&P=0&h=180",
         "description": "Potato gnocchi tossed in a simple and fragrant sage butter sauce."
       }
   
     ]
   }
   const handleCategoryClick = (category) => {
    console.log('in handleCategoryClick');
       const filtered = items.foodItems.filter((item)=>item.category===category);
       setFilteredItems(filtered);
      };
  
  
  async function addtocart(item) {
    try {
       console.log('hi')
      // console.log(item)
    //  console.log(re);
      if(item.count===undefined){
        item.count=1;
        let res = await fetch(`http://localhost:4000/user-api/carts-add/${user}`,{
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(item),
        });
        let data = await res.json();
         let re = data.payload;
         console.log('add-cart',re);
          setcartitems(re);
      }
      else{
        item.count=item.count+1;
        let res = await fetch(`http://localhost:4000/user-api/carts-add/${user}`,{
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(item),
        });
        let data = await res.json();
        setcartitems(data.payload);
      }
   } catch (err) {
      console.log("err is ", err);
    }
  }

  async function removefromcart(item) {
    item.count=item.count-1;
    try {
      let res = await fetch(`http://localhost:4000/user-api/carts-remove/${user}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(item),
      });
  
      // Check if the response status is OK
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      let data = await res.json();
      setcartitems(data.payload);
      console.log("in cart - ", data);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }
  
  return (
    <MyContext.Provider value={{items,filteredItems, setFilteredItems, handleCategoryClick,user,setuser,loginstatus,setloginstatus, setcartitems,state, setstate, cartitems, removefromcart,address,setaddress,addUser,addtocart}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };




   
