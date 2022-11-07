import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { searchThunk } from "../../redux/search/search-thunk"
import { AppDispatch } from "../../redux/store"
import "./Searchbar.scss"

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="search for a movie"
        value={searchValue}
        onChange={handleChange}
      />
      <button onClick={() => dispatch(searchThunk(searchValue))}>Search</button>
    </div>
  )
}

export default Searchbar
