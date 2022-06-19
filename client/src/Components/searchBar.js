import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import './searchBar.css'

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
        <Form className='add-form' onSubmit = {onSubmit}>
            <div className='form-control'>
            <label>
                Search from one of the given attributes: Food, Explore, Shop, Watch, Nature, Sport
            </label>
            <input
                type='text'
                placeholder='Food, Explore, Shop, Watch, Nature, Sport'
                value = {text}
                onChange = {(e) => {
                    setText(e.target.value)
                }}
            />
            </div>

            <Button type="submit" className='btn btn-block btn-success'>
                Search
            </Button>
        </Form>

    )
};

export default SearchBar;