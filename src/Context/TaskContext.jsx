import React, { useEffect, useState } from "react";

const TaskContext = React.createContext();

export const TaskContextProvider = (props) => {
  const [tasks, settasks] = useState([]);

  const url = "https://keeper-app-cc169-default-rtdb.firebaseio.com/tasks.json";

  // Fetch Data
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(`Data from DB => ${data}`);
        if (data.length > 0) {
          settasks(data);
        }
      } catch (error) {
        console.log(`Error in the Code = ${error}`);
      }
    };
    fetchdata();
  }, []);

  // Send Data
  useEffect(() => {
    const senddata = async () => {
      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(tasks),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(`Error in the code : ${error}`);
      }
    };
    senddata();
  });

  const addtaskhandler = (taskobj) => {
    settasks((prevalue) => {
      return [taskobj, ...prevalue];
    });
  };

  const deletetaskhandler = (id) => {
    settasks((prevalue) => {
      return prevalue.filter((task, index) => {
        return index !== id;
      });
    });
  };
  return (
    <TaskContext.Provider value={{ tasks, addtaskhandler, deletetaskhandler }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
