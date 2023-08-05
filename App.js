import React from 'react';
import ReactDOM from 'react-dom/client';
//This is javascript code
// function attachEventListner(){
// let count = 0;
// document.getElementById("clickMe").addEventListener("click" , function xyz() {
//     console.log("Button is Clicked" , ++count)   
// })
// }
//  attachEventListner()

// const heading =document.createElement("h1")
// heading.innerHTML = "Namaste Everyone"
// document.getElementById("root").appendChild(heading);

//This is react code without writing JSX with createElement and createRoot , render

// const heading1 = React.createElement("h1", {id: "title"}, "Namaste React from h1");


// const heading2 = React.createElement("h2", {id: "sub_title"}, "Namaste React from h2");

// const heading3 = React.createElement("h2", {id: "sub_titles"}, "Namaste React from h2");

// const container = React.createElement("div", {id:"container"}, [heading1,heading2,heading3])

// const root = ReactDOM.createRoot(document.getElementById("root"));

//   root.render(container)

const Logo =  () => (
  <a href="/">
  <img 
  className='logo'
  src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" 
  alt="Food Villa" 
  />
  </a>
)

const Header = () => {
  return( 
    <div className="header">
    <Logo />
      <div className="nav-items">
        <ul>
          <li>
          <input placeholder='Search'></input>  
          </li>
          <a href='/'>
            <li>Home</li>
          </a>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>         
        </ul>
      </div>
    </div>
  )
}




const RestaurantList = [
  {
    "info": {
      "id": "507940",
      "name": "EatFit",
      "cloudinaryImageId": "ee4f041cd8611dccc19f4267783ab5ea",
      "locality": "Ghole Road",
      "areaName": "Shivajinagar",
      "costForTwo": "₹270 for two",
      "cuisines": [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani"
      ],
      "avgRating": 4.2,
      "feeDetails": {
        "restaurantId": "507940",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3100
      },
      "parentId": "76139",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-03 23:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-577ce804-4061-463f-9583-ead5a97deff8"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/eatfit-ghole-road-shivajinagar-pune-507940",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "11887",
      "name": "Samudra Veg",
      "cloudinaryImageId": "b7r9runu5yjkfsl20tri",
      "locality": "Pandurang Colony",
      "areaName": "Erandwane",
      "costForTwo": "₹450 for two",
      "cuisines": [
        "North Indian",
        "Chinese",
        "South Indian"
      ],
      "avgRating": 4.4,
      "veg": true,
      "feeDetails": {
        "restaurantId": "11887",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3700
      },
      "parentId": "176775",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 3.6,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "lastMileTravelString": "3.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-03 23:55:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-577ce804-4061-463f-9583-ead5a97deff8"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/samudra-veg-pandurang-colony-erandwane-pune-11887",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "7887",
      "name": "Priya",
      "cloudinaryImageId": "pawz87ibiatpceg5uvpa",
      "locality": "MG Road",
      "areaName": "Camp",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "South Indian",
        "Beverages"
      ],
      "avgRating": 4.4,
      "feeDetails": {
        "restaurantId": "7887",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3700
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3700
      },
      "parentId": "161324",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 25,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-03 22:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-577ce804-4061-463f-9583-ead5a97deff8"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/priya-mg-road-camp-pune-7887",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "434066",
      "name": "Roopali Restaurant - FC Road",
      "cloudinaryImageId": "ngmsdg7jvwbbg1rmxze7",
      "locality": "FC Road",
      "areaName": "Shivajinagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Beverages"
      ],
      "avgRating": 4.6,
      "feeDetails": {
        "restaurantId": "434066",
        "fees": [
          {
            "name": "BASE_DISTANCE",
            "fee": 3100
          },
          {
            "name": "BASE_TIME"
          },
          {
            "name": "ANCILLARY_SURGE_FEE"
          }
        ],
        "totalFee": 3100
      },
      "parentId": "261543",
      "avgRatingString": "4.6",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 23,
        "lastMileTravel": 2.4,
        "serviceability": "SERVICEABLE",
        "slaString": "23 mins",
        "lastMileTravelString": "2.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-08-03 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-577ce804-4061-463f-9583-ead5a97deff8"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/roopali-restaurant-fc-road-fc-road-shivajinagar-pune-434066",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]

const RestaurantCard = ({restaurant}) => {
  return(
    <div className="card"> 
      <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ restaurant.info.cloudinaryImageId }  alt="Restaurant image"  />
      <p>{restaurant.info.name}</p>
      <h4>{restaurant.info.locality+ ", " +restaurant.info.areaName}</h4>
      <h5>{restaurant.info.avgRating} Stars ({restaurant.info.totalRatingsString}ratings), {restaurant.info.costForTwo}</h5>
      <h5>{restaurant.info.cuisines.join(",")}</h5>
      <h5>{restaurant.info.sla.lastMileTravelString}s</h5>    
    </div>
  )
}
  
console.log(RestaurantList)
const Body = () => {
  return(
  <div className="restaurant-list">
    <RestaurantCard restaurant = {RestaurantList[0]} />
    <RestaurantCard restaurant = {RestaurantList[1]} />
    <RestaurantCard restaurant = {RestaurantList[2]} />
    <RestaurantCard restaurant = {RestaurantList[3]} />
    <RestaurantCard restaurant = {RestaurantList[0]} />
    <RestaurantCard restaurant = {RestaurantList[1]} />
    <RestaurantCard restaurant = {RestaurantList[2]} />
    <RestaurantCard restaurant = {RestaurantList[3]} />
    <RestaurantCard restaurant = {RestaurantList[0]} />
    <RestaurantCard restaurant = {RestaurantList[1]} />
    <RestaurantCard restaurant = {RestaurantList[2]} />
    <RestaurantCard restaurant = {RestaurantList[3]} />
    <RestaurantCard restaurant = {RestaurantList[0]} />
    <RestaurantCard restaurant = {RestaurantList[1]} />
    <RestaurantCard restaurant = {RestaurantList[2]} />   
    </div>
  )
}

const Footer = () => {

  return(   
// Since ReasonReact 0.7.0 you can use
    
    <em>Copyright Onkar Nawale (feel free to copy)</em>
  )
}

const Applayout = () => {
  return(
    <>
      <Header/>
      <Body/>
      <Footer/>     
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>)

