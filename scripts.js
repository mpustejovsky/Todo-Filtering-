

  
 let nextlist=0;
  let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

    var listLength=arrayOfTodos.length;
    var IDusing = 0;
    var wording = ""

  const fetchTodos = () => {
    IDusing = document.getElementById("TODO_ID").value;
    console.log(IDusing);
    /*if (IDusing <1 || IDusing > 10){
      window.alert("Chose a UserID between 1-10");
      return
    }*/
    $("ol").empty();    
    document.getElementById("top_button").innerHTML = "UserID "+ IDusing
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
    .then((test) => listLength=arrayOfTodos.length)
    .then((test2)=> document.getElementById("numberof").innerHTML = "Submit for New ID: Currently ID " + IDusing)
    }

  const logTodos = () => {
    console.log(arrayOfTodos)
    
  }

  const reloadPage = ()=>{
    $("ol").empty();
    nextlist=0
    populateTotalTodos()
  }

  
  const populateTotalTodos = (listType) => {
    
    if (listType == 1){
      wording = "Total"
    }
    if (listType == 2){
      wording = "Completed"
    }
    if (listType == 3){
      wording = "Incomplete"
    }
    document.getElementById("top_button2").innerHTML = wording + " List for "
    
    $("ol").empty();   
    
  

    for(let i=0;i<arrayOfTodos.length;i++){
    console.log(arrayOfTodos[i].id)  
    console.log("i= " + i) 
    if (arrayOfTodos[i].userId == IDusing){
                      
                     
                      var node = document.createElement("LI");
                      node.setAttribute("id", "li_num"+i)
                    
                  
                  
                      var textnode = document.createTextNode(arrayOfTodos[i].title);
                      var check =arrayOfTodos[i].completed;
                                      if (check == false)
                                          { 
                                            node.classList.add("isFalse")
                                            if (listType == 1 || listType == 3)
                                            {
                                              node.appendChild(textnode);
                                              document.getElementById("todo-list").appendChild(node);
                                              var btn=document.createElement("BUTTON");
                                              btn.setAttribute("id", "btn_class"+i );
                                              btn.setAttribute("style", "background-color: red;");
                                              btn.setAttribute("onclick", "myfunction(this.id)")
                                              document.getElementById("todo-list").appendChild(btn);
                                              document.getElementById("btn_class"+i).innerHTML = "Click When Complete "
                                            }
                                          }

                                          else {
                                            node.classList.add("isTrue")
                                            if (listType == 1 || listType == 2)
                                            {
                                              node.appendChild(textnode);
                                              document.getElementById("todo-list").appendChild(node);
                                            }                                      
                                               }
      

  }
 
  
}}

const myfunction = (numlist) => {
  let mynumber = "";
  document.getElementById(numlist).innerHTML = "Complete "
  document.getElementById(numlist).style.backgroundColor = "green";
  mynumber=numlist.substring(9,12)
  let helpme = parseInt(mynumber);
  arrayOfTodos[helpme].completed="true"
 
  document.getElementById("li_num"+helpme).style.color = "green";
  console.log(helpme)
}