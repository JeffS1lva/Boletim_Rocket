const student = [
  {
    name:'Jefferson',
    noteOne: 4,
    noteTwo: 8,
  },
  {
    name:'Karol',
    noteOne: 2,
    noteTwo: 10,
  },
  {
    name:'Robson',
    noteOne: 7,
    noteTwo: 10,
  },
  {
    name:'Lucas',
    noteOne: 4,
    noteTwo: 7,
  },
]


studentAlun = []

for(let students of student){
  studentAlun.push(student.name)
}

function notes(student){
  alert(
    `a média do(a) aluno(a) ${student.name} é: ${
      (student.noteOne + student.noteTwo) / 2
    }  `
  )
}

notes(student[0])
notes(student[1])
notes(student[2])
notes(student[3])








