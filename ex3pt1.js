let myTasks = [];
//add task to array
let addTask = (task) => {
    //get length and push task to the list
  let length =  myTasks.push(task);
  //output confirmation of task to list
    console.log("Task: " + task + " added to tasks. ")
    return length;
}

let listAllTasks = ()=> {
    myTasks.forEach((item)=>{
        console.log(item);
    })
}

let deleteTask = (task) =>{
    // finds task index to delete
    let index = myTasks.indexOf(task);
    if(index > -1)
    {
    //removes it
    myTasks.splice(index,1);
            //let length =  myTasks.pop(task);
  //output deletion of task to list
    console.log("Task: " + task + " removed from tasks. ")
             // return length;  
    }else{
        console.log("Task: "+task+"Not in tasks!")
    }
}

addTask("Learn JS!");
addTask("Learn React!");
listAllTasks();
deleteTask("Learn JS!")
