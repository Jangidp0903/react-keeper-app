import React from "react";
import { useReducer } from "react";

const initialstate = {
  name: "",
  content: "",
};

const searchvalue = (state, action) => {
  if (action.type === "NAME") {
    return {
      name: action.payload,
      content: state.content,
    };
  } else if (action.type === "CONTENT") {
    return {
      name: state.name,
      content: action.payload,
    };
  } else if (action.type === "EMPTY") {
    return {
      name: "",
      content: "",
    };
  }

  return initialstate;
};

const CreateArea = (props) => {
  const [taskstate, dispatch] = useReducer(searchvalue, initialstate);

  const namehandler = (event) => {
    var name = event.target.value;
    // console.log(name);
    dispatch({ type: "NAME", payload: name });
  };

  const contenthandler = (event) => {
    var content = event.target.value;
    // console.log(content);
    dispatch({ type: "CONTENT", payload: content });
  };

  const submithadler = (event) => {
    event.preventDefault();
    props.onAdd(taskstate);
    dispatch({ type: "EMPTY" });
  };

  return (
    <div className="create">
      <form onSubmit={submithadler}>
        <div className="form-group">
          <input
            type="text"
            onChange={namehandler}
            placeholder="Enter a Name..."
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            onChange={contenthandler}
            placeholder="Enter a Content..."
            required
          />
        </div>
        <button>Add +</button>
      </form>
    </div>
  );
};

export default CreateArea;
