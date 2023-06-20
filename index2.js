var users = [
    { name: "John", gender: "male", age: 25 },
    { name: "Sierra", gender: "female", age: 30 },
    { name: "Harry", gender: "other", age: 35 },
    { name: "Samuel", gender: "male", age: 40 },
];
function getUsersByGender(users, gender) {
    return users.filter(function (user) { return user.gender === gender; });
}
var Users = getUsersByGender(users, "male");
console.log(Users);
