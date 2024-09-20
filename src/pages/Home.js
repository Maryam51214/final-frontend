import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import ScrollToTopButton from '../components/ScrollToTopButton'; // Import the ScrollToTopButton
import './Home.css'; // Custom CSS file

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

            {/* Search bar */}
            <div className="d-flex justify-content-center mb-5">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="form-control w-50"
                />
            </div>

            {/* Grid for food items */}
            <div className="food-grid"> {/* Custom class for grid */}
                {filteredFoods.map((food) => (
                    <div key={food._id} className="food-item"> {/* Custom class for each food item */}
                        <Link to={`/food-detail/${food._id}`} className="text-decoration-none">
                            <div className="card food-card h-100">
                                <img src={food.img} className="card-img-top food-img" alt={food.foodTitle} />
                                <div className="card-body">
                                    <h5 className="card-title">{food.foodTitle}</h5>
                                    <p className="card-text">{food.description}</p>
                                    <p className="text-primary font-weight-bold">${food.price}</p>
                                    <p className="text-muted">Category: {food.category}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* ScrollToTopButton */}
            <ScrollToTopButton />
        </div>
    );
};

export default Home;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import ScrollToTopButton from '../components/ScrollToTopButton'; // Import the ScrollToTopButton
// import './Home.css'; // Custom CSS file

// const Home = () => {
//     const [foods, setFoods] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filteredFoods, setFilteredFoods] = useState([]);

//     // Fetch food items from the API
//     useEffect(() => {
//         const fetchFoods = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8000/api/foods/get-food');
//                 setFoods(response.data);
//                 setFilteredFoods(response.data); // Set filtered foods initially to all foods
//             } catch (error) {
//                 console.error('Error fetching food items:', error);
//             }
//         };

//         fetchFoods();
//     }, []);

//     // Handle search input change
//     const handleSearchChange = (e) => {
//         const query = e.target.value;
//         setSearchQuery(query);

//         // Filter foods based on search query
//         if (query === '') {
//             setFilteredFoods(foods);
//         } else {
//             const filtered = foods.filter(food =>
//                 food.foodTitle.toLowerCase().includes(query.toLowerCase())
//             );
//             setFilteredFoods(filtered);
//         }
//     };

//     return (
//         <div className="container mt-5">
//             <h1 className="text-center mb-4">Food Items</h1>

//             {/* Search bar */}
//             <div className="d-flex justify-content-center mb-5">
//                 <input
//                     type="text"
//                     placeholder="Search by title..."
//                     value={searchQuery}
//                     onChange={handleSearchChange}
//                     className="form-control w-50"
//                 />
//             </div>

//             {/* Grid for food items */}
//             <div className="row">
//                 {filteredFoods.map((food) => (
//                     <div key={food._id} className="col-12 col-sm-6 col-md-4 mb-4">
//                         <Link to={`/food-detail/${food._id}`} className="text-decoration-none">
//                             <div className="card food-card h-100">
//                                 <img src={food.img} className="card-img-top food-img" alt={food.foodTitle} />
//                                 <div className="card-body">
//                                     <h5 className="card-title">{food.foodTitle}</h5>
//                                     <p className="card-text">{food.description}</p>
//                                     <p className="text-primary font-weight-bold">${food.price}</p>
//                                     <p className="text-muted">Category: {food.category}</p>
//                                 </div>
//                             </div>
//                         </Link>
//                     </div>
//                 ))}
//             </div>

//             {/* ScrollToTopButton */}
//             <ScrollToTopButton />
//         </div>
//     );
// };

// export default Home;
