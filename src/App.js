import "./App.css";
import { MdAddBox } from "react-icons/md";
import { useState } from "react";
import Item from "./Item";

function App() {
  const [items, setItems] = useState([{id: 0, value: 'click on the trash icon to delete an item !'}]);
  const [value, setValue] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if(!value) return

    const maxID = Math.max.apply(Math, items.map(item => item.id))
    console.log(maxID)
    setItems(preValues => [...preValues, {value, id: maxID > -1 ? maxID + 1 : 0}])
    setValue('')
  }

  return (
    <div className="App">
      <form onSubmit={onSubmitHandler} className="add_section">
        <input onChange={(e) => setValue(e.target.value)} value={value} type="text" placeholder="Add your item here" />
        <button><MdAddBox size={26} className="add_button" /></button>
      </form>
      <div className="list_section">
        <p className="title_list">to do list items</p>
        <ul className="list_content">
          {items.map(({value, id}, i) => (
            <Item key={i} id={id} setItem={setItems} content={value} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
