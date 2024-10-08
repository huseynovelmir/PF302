let students = [
  {
    id: 1,
    name: "Elmir",
    surname: "Hüseynov",
    age: 22,
    hobbies: ["Hiking", "İce skating", "Tennis", "Karting"],
    student: false,
    teacher: [
      { id: 1, name: "Qurban" },
      { id: 2, name: "Həcər" },
      { id: 3, name: "Murad" },
      { id: 4, name: "Fikrət" },
    ],
    github: { username: "huseynovelmir", password: "elmir123" },
    gender: "male",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 80,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Leyla",
    surname: "Ahmadzada",
    age: 24,
    hobbies: ["Hiking", "Painting", "Volleyball", "Gaming"],
    student: false,
    teacher: [
      { id: 1, name: "Süleyman" },
      { id: 2, name: "Həcər" },
    ],
    github: { username: "unervesecod", password: "uNi214" },
    gender: "female",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 98,
    salaryAZN: 18000,
  },
  {
    id: 3,
    name: "Ignat",
    surname: "Kelbiyev",
    age: 18,
    hobbies: ["Football", "Workout"],
    student: true,
    teacher: [
      { id: 1, name: "Süleyman" },
      { id: 2, name: "Həcər" },
      { id: 3, name: "Teymur" },
    ],
    github: { username: "ignattk", password: "ignat123" },
    gender: "male",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 93,
    salaryAZN: 1,
  },
  {
    id: 4,
    name: "Hasanali",
    surname: "Asadov",
    age: 20,
    hobbies: ["Coding", "Painting", "Volleyball", "Gaming"],
    student: true,
    teacher: [
      { id: 1, name: "Süleyman" },
      { id: 2, name: "Həcər" },
      { id: 3, name: "Fatime" },
      { id: 4, name: "Lana" },
    ],
    github: { username: "hasanasadov", password: "password" },
    gender: "malw",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85,
    salaryAZN: 0,
  },
  {
    id: 5,
    name: "Nureddin",
    surname: "Rzayev",
    age: 20,
    hobbies: ["Tennis", "Basketboll", "Football", "Swimming", "Coding"],
    student: true,
    teacher: [
      { id: 1, name: "Suleyman" },
      { id: 2, name: "Həcər" },
      { id: 3, name: "Saleh" },
      { id: 4, name: "Orxan" },
    ],
    github: { username: "NuraddinR", password: "salam123" },
    gender: "male",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 80,
    salaryAZN: 5000,
  },
];

let stu = students.filter((student) => student.hobbies.includes("Gaming"));
console.log(...stu.map((student) => student.name));
