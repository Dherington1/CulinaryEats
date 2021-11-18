const { Post } = require("../models");

const postdata = [
  {
    title: "Gnocchi",
    description: "Home made Gnocchi, for you and your family to love.",
    ingredients: "Ingredients: 1-1/2 lbs. boiling potatoes (Yukon gold recommended), 1-1/2 cp. Flour, Extra flour as needed for rolling, Salt (to taste)",
    instructions: `
    1. Place the unpeeled potatoes in a large pot. Fill the pot with enough cold water to cover the potatoes by at least 2 inches. Bring to a simmer
    over medium-high heat. Reduce the heat to medium, partially cover the pot, and simmer the potatoes until they are completely tender and easily pierced with a fork, about 30 to 35 mins.
    2. Drain the potatoes and let them cool just enough that you can handle them. Gently peel the potatoes. Cut them in half crosswise and pass them through a ricer. You can mash them as ,
    you would normally do for mashed potatoes, but a ricer is more effective at creating a smooth mash. Let cool until almost at room temperature, at least 20 mins.
    3. Lightly flour your work surface. In a medium bowl, combine the flour, salt, and potatoes mash. Using your heads, combine all the ingredients until a dough is formed. Press the dough into
    the bowl until you have a unified mass.`,
    category: "italian",
    
  },
  {
    title: "Cottage Pie",
    description: 'An old family pie recipe, great for gatherings',
    ingredients: "24 oz Yukon gold potatoes,6 oz carrot, 5 oz celery, 1 yellow onion,¼ oz thyme, 4 tbsp. sour cream, 2 tsp. garlic powder, 3 oz tomato paste, 20 oz Ground Beef, 2 tbsp. Flour, 8 tbsp of concentrated beef stock, 1 cp white cheddar cheese,salt to taste, black pepper to taste,1 tbsp. cooking oil, 3 tbsp. butter.",
    instructions: " 1. Heat broiler to high. Wash and dry produce. 2. Dice potatoes into ¼ inch pieces. 3. Strip the thyme leaves from their stems. 4. Trim, peel and halve carrots lengthwise. Slice crosswise into ¼ inch thick half-moons. 5. Finely dice celery. 6. Halve, peel, and finely chop onion. 7. Place potatoes in a medium pot with enough salted water to cover the potatoes by 2 inches. Bring the water to a boil and cook until tender, about 15-20 minutes. 8. Drain and return potatoes to pot. Add in the sour cream, butter, and 1 tsp. of the thyme leaves into the pot. Mash all the ingredients together until smooth and creamy, adding splashes of water as needed. Season generously with salt and pepper. Keep covered and off the stove until ready to server. 9. Heat a drizzle of oil in an oven proofed large sized pan over medium-high heat. ",
    category: "italian",
  },
  {
    title: "Nachos",
    description: "black bean and corn nachos",
    ingredients: `Heat half the oil in a large frypan over high heat. Add corn kernels and cook, stirring occasionally, for 6 minutes or until golden. Set aside until needed.
    2.Add remaining 1 tbs oil to pan. Add onion and capsicum, and cook, stirring occasionally, for 5 minutes or until softened. Add garlic, spices, coriander stalks, chipotle chillies and bay leaf, and cook, stirring occasionally, for 2 minutes or until fragrant. Add tomatoes and cook, breaking up with a wooden spoon, for 1 minute or until heated through. Stir through black beans and stock, bring to a simmer and cook, stirring occasionally, for 30 minutes or until thickened and reduced. Stir through corn kernels.
    3.Preheat the oven to 180°C.
    4.Spread corn chips over a baking tray and spoon over bean mixture. Sprinkle over cheese. Bake for 15 minutes or until cheese is golden and bubbling. Turn off oven, leaving tray in oven to keep nachos warm and melty until ready to serve.
    5.Meanwhile, toss avocado and lime juice in a bowl with 1/2 tsp salt flakes.`,
    instructions: "Remove nachos from oven and scatter over chilli. Spoon over creme fraiche, top with coriander leaves and serve with lime wedges, Tabasco, if using, and avocado mixture alongside.",
    category: "mexican"
   
  },
  {
    title: "Easy Chicken Flautas",
    description: `Rolled tacos; these are the best. I learned how to make them and my husband loved them.`,
    ingredients: `¼ cup butter

    ¼ cup all-purpose flour
    
    ¼ cup minced onion
    
    ¼ cup chopped black olives
    
    2 tablespoons lemon juice
    
    1 tablespoon oil
    
    ¼ teaspoon ground paprika
    
    ⅛ teaspoon ground black pepper
    
    ⅛ teaspoon salt
    
    1 ½ cups cooked shredded chicken
    
    8 flour tortillas
    
    oil for frying, or as needed
    
    toothpicks`,
    instructions: `Melt butter in a skillet over medium heat; stir flour into butter until smooth. Add onion to flour-butter mixture; cook and stir until onion is softened, 5 to 10 minutes. Mix black olives, lemon juice, oil, paprika, black pepper, and salt into onion mixture; cook and stir until heated through, about 2 minutes. Stir chicken into mixture and remove skillet from heat and cover.

    Step 2
    Heat oil in a large, heavy saucepan or deep-fryer.
    
    Step 3
    Fill tortillas with chicken mixture. Roll tortilla around filling and secure with a toothpick.
    
    Step 4
    Fry the rolled tortillas, working in batches, in the hot oil until browned, about 2 minutes. Transfer fried tortillas to a paper towel-lined plate using a slotted spoon or tongs.`,
    category: "mexican"
  },
  {
    title: "Pork Dumplings",
    description: 'These tasty treats make a perfect appetizer or you can serve them as a main dish. For a main dish count on about 15 dumplings per person. Serve with hoisin sauce, hot Chinese-style mustard and toasted sesame seeds.',
    ingredients: `100 (3.5 inch square) wonton wrappers

    1 ¾ pounds ground pork,
    
    1 tablespoon minced fresh ginger root,
    
    4 cloves garlic, minced,
    
    2 tablespoons thinly sliced green onion,
    
    4 tablespoons soy sauce,
    
    3 tablespoons sesame oil,
    
    1 egg, beaten,
    
    5 cups finely shredded Chinese cabbage`,
    instructions: `
    Step 1
    In a large bowl, combine the pork, ginger, garlic, green onion, soy sauce, sesame oil, egg and cabbage. Stir until well mixed.

    Step 2
    Place 1 heaping teaspoon of pork filling onto each wonton skin. Moisten edges with water and fold edges over to form a triangle shape. Roll edges slightly to seal in filling. Set dumplings aside on a lightly floured surface until ready to cook.

    Step 3
    To Cook: Steam dumplings in a covered bamboo or metal steamer for about 15 to 20 minutes. Serve immediately.`,
    category: "chinese",
  },
  {
    title: 'Sweet and Sour Chicken ',
    description: `Pan fried chicken cubes served with a sweet and sour sauce.`,
    ingredients: `1 (8 ounce) can pineapple chunks, drained (juice reserved)

    ¼ cup cornstarch,
    
    1 ¾ cups water, divided,
    
    ¾ cup white sugar,
    
    ½ cup distilled white vinegar,
    
    2 drops orange food color,
    
    8 skinless, boneless chicken breast halves - cut into 1 inch cubes,
    
    2 ¼ cups self-rising flour,
    
    2 tablespoons vegetable oil,
    
    2 tablespoons cornstarch,
    
    ½ teaspoon salt
    `,
    instructions: `In a saucepan, combine 1 1/2 cups water, sugar, vinegar, reserved pineapple juice, and orange food coloring. Heat to boiling. Turn off heat. Combine 1/4 cup cornstarch and 1/4 cup water; slowly stir into saucepan. Continue stirring until mixture thickens.

    Step 2
    Combine flour, 2 tablespoons oil, 2 tablespoons cornstarch, salt, white pepper, and egg. Add 1 1/2 cups water gradually to make a thick batter. Stir to blend thoroughly. Add chicken pieces, and stir until chicken is well coated.
    
    Step 3
    Heat oil in skillet or wok to 360 degrees F (180 degrees C). Fry chicken pieces in hot oil 10 minutes, or until golden. Remove chicken, and drain on paper towels.
    
    Step 4
    When ready to serve, layer green peppers, pineapple chunks, and cooked chicken pieces on a platter. Pour hot sweet and sour sauce over top.`,
    category: "chinese"
  },
  {
    title: "Texas-Style Beef Brisket",
    description: "A friend had success with this recipe, so I tried it. When my husband told me how much he loved it, I knew I'd be making it often.&mdash;Vivian Warner, Elkhart, Kansas",
    ingredients: `3 tablespoons Worcestershire sauce
    1 tablespoon chili powder,
    2 garlic cloves, minced,
    1 teaspoon celery salt,
    1 teaspoon pepper,
    1 teaspoon liquid smoke, optional,
    1 fresh beef brisket (6 pounds),
    1/2 cup beef broth,
    2 bay leaves,
    barbecue sauce:
    1 medium onion, chopped
    2 tablespoons canola oil
    2 garlic cloves, minced
    1 cup ketchup,
    1/2 cup molasses,
    1/4 cup cider vinegar,
    2 teaspoons chili powder,
    1/2 teaspoon ground mustard`,
    instructions: `In a large bowl or shallow dish, combine the Worcestershire sauce, chili powder, bay leaves, garlic, celery salt, pepper and, if desired, liquid smoke. Cut brisket in half; add to bowl and turn to coat. Cover and refrigerate overnight.
    Transfer beef to a 5- or 6-qt. slow cooker; add broth and bay leaves. Cover and cook on low for 6-8 hours or until tender.
    For sauce, in a small saucepan, saute onion in oil until tender. Add garlic; cook 1 minute longer. Stir in the remaining ingredients; heat through.
    Remove brisket from the slow cooker; discard bay leaves. Place 1 cup cooking juices in a measuring cup; skim fat. Add to the barbecue sauce. Discard remaining juices.
    Return brisket to the slow cooker; top with sauce mixture. Cover and cook on high for 30 minutes to allow flavors to blend. Thinly slice beef across the grain; serve with sauce.
    Freeze option: Place individual portions of sliced brisket in freezer containers; top with barbecue sauce. Cool and freeze. To use, partially thaw in refrigerator overnight. Heat through in a covered saucepan, gently stirring and adding a little water if necessary.`,
    category: "american"
  },
  {
    title: "All-American Banana Split",
    description: "In 1904, the first banana split recipe was made here in Latrobe, Pennsylvania by David Strickler, an apprentice pharmacist at a local drug store. We still use his original formula when we make banana splits in our restaurants.",
    ingredients: `1 medium banana, peeled and split lengthwise,
    1 scoop each vanilla, chocolate and strawberry ice cream,
    2 tablespoons sliced fresh strawberries or 1 tablespoon strawberry ice cream topping,
    2 tablespoons pineapple chunks or 1 tablespoon pineapple ice cream topping,
    2 tablespoons whipped cream,
    1 tablespoon chopped peanuts,
    1 tablespoon chocolate syrup,
    2 maraschino cherries with stems`,
    instructions: "Place banana in a dessert dish; place scoops of ice cream between banana. Top with remaining ingredients. Serve immediately.",
    category: "american"
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
