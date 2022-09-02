import React from 'react'
import './myName.css'
import styles from './myNameStyles'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from "swiper";
// import "swiper/css/navigation";
// import 'swiper/css';


const MyName = (props) => {

  const conditionalRender = () => {
    // switch(firstName) {
    //   case 'kamal': return <h2 className='myName' style={styles.kamalStyle}>Hello {`${firstName} ${lastName}`}</h2>
    // }
    if(props.firstName === 'kamal'){
      return <h2 className='myName' style={styles.kamalStyle}>Hello {`${props.firstName} ${props.lastName}`}</h2>
    }
  }


    return (
      <div style={styles.divStyle}>
        <h1 style={{color:'red', textDecoration:'underline'}}>Welcome</h1>
        {/* {
          conditionalRender()
        } */}
        {/* {
        <h2 className='myName' style={styles.kamalStyle}>Hello {`${props.firstName} ${props.lastName}`}</h2>
        } */}

        {
          props.users.map(item => {
            return <h2 className='myName' style={styles.kamalStyle}>Hello {`${item.fName} ${item.lName}`}</h2>
          })
        }

    {/* <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide ><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" /></SwiperSlide>
      <SwiperSlide><img src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" /></SwiperSlide>
    </Swiper> */}
      </div>
    )
  }

  export default MyName