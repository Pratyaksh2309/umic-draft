// // import Footer from "../Footer";
// // import MyClass from "../Nav";

// // import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
// // import { useState, useEffect } from "react"
// // import './MGallery.css'

// // import img1 from '../../assets/images/IMG_2387.jpg'
// // import img2 from '../../assets/images/IMG_2390.jpg'
// // import img3 from '../../assets/images/IMG_2395.jpg'
// // import img4 from '../../assets/images/IMG_2399.jpg'
// // import img5 from '../../assets/images/IMG_2400.jpg'
// // import img6 from '../../assets/images/IMG_2405.jpg'
// // import img7 from '../../assets/images/IMG_2414.jpg'
// // import img8 from '../../assets/images/IMG_2418.jpg'
// // import img9 from '../../assets/images/IMG_2419.jpg'
// // import img10 from '../../assets/images/IMG_2420.jpg'

// // import prev from '../../assets/images/prev_img.svg'
// // import next from '../../assets/images/next_img.svg'
// // import close from '../../assets/images/close.svg'


// // const images = [
// //   img1, img2, img3, img4, img5, img6, img7, img10, img8, img9, img6, img5, 
// // ]

// // function MGallery(){

// //   const [data, setData] = useState({img: '', i: 0})

// //   function viewImage(img, i){
// //       setData({img, i})
// //   }

// //   function imgAction(action){
// //       let i = data.i;
// //       if (action === 'next-image'){
// //           setData({img: images[i + 1], i: i+1});
// //       }
// //       else if (action === 'prev-image'){
// //           setData({img: images[i - 1], i: i-1});
// //       }
// //       if(!action){
// //           setData({img: '', i: 0})
// //       }

// //   }
// //   useEffect(() => {
// //     if (data.img) {
// //         document.body.style.overflow = 'hidden'; // Disable scroll
// //     } else {
// //         document.body.style.overflow = 'auto'; // Re-enable scroll
// //     }

// //     // Cleanup on unmount
// //     return () => {
// //         document.body.style.overflow = 'auto';
// //     };
// //     }, [data.img]);

    


// //   return(
// //       <>
// //         <MyClass/>
// //         <br/>
// //         <h1>Gallery</h1>
// //         {/* Gallery Component */}
// //         {
// //           data.img &&
// //           <div style={{width: '100%', height: '100vh', background: 'rgba(0, 0, 0, 0.8)', top:0, zIndex:2,
// //               display: 'flex', justifyContent: 'center', alignItems: 'center', overflowY: 'hidden', position: 'fixed',
// //           }}>      
              
// //               <button className="img-change-btn-left" onClick={() => imgAction('prev-image')}>
// //               <img src={prev} alt="Previous" className="img-btn" />
// //               </button>
// //               <button className="close-btn" onClick={() => imgAction()}>
// //               <img src={close} alt="Previous" className="img-btn" />
// //               </button>
// //               <img src={data.img} style={{width: 'auto', maxWidth: '92%', maxHeight: '92%'}}></img>
// //               <button className="img-change-btn-right" onClick={() => imgAction('next-image')}>
// //               <img src={next} alt="Previous" className="img-btn" />
// //               </button>
// //           </div>
          
// //       }
      
// //       <div style={{padding: '10px'}}>
// //           <ResponsiveMasonry
// //                   columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
// //               <Masonry gutter="20px">
// //                   {images.map((image, i) => (
// //                       <img
// //                           key={i}
// //                           src={image}
// //                           style={{width: "100%", display: "block", cursor: "pointer"}}
// //                           alt=""
// //                           onClick={() => viewImage(image,i)}
// //                       />
// //                   ))}
// //               </Masonry>
// //           </ResponsiveMasonry>
// //       </div>
        
        
        
// //         <Footer/>

// //       </>
// // )
// // }

// // export default MGallery;






















































// import React, { useState, useEffect } from "react";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import Footer from "../Footer";
// import MyClass from "../Nav";
// import './MGallery.css';

// // Image imports

// import img1 from '../../assets/images/compressed/IMG_2387.jpg';
// import img2 from '../../assets/images/compressed/IMG_2390.jpg';
// import img3 from '../../assets/images/compressed/IMG_2395.jpg';
// import img4 from '../../assets/images/compressed/IMG_2399.jpg';
// import img5 from '../../assets/images/compressed/IMG_2400.jpg';
// import img6 from '../../assets/images/compressed/IMG_2405.jpg';
// import img7 from '../../assets/images/compressed/IMG_2414.jpg';
// import img8 from '../../assets/images/compressed/IMG_2418.jpg';
// import img9 from '../../assets/images/compressed/IMG_2419.jpg';
// import img10 from '../../assets/images/compressed/IMG_2420.jpg';
// import img11 from '../../assets/images/compressed/IMG_2876.jpg';
// import img12 from '../../assets/images/compressed/IMG_2908.jpg';
// import img13 from '../../assets/images/compressed/IMG_2927.jpg';
// import img14 from '../../assets/images/compressed/IMG_2932.jpg';
// import img15 from '../../assets/images/compressed/IMG_2956.jpg';
// import img16 from '../../assets/images/compressed/IMG_2975.jpg';
// import img17 from '../../assets/images/compressed/IMG_2976.jpg';
// import img18 from '../../assets/cars/c1.jpg'
// import img19 from '../../assets/cars/c2.jpg'
// import img20 from '../../assets/cars/c3_new.jpg'
// import img21 from '../../assets/images/compressed/IMG_2974.jpg'
// import img22 from '../../assets/cars/c4_new.jpg'
// import img23 from '../../assets/cars/c5.jpeg'
// import img24 from '../../assets/cars/c6.jpeg'
// import img25 from '../../assets/cars/c7.jpeg'
// import img26 from '../../assets/cars/c8.jpg'

// // Icon imports
// import prev from '../../assets/images/prev_img.svg';
// import next from '../../assets/images/next_img.svg';
// import close from '../../assets/images/close.svg';

// const images = [img1, img2, img3, img4, img5, img6, img7, img10, img8, img9, img11, img12, img13, img14,
//   img15, img16, img17, img18, img19, img20, img21, img24, img25, img23, img22, img26, img25];

// function MGallery() {
//   const [data, setData] = useState({ img: '', i: 0 });
//   const totalImages = images.length;

//   const viewImage = (img, i) => {
//     setData({ img, i });
//   };

//   const imgAction = (action) => {
//     let i = data.i;
//     if (action === 'next-image') {
//       setData({ img: images[i + 1], i: i + 1 });
//     } else if (action === 'prev-image') {
//       setData({ img: images[i - 1], i: i - 1 });
//     }
//     if (!action) {
//       setData({ img: '', i: 0 });
//     }
//   };

//   useEffect(() => {
//     if (data.img) {
//       document.body.style.overflow = 'hidden'; // Disable scroll
//     } else {
//       document.body.style.overflow = 'auto'; // Re-enable scroll
//     }

//     // Cleanup on unmount
//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [data.img]);


//   return (
//     <>
//       <MyClass />
//       <br />
//       <h1>Gallery</h1>

//       {/* Full-screen image view */}
//       {data.img && (
//         <div
//           style={{
//             width: '100%',
//             height: '100vh',
//             background: 'rgba(0, 0, 0, 0.8)',
//             top: 0,
//             zIndex: 2,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             overflowY: 'hidden',
//             position: 'fixed',
//           }}
//         >
//           <button className="img-change-btn-left" onClick={() => imgAction('prev-image')}>
//             <img src={prev} alt="Previous" className="img-btn" />
//           </button>
//           <button className="close-btn" onClick={() => imgAction()}>
//             <img src={close} alt="Close" className="img-btn" />
//           </button>
//           <img src={data.img} style={{ width: 'auto', maxWidth: '92%', maxHeight: '92%' }} alt="Gallery" />
//           <button className="img-change-btn-right" onClick={() => imgAction('next-image')}>
//             <img src={next} alt="Next" className="img-btn" />
//           </button>
//         </div>
//       )}


//       {/* Image Gallery */}
//       <div style={{ padding: '10px' }}>
//         <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
//           <Masonry gutter="20px">
//             {images.map((image, i) => (
//               <img
//                 key={i}
//                 src={image}
//                 style={{ width: '100%', display: 'block', cursor: 'pointer' }}
//                 alt=""
//                 onClick={() => viewImage(image, i)}
//                 loading="lazy"
//               />
//             ))}
//           </Masonry>
//         </ResponsiveMasonry>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default MGallery;





























































import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Footer from "../Footer";
import MyClass from "../Nav";
import './MGallery.css';
import prev from '../../assets/images/prev_img.svg';
import next from '../../assets/images/next_img.svg';
import close from '../../assets/images/close.svg';
import Preloader from '../Preloader/Preloader.jsx'

// Image imports
import img1 from '../../assets/images/compressed/IMG_2390.jpg';
import img2 from '../../assets/images/compressed/IMG_2399_new.jpg';
import img3 from '../../assets/images/compressed/IMG_2405_new.jpg';
import img4 from '../../assets/images/compressed/IMG_2419_new.jpg';
import img5 from '../../assets/images/compressed/IMG_2876_new.jpg';
import img6 from '../../assets/images/compressed/IMG_2908_new.jpg';
import img7 from '../../assets/images/compressed/IMG_2932_new.jpg';
import img8 from '../../assets/images/compressed/IMG_2956_new.jpg';
import img9 from '../../assets/images/compressed/IMG_2975.jpg';
import img11 from '../../assets/cars/c1_new.jpg'
import img12 from '../../assets/cars/c2_new.jpg'
import img13 from '../../assets/cars/c3_new.jpg'

import img14 from '../../assets/cars/c4_new.jpg'
import img15 from '../../assets/cars/c5.jpeg'
import img16 from '../../assets/cars/c6.jpeg'
import img17 from '../../assets/cars/c8.jpg'
import img18 from '../../assets/cars/c9.png'

import img19 from '../../assets/images/compressed/asme.jpg'
import img20 from '../../assets/images/compressed/asme.png'
import img21 from '../../assets/images/compressed/auto.jpeg'

const images = [img14, img17, img18, img16,img15, img11, img13, img19, img12, img20, img21, img1, img2, img3, img4, 
  img8, img7,img5, img6, img9, ];


const MGallery = () => {
  const [data, setData] = useState({ img: '', i: 0 });
  const [loading, setLoading] = useState(true);  // Track loading state
  const [loadedCount, setLoadedCount] = useState(0);  // Track number of loaded images

  const totalImages = images.length;

  // Function to view an image
  const viewImage = (img, i) => {
    setData({ img, i });
  };

  // Handle next/previous image actions
  const imgAction = (action) => {
    let i = data.i;
    if (action === 'next-image') {
      setData({ img: images[i + 1], i: i + 1 });
    } else if (action === 'prev-image') {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: '', i: 0 });
    }
  };

  // Monitor when the full-screen image is open
  useEffect(() => {
    if (data.img) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scroll
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [data.img]);

  // Track when each image has loaded
  const handleImageLoad = () => {
    setLoadedCount((prevCount) => prevCount + 1);
  };

  // When all images are loaded, stop showing the loading screen
  useEffect(() => {
    if (loadedCount === totalImages) {
      setLoading(false);
    }
  }, [loadedCount, totalImages]);

  return (
    <>
      <MyClass />
      <br />
      <div className="container">
        <h1 className="section-heading">Gallery</h1>
      </div>

      {/* Loading screen with Preloader */}
      {loading && <Preloader />}

      {/* Full-screen image view */}
      {data.img && (
        <div
          style={{
            width: '100%',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.8)',
            top: 0,
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflowY: 'hidden',
            position: 'fixed',
          }}
        >
          {data.i !== 0 ? 
            <button className="img-change-btn-left" onClick={() => imgAction('prev-image')}>
              <img src={prev} alt="Previous" className="img-btn" />
            </button>
          : null}
          
          
          <button className="close-btn" onClick={() => imgAction()}>
            <img src={close} alt="Close" className="img-btn" />
          </button>
          <img src={data.img} style={{ width: 'auto', maxWidth: '92%', maxHeight: '92%' }} alt="Gallery" />
          
          <button className="img-change-btn-right" onClick={() => imgAction('next-image')}>
            <img src={next} alt="Next" className="img-btn" />
          </button>            
        </div>
      )}

      {/* Image Gallery - only visible after loading */}
      <div className={loading ? "hidden-gallery" : "gallery"}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3}}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: '100%', display: 'block', cursor: 'pointer',borderRadius:'5px', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)' }}
                alt=""
                onClick={() => viewImage(image, i)}
                onLoad={handleImageLoad}
                
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div> 
      <Footer />
    </>
  );
}

export default MGallery;