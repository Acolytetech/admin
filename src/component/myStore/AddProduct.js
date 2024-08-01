import React, { useState } from 'react';
import axios from 'axios';


const productInitialState = {
  name: '',
  price: '',
  rating: '',
  size: '',
  material: '',
  details: '',
  mainImage: '',
  additionalImages: ''
};

const AddProduct= () => {
  const [product,setProduct] = useState(productInitialState)


 
  // const [size, setSize] = useState('');
  // const [material, setMaterial] = useState('');
  // const [details, setDetails] = useState('');([]);

  // const handleMainImageChange = (event) => {
  //   setMainImageFile(event.target.files[0]);
  // };

  // const handleAdditionalImagesChange = (event) => {
  //   setAdditionalImagesFiles(Array.from(event.target.files));
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
    
  //   const formData = new FormData();
  //   formData.append('name', name);
  //   formData.append('price', price);
  //   formData.append('rating', rating);
  //   formData.append('size', size);
  //   formData.append('material', material);
  //   formData.append('details', details);
  //   formData.append('mainImage', mainImageFile);
  //   additionalImagesFiles.forEach(file => formData.append('additionalImages', file));

  //   try {
  //     const response = await axios.post('http://localhost:4000', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });
  //     console.log('Product added:', response.data);
  //     console.log(formData)
  //   } catch (error) {
  //     console.error('Error adding product:', error);
  //   }
  // };

  const onValueChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    // console.log(product)
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/', product);
      console.log('Product added:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  }
  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>

      <form onSubmit={submitForm}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            type="text"
            
            name='name'
             onChange={(e) => {
            onValueChange(e);
          }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            
            name='price'
             onChange={(e) => {
            onValueChange(e);
          }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Rating</label>
          <input
            type="number"
            
            name='rating'
             onChange={(e) => {
            onValueChange(e);
          }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Size</label>
          <input
            type="text"
            
            name='size'
             onChange={(e) => {
            onValueChange(e);
          }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Material</label>
          <input
            type="text"
            
            name='material'
             onChange={(e) => {
            onValueChange(e);
          }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Details</label>
          <textarea
            
            name='details'
             onChange={(e) => {
            onValueChange(e);
          }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Main Image</label>
          <input action="/profile" method="post" enctype="multipart/form-data"
            type="file"
            name='mainImage'
            onChange={(e) => {
            onValueChange(e);
          }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Additional Images</label>
          <input action="/upload" method="post" enctype="multipart/form-data"
            type="file"
            multiple
            name='additionalImages'
            onChange={(e) => {
            onValueChange(e);
          }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
