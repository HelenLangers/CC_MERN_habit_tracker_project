use habit_entries;
db.dropDatabase();

db.entries.insertMany([
    {
        recipeName: "Pasta Bolognese",
        date: "2022-09-24",
        notes: "Absolutely delicious, 10/10 would cook again",
    },
    {
        recipeName: "Macaroni Cheese",
        date: "2022-09-24",
        notes: "Nice notes",
    },
    {
        recipeName: "Fish Tacos",
        date: "2022-09-21",
        notes: "Fiiiiiiish, something fishy about this meal",
    },
    {
        recipeName: "Chicken Teriyaki",
        date: "2022-09-19",
        notes: "Yum",
    },
    {
        recipeName: "Omelette du fromage",
        date: "2022-09-23",
        notes: "That's all you can say",
    },
    {
        recipeName: "Tomato and egg stir fry",
        date: "2022-09-25",
        notes: "Mmmmm comfort food",
    },
    {
        recipeName: "Glasgow Salad",
        date: "2022-09-20",
        notes: "Chips..... on the side",
    }
]);