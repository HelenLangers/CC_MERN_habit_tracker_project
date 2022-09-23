use habit_entries;
db.dropDatabase();

db.entries.insertMany([
    {
        recipeName: "Pasta Bolognese",
        date: "Thursday 22nd September",
        notes: "Absolutely delicious, 10/10 would cook again",
    },
    {
        recipeName: "Macaroni Cheese",
        date: "Wednesday 21st September",
        notes: "Nice notes",
    },
    {
        recipeName: "Fish Tacos",
        date: "Tuesday 20th September",
        notes: "Fiiiiiiish, something fishy about this meal",
    },
    {
        recipeName: "Chicken Teriyaki",
        date: "Sunday 18th September",
        notes: "Yum",
    },
    {
        recipeName: "Omelette du fromage",
        date: "Saturday 17th September",
        notes: "That's all you can say",
    },
    {
        recipeName: "Cheese and egg stir fry",
        date: "Wednesday 15th October",
        notes: "Mmmmm comfort food",
    },
    {
        recipeName: "Glasgow Salad",
        date: "Monday 15th November",
        notes: "Chips..... on the side",
    }
]);

db.recipes.insertMany([
    {
        name: "Pasta Bolognese",
        ingredients: "a few ingredients here for pasta bolognese"
    },
    {
        name: "Macaroni Cheese",
        ingredients: "a few ingredients here for macaroni cheese"
    },
    {
        name: "Fish Tacos",
        ingredients: "a few ingredients here for fish tacos"
    },
    {
        name: "Chicken Teriyaki",
        ingredients: "a few ingredients here for chicken teriyaki"
    },
    {
        name: "Omelette du fromage",
        ingredients: "a few ingredients here for a cheese omelette"
    },
    {
        name: "Cheese and Egg stirfry",
        ingredients: "a few ingredients here for cheese and egg stirfry"
    },
]);