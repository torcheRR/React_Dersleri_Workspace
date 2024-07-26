import React from "react";
import "./App.css";
import { useSelector , useDispatch} from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import UserList from "./UserList";



function App() {
  // const dispatch = useDispatch();
  // const { value } = useSelector((store) => store.counter);
  // console.log(value);
  return (





    <div>
        <UserList/>
    </div>




    // <div>
    //   <div>{value}</div>

    //   <div>
    //     <button onClick={()=>{dispatch(increment())}}>arttır</button>
    //     <button onClick={()=>{dispatch(decrement())}}>azalt</button>
    //   </div>
    // </div>
  );
}

export default App;
