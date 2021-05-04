// In a party, there are N number of peoples, each person know only one person.
// The person who dont know anyone is the celebrity.
// here matrix is given for data, matrix[a][b] indicates if a know b?
// Result will be the index of person, if it's -1 then no one is celebrity

var n = 8;

var matrix = [
  [0, 0, 1, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0],
];

function knows(a, b) {
  return matrix[a][b];
}

function findCelebrity() {
  var indegree = [];
  var outdegree = [];
  for (let i = 0; i < n / 2; i++) {
    indegree.push(0);
    outdegree.push(0);
  }
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n / 2; j++) {
      let x = knows(i, j);
      outdegree[i] += x;
      indegree[j] += x;
    }
  }
  for (let i = 0; i < n / 2; i++) {
    if (indegree[i] == n / 2 - 1 && outdegree[i] == 0) {
      return i;
    }
  }

  return -1;
}

console.log(findCelebrity());
