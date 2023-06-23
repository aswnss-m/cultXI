import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import 'animate.css';
import Footer from '../Footer/Footer';
import aztec from '../../assets/aztec.svg';
import './Gallery.css';
import axios from 'axios';
import Compressor from 'compressorjs';

function Gallery() {
  const [compressedFile, setCompressedFile] = useState(null);
  const [upload, setUpload] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(false);

  const handleCompressedUpload = () => {
    const image = upload;
    new Compressor(image, {
      quality: 0.6,
      success: (compressedResult) => {
        setCompressedFile(compressedResult);
        try {
          const formData = new FormData();
          formData.append('image', compressedResult, compressedResult.name);

          axios
            .post('http://localhost:5000/image/upload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            .then((res) => {
              console.log(res);
              setUploadedImage(!uploadedImage);
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (err) {
          console.log(err);
        }
      },
    });
  };
  const [images, setImages] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/image').then((res) => {
      setImages(res.data)      
    })
  }, [uploadedImage])



  return (
    <div className="container HomeContainer">
      <div className="leftContainer homeLeft">
        <Navbar />
        <h1 className="theTitle animate__animated animate__fadeIn">Gallery</h1>
        <div className="overlay">
          <img src={aztec} alt="CAW23 Logo" />
        </div>
      </div>

      <div className="rightContainer galleryRightContainer">
        <div className="uploadImageButton">
          <h2>Upload your image</h2>
          <input type="file" accept="image/*" capture="environment" className="uploadButton" onChange={(e)=>{
            setUpload(e.target.files[0])
          }} />
          <button type="submit" onClick={()=>{
            handleCompressedUpload()
          }}>Submit</button>
        </div>
          <h1 className='theTitle centerText'>Cult Snaps</h1>
        <div className="photos">
          {images.map((image) => {
            return (
              <div className="photo">
                <img src={`http://localhost:5000/image/${image._id}`} alt="CAW23 Logo" />
                </div>
            )
          })}
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
