import axios from 'axios';
import React, { useState, useEffect } from 'react';

const City = () => {
  const [city, setCity] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('City: ', city);
    const data = new FormData();
    data.append('city[name]', event.target.name.value);
    data.append('city[description]', event.target.description.value);
    data.append('city[image]', event.target.image.files[0]);
    submitToAPI(data);
  }

  function submitToAPI(data) {
    axios.post('http://localhost:3001/cities', data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    }).then((response) => {
        console.log('City created: ', response);
        setCity(response.data);
    }).catch((error) => {
        console.log('City create error: ', error);
    });
  }

  useEffect(() => {
    console.log('City: ', city);
    axios.get('http://localhost:3001/latest').then((response) => {
        console.log('City: ', response.data);
        setCity(response.data);
    }).catch((error) => {
        console.log('City error: ', error);
    });
  }, [city]);

  return (
  /* City */
  <div className="relative flex flex-col w-full px-4 pt-6 pb-4 lg:px-6 lg:py-2 h-auto">
    <h1>City Form</h1>
    <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <br />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea>
        <br />
        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" />
        <br />

        <button type="submit">Create City</button>
    </form>

    {city && (
        <div>
            <h1>{city.id}</h1>
            <h1>{city.name}</h1>
            <p>{city.description}</p>
            <img src={city.image_url} alt={city.name} />
        </div>
    )}
  </div>
  );
};

export default City;
