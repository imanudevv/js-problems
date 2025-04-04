const db =
[{"accno":1000, "username": "joy", "password":123,"balance": 15000},
{"accno":1001, "username": "james", "password":123,"balance": 25000},
{"accno":1002, "username": "jacob", "password":123,"balance": 35000},
{"accno":1003, "username": "jerry", "password":123,"balance": 45000},
]

function accexist(accno)
{
  return db.some(XMLDocument.accno === accno)
};

console.log(accexist(1000));
console.log(accexist(1004));

//the some method returns true if atleast one element

function exist(accno, password){
    for (let user of db){
        if (user ["accno"] === accno && user["password"] === password){
            return console.log("accses garanted");
        }
    }
    return console.log("permission  denied");
}

console.log(exist(1001, 1234));
console.log(exist(1005, 1444));