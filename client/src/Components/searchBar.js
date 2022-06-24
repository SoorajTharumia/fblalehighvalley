import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import './searchBar.css'
import {FaSearch} from 'react-icons/fa'

const SearchBar = ({onSearch}) => {
    const [text, setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add text to the search bar.')
            return
        }

        onSearch({text})
        setText('')
    }

    return (
      <Form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label style={{ color: '#edf2f4'}}>
            Search from one of the given attributes:{" "}
            <strong class='attributes'>Food, Explore, Shop, Watch, Nature, Sport</strong>
          </label>
          <div className='searchBox'> 
            <input
              type="text"
              placeholder="Food, Explore, Shop, Watch, Nature, Sport"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
          </div>
        </div>

        <Button type="submit" className="btn btn-block btn-success">
          <FaSearch/>&nbsp; <strong>Search</strong>
        </Button>
      </Form>
    );
};

export default SearchBar;