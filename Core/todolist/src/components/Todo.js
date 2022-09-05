const Todo = (props) => {
    const todoClasses = [];

    if (props.todo.complete) {
        todoClasses.push("line-through");
    }
    return (
    <div>

        <span className={todoClasses.join(" ")}>{props.todo.text}</span>
        <input onChange={(e) => {
            props.handleTodoToggle(props.i);
        }}
            checked={props.todo.complete} type="checkbox" />
        <button onClick={(e) => {
            props.handleTodoDelete(props.i);
        }}
            style={{ backgroundColor: "red", color: "white", padding: "5px 10px", margin: "10px", borderRadius: "5px" }}>Delete</button>
    </div>
)};

export default Todo;