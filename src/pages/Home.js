import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Home = () => {
    const [foods, setFoods] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredFoods, setFilteredFoods] = useState([]);

    // Fetch food items from the API
    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/foods/get-food');
                setFoods(response.data);
                setFilteredFoods(response.data); // Set filtered foods initially to all foods
            } catch (error) {
                console.error('Error fetching food items:', error);
            }
        };

        fetchFoods();
    }, []);

    // Handle search input change
    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Filter foods based on search query
        if (query === '') {
            setFilteredFoods(foods);
        } else {
            const filtered = foods.filter(food =>
                food.foodTitle.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredFoods(filtered);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Food Items</h1>
            <div className="mb-4 text-center">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="form-control w-50 mx-auto"
                />
            </div>
            <div className="row">
                {filteredFoods.map((food) => (
                    <div className="col-md-4 mb-4" key={food._id}>
                        <Link to={`/food-detail/${food._id}`} className="text-decoration-none">
                            <div className="card h-100">
                                <img src={food.img} alt={food.foodTitle} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{food.foodTitle}</h5>
                                    <p className="card-text">{food.description}</p>
                                    <p className="h6 text-primary">${food.price}</p>
                                    <p className="small text-muted">Category: {food.category}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <ScrollToTopButton /> {/* Add the ScrollToTopButton */}
        </div>
    );
};

export default Home;



// https://chatgpt.com/share/66e52d10-4aa4-8008-942f-63860b366720