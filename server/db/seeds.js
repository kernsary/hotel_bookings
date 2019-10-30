use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Charles",
    email: "charles@gmail.com",
    checkedIn: true
  },
  {
    name: "Ross",
    email: "ross@gmail.com",
    checkedIn: false
  },
  {
    name: "Louise",
    email: "louise@gmail.com",
    checkedIn: true
  }
]);
