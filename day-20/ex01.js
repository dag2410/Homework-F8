const students = [
  { name: "Nguyen Van A", score: 9 },
  { name: "Tran Thi B", score: 7 },
  { name: "Le Van C", score: 5 },
  { name: "Pham Thi D", score: 3 },
  { name: "Doan Van E", score: 10 },
  { name: "Hoang Thi F", score: 6 },
];

function classificationStudent(students) {
  let highest = {};
  let lowest = {};
  let group = { A: [], B: [], C: [], D: [] };

  for (let i = 0; i < students.length; i++) {
    highest = students[0];
    lowest = students[0];
    if (students[i].score > highest.score) {
      highest = students[i];
    }
    if (students[i].score < lowest.score) {
      lowest = students[i];
    }

    if (students[i].score >= 8) {
      group.A.push(students[i]);
    } else if (students[i].score >= 6 && students[i].score < 8) {
      group.B.push(students[i]);
    } else if (students[i].score >= 4 && students[i].score < 6) {
      group.C.push(students[i]);
    } else {
      group.D.push(students[i]);
    }
  }

  return { highest, lowest, group };
}
const result = classificationStudent(students);
console.log(result);
