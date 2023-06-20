interface Hello {
  name: string;
  gender: "male" | "female" | "other";
  age: number;
}

const users: Hello[] = [
  { name: "John", gender: "male", age: 25 },
  { name: "Sierra", gender: "female", age: 30 },
  { name: "Harry", gender: "other", age: 35 },
  { name: "Samuel", gender: "male", age: 40 },
];

function getUsersByGender(
  users: Hello[],
  gender: "male" | "female" | "other"
): Hello[] {
  return users.filter((user) => user.gender === gender);
}

const Users = getUsersByGender(users, "male");
console.log(Users);
