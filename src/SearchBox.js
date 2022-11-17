import React from "react";

const SearchBox = ({searchInput}) => {
    return (
        <div>
            <input type={"search"} placeholder="search robots" onInput={searchInput}/> 
        </div>
    )
}

export default SearchBox;