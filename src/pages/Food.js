import React, { useState } from 'react';
import axios from 'axios';

const Food = () => {
    const [foodTitle, setFoodTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');

    const foodData = {
        foodTitle,
        description,
        img,
        price,
        category,
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/foods/create-food', foodData);
            alert('Food item added successfully!');
            // Reset form fields after submission
            setFoodTitle('');
            setDescription('');
            setCategory('');
            setImg('');
            setPrice('');
        } catch (error) {
            console.error('Error in adding food:', error.response ? error.response.data : error.message);
            alert('Error: Could not add food item.');
        }
        
    };

    return (
        <form className="container mt-5" onSubmit={submitForm}>
            <h2 className="text-center mb-4">Add New Food Item</h2>
            <div className="mb-3">
                <label htmlFor="foodTitle" className="form-label">Title</label>
                <input
                    type="text"
                    id="foodTitle"
                    className="form-control"
                    placeholder="Food name"
                    required
                    value={foodTitle}
                    onChange={(e) => setFoodTitle(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input
                    type="text"
                    id="description"
                    className="form-control"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <input
                    type="text"
                    id="category"
                    className="form-control"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="img" className="form-label">Image URL</label>
                <input
                    type="text"
                    id="img"
                    className="form-control"
                    required
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input
                    type="number"
                    id="price"
                    className="form-control"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className="mb-3 form-check">
                <input
                    id="terms"
                    type="checkbox"
                    className="form-check-input"
                    required
                />
                <label htmlFor="terms" className="form-check-label">
                    I agree with the <a href="#" className="text-primary">terms and conditions</a>
                </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Add New Food</button>
        </form>
    );
};

export default Food;
