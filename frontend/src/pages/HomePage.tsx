import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { setName, setNone, addName, blankName } from "../store/namingSlice";

const HomePage = () => {
  const name = useSelector((state: RootState) => state.naming.value);
  const dispatch = useDispatch();
  const [inp, setInp] = useState("");

  return (
    <div>
      <h1>{name}</h1>
      <hr />
      <input value={inp} onChange={(e) => setInp(e.target.value)} />
      <button
        onClick={() => {
          dispatch(setName(inp));
          setInp("");
        }}>
        Set name
      </button>
      <button
        onClick={() => {
          dispatch(addName(inp));
          setInp("");
        }}>
        Add name
      </button>
      <button
        onClick={() => {
          dispatch(setNone());
        }}>
        Set none
      </button>
      <button
        onClick={() => {
          dispatch(blankName());
        }}>
        Blank
      </button>
    </div>
  );
};

export default HomePage;
