import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FoodDetail.css'; // Custom CSS file

const FoodDetail = () => {
    const { id } = useParams(); // Get the food ID from the URL
    const [food, setFood] = useState(null);
    const [showModal, setShowModal] = useState(false); // State to toggle modal visibility
    const [updatedFood, setUpdatedFood] = useState({
        foodTitle: '',
        description: '',
        img: '',
        price: '',
        category: ''
    });

    useEffect(() => {
        const fetchFoodDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/foods/food-detail/${id}`);
                setFood(response.data);
                setUpdatedFood(response.data); // Set the updated food data with the fetched data
            } catch (error) {
                console.log(error);
            }
        };

        fetchFoodDetail();
    }, [id]);

    const navigate = useNavigate();

    // Function to handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedFood((prevFood) => ({
            ...prevFood,
            [name]: value
        }));
    };

    // Function to handle the update
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/api/foods/update-food/${id}`, updatedFood);
            alert('Food item updated successfully');
            setShowModal(false); // Close modal after successful update
            navigate('/'); // Redirect to the home page or desired page
        } catch (error) {
            console.log(error);
        }
    };

    // Function to delete the food item
    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this food item?')) {
            try {
                await axios.delete(`http://localhost:8000/api/foods/delete-food/${id}`);
                alert('Food item deleted successfully');
                navigate('/'); // Redirect to the home page after deletion
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="container my-5">
            {food && (
                <div className="card mb-3">
                    <img src={food.img} className="card-img-top food-image" alt={food.foodTitle} />
                    <div className="card-body">
                        <h5 className="card-title">{food.foodTitle}</h5>
                        <p className="card-text">{food.description}</p>
                        <p className="card-text">
                            <strong>Price: </strong>${food.price}
                        </p>
                        <p className="card-text">
                            <small className="text-muted">Category: {food.category}</small>
                        </p>
                        <div className="d-flex gap-3">
                            <button
                                onClick={() => setShowModal(true)}
                                className="btn btn-primary"
                            >
                                Update
                            </button>
                            <button
                                onClick={handleDelete}
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal for Update */}
            {showModal && (
                <div className="modal show d-block" tabIndex="-1" role="dialog" aria-modal="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Update Food Item</h5>
                                <button
                                    type="button"
                                    className="close"
                                    onClick={() => setShowModal(false)}
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleUpdate}>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            name="foodTitle"
                                            value={updatedFood.foodTitle}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input
                                            type="text"
                                            name="description"
                                            value={updatedFood.description}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        <input
                                            type="text"
                                            name="category"
                                            value={updatedFood.category}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Image URL</label>
                                        <input
                                            type="text"
                                            name="img"
                                            value={updatedFood.img}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input
                                            type="number"
                                            name="price"
                                            value={updatedFood.price}
                                            onChange={handleInputChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button
                                            type="button"
                                            className="btn btn-secondary mr-2"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FoodDetail;
