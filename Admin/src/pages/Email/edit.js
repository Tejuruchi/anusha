import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function Edit() {
  const [data, setData] = useState({
    name: "",
    date: "",
    category: "",
    total: ""
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/getuser/${id}`);
        // Assuming the response directly contains the user object you want to edit
        setData(response.data.user); // Adjust according to your actual response structure
      } catch (error) {
        console.error("There was an error fetching the user data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/updateuser/${id}`, data);
      if (response.status === 200) {
        alert("Updated successfully.");
        navigate('/getdata'); // Adjust this route to your actual route for showing the updated data
      }
    } catch (error) {
      console.error("Failed to update the user:", error);
    }
  };

  return (
    <div className="App">
      <br />
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>Event Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Event Date</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={data.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={data.category}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Total no of participants</label>
          <input
            type="number"
            className="form-control"
            name="total"
            value={data.total}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Update</button>
        </div>
      </form>
    </div>
  );
}
