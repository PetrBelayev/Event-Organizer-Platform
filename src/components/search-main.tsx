import React, {useState} from 'react';
import Search from "../images/search.svg"
import "../styles/search-employees-styles.css"

// Search block
const SearchMain: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="search-employees-container">
            <h1>Главная</h1>

            <div>
                <input
                    type="text"
                    placeholder="Поиск сотрудников..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />

                <button><img src={Search} alt=""/>
                    Поиск
                </button>
            </div>

        </div>
    );
};

export default SearchMain;
