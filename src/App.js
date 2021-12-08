import {useState, useRef} from 'react'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import { uuid } from 'uuidv4'
import "./styles.css"
import garbage from './assets/garbage.svg'
import add from './assets/add.svg'
import addHover from './assets/add-hover.svg'

function App() {
  const inputBars = {
    Todo: false,
    Doing: false,
    Completed: false,
  }
  const [todoItems, setTodoItems] = useState([]);
  const [doingItems, setDoingItems] = useState([{id:uuid(), task:"drive"},{id:uuid(), task:"dd"}]);
  const [completedItems, setCompletedItems] = useState([{id:uuid(), task:"ss"}]);
  const [inputBar, setInputBars] = useState(inputBars)
  const TodoRef = useRef()
  const DoingRef = useRef();
  const CompletedRef = useRef();
 
  const containers = [
    {
      name: "Todo",
      items: todoItems,
    },
    {
      name: "Doing",
      items: doingItems,
    },
    {
      name: "Completed",
      items: completedItems,
    }
    


  ]

  function onDragEnd(result) {
    let to;
    let toFunction;
    let from;
    let fromFunction;
    let object;
    console.log(result)
    if(result.destination === null) return
    if(result.source.droppableId === result.destination.droppableId && result.source.index === result.destination.index) return

    if(result.destination.droppableId === "Todo"){
      toFunction = setTodoItems;
      to = todoItems;
    }
    else if(result.destination.droppableId  === "Doing"){
      toFunction = setDoingItems;
      to = doingItems;
    }
    else if(result.destination.droppableId  === "Completed"){
      toFunction = setCompletedItems;
      to = completedItems;
    }
    
    if(result.source.droppableId === "Todo"){
      from = todoItems;
      fromFunction = setTodoItems;
    }
    else if(result.source.droppableId  === "Doing"){
      from = doingItems;
      fromFunction = setDoingItems;
      
    }
    else if(result.source.droppableId  === "Completed"){
      from = completedItems;
      fromFunction = setCompletedItems;
      
    }

    console.log("source index = " + result.source.index)
    console.log("destination index = " + result.destination.index)

    
    //we have the object
    console.log("from = " + from[result.source.index])
    object = from[result.source.index];

    //remove from "from"
    from.splice(result.source.index,1)
    // fromFunction(prev => (prev.filter((value,index) => index !== result.source.index)))
    // let newArray = to;
    // // if(result.source.droppableId != result.destination.droppableId && result.source.index != result.destination.index){
    
   
    to.splice(result.destination.index,0,object)

    toFunction(to)
   // newArray.splice(result.destination.index,0,object)
   
    
    // toFunction(newArray)
  }
  function clear(name) {
    console.log("naem =" + name)
    if(name === "Todo"){
      setTodoItems([]);
    }
    else if(name === "Doing"){
      setDoingItems([])
    }
    else if(name === "Completed"){
      setCompletedItems([])
    }
  }

  function addToList(name){
    
    if(name === "Todo"){
      let value = TodoRef.current.value;
      if(value != ""){
        setTodoItems(prev =>  {return [...prev, {id:uuid(),task: value}]})
        TodoRef.current.value = "";
      }
    }
    else if(name === "Doing"){
      let value = DoingRef.current.value;
      if(value != ""){
        setDoingItems(prev => {return [...prev, {id:uuid(),task: value}]});
        DoingRef.current.value = "";
      }
    }
    else if(name === "Completed"){
      let value = CompletedRef.current.value;
      if(value != ""){
        setCompletedItems(prev => {return [...prev, {id:uuid(),task: value}]})
        CompletedRef.current.value = "";
      }
    }
    
   
  }
  function addInputBar(name){
    let newObject = {
      Todo: inputBar.Todo,
      Doing: inputBar.Doing,
      Completed: inputBar.Completed
    }
    
    newObject[name] = !newObject[name];
    
      setInputBars(newObject)
  }
  return (
    <>
      <div className="mainContainer">
      <DragDropContext onDragEnd={onDragEnd}>
        {containers.map(container => {
          return (
            <Droppable key={container.name}  droppableId={container.name}>
              {(provided,snapshot) => {return (
                <div className="container" {...provided.droppableProps} ref={provided.innerRef}>
                  <div className="header">
                    <img onClick={() => addInputBar(container.name)} onMouseOut={e => e.currentTarget.src = add} onMouseOver={e => e.currentTarget.src = addHover} src={add}></img>
                    <h2>{container.name}</h2>
                    <img  onClick={() => clear(container.name)} src={garbage}></img>
                  </div>

                  {inputBar[container.name] ? <div className="inputBar"><input ref={container.name === "Todo" ? TodoRef : container.name === "Doing" ? DoingRef : container.name === "Completed" ? CompletedRef : null} type='text'></input><button onClick={() => addToList(container.name)}>Submit</button></div> :null}
                  <div className="list">
                    {container.items.map((item, index)=> {
                       
                      return (
                        
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => {
                            return (
                              <div style={provided.draggableProps.style}className="item" ref={provided.innerRef} {...provided.draggableProps}{...provided.dragHandleProps}>{item.task}</div>
                            )
                          }}
                        </Draggable>
                        
                      )
                    })}
                    </div>
                    
                  {provided.placeholder}
                  </div>
              )}}
              
            </Droppable>
          )
          
        })}
      </DragDropContext>
      </div>
    </>
  )
}

export default App;
