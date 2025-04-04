//syntax

//class class- name }
     //properties ,funcionalities
// }

class empolyee {
    setemployee (id,name,desg,salary){
        this.id=id,
        this.name=name,
        this.desg=desg,
        this.salary=salary
    }
   

     printemloyee(){
         console.log(this.id)
     }
    }

//create object
//object name = new class name()

emp=new empolyee()
emp.setemployee(1001,"Rahul","Software Engineer",'124562')
emp.printemloyee()