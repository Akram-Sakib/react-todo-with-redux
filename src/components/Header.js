import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { added } from "../redux/todos/actions";
export default function Header() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
 
  const handleChangeText = (e) => {
    setText(e.target.value)
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(added(text))
  }

  return (
    <div>
      <form
        onSubmit={handleOnSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={noteImage} className="w-6 h-6" alt="Add todo" />
        <input
          onChange={handleChangeText}
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={tickImage} alt="Complete" />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer">Clear completed</li>
      </ul>
    </div>
  );
}
