import React, { useState } from "react";
import { Form } from "react-bootstrap";
import uniqid from "uniqid";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions";

// const mapDispatchToProps = (dispatch) => ({ addTodo: (todo) => dispatch(addTodo(todo)) });

// class InputForm extends Component {
// state = { description: "" };
// render() {}

const InputForm = () => {
  const [description, setDescription] = useState("")
  // const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleChange = (event) => { setDescription(event.target.value) };
  const handleSubmit = (event) => {
    event.preventDefault();

    const todo = {
      description: description,
      id: uniqid(),
      completed: false
    };

    console.log(todo);
    // props.addTodo(todo);
    dispatch(addTodo(todo))
    setDescription("")
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="New task..."
        value={description}
        onChange={handleChange}
      />
      <Form.Control type="submit" />
    </Form>
  );
}

export default InputForm;
// export default connect((s) => s, mapDispatchToProps)(InputForm);
