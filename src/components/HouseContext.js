import React, { createContext, useEffect, useState } from "react";
import { MemoryRouter } from "react-router-dom";

const HouseContext = createContext();

function HouseProvider({ children }) {
  const navigate = MemoryRouter();
  const [loading, setLoading] = useState(false);
  const [houseItems, sethouses] = useState([]);
//   const [housesError, sethousesError] = useState([]);
  const [house, setHouse] = useState("");
  const [HouseError, setHouseError] = useState([]);
  const [visits, setVisits] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewsError, setReviewsError] = useState([]);
//   const [onLogin, setOnLogin] = useState(false);

  useEffect(() => {
    const payload = async () => {
      setLoading(true);
      const response = await fetch(
        "http://127.0.0.1:3000/houses"
      );

      const houses = await response.json();
      if (response.ok) {
        sethouses(houses);
        setLoading(false);
      } else {
        setHouseError(houses.errors);
      }
    };

    // Function call
    payload();
  }, []);

  const localIdJson = localStorage.getItem("houseId");
  const localId = localIdJson ? JSON.parse(localIdJson) : [];
  const [houseId, setHouseId] = useState(localId);

  useEffect(() => {
    const payload = async () => {
      setLoading(true);
      const response = await fetch(
        `http://127.0.0.1:3000/houses/${houseId}`
      );
      const house = await response.json();
      if (response.ok) {
        setHouse(house);
        setVisits(house.Visits);
        setLoading(false);
      } else {
        setHouseError(house.errors);
      }
    };

    payload();
  }, [houseId]);

  useEffect(() => {
    const data = localStorage.getItem("house");
    if (data) {
      sethouses(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const payload = async () => {
      const response = await fetch(
        `http://127.0.0.1:3000/houses/${houseId}/reviews`
      );

      const reviews = await response.json();
      if (response.ok) {
        setReviews(reviews);
      } else {
        setReviewsError(reviews.errors);
      }
    };

    payload();
  }, [houseId]);

  // Create functionality for adding a new review
  const [newReview, setNewReview] = useState({
    title: "",
    comment: "",
  });

  const [reviewError, setReviewError] = useState([]);

  function handleReviewChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNewReview({ ...newReview, [name]: value });
  }

  async function handleSubmitReview(event) {
    event.preventDefault();
    console.log(houseId);
    const response = await fetch(
      `http://127.0.0.1:3000/houses/${houseId}/reviews`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      }
    );
    console.log(response);
    const review = await response.json();
    if (response.ok) {
      setReviews([...reviews, review]);
      setNewReview({
        title: "",
        comment: "",
      });
      navigate("/restaurants/:id");
      // setTrigger(false);
    } else {
      setReviewError(review.errors);
    }
  }

  // end of functionality

  async function handleDeleteReview(reviewId) {
    console.log(reviewId);
    const response = await fetch(
      `http://127.0.0.1:3000/houses/${houseId}/reviews/${reviewId}`,
      { method: "DELETE" }
    );

    console.log(response);
    if (response.ok) {
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== reviewId)
      );
    }
  }

  function handleHouse(house) {
    setHouseId((prevstate) => (prevstate = house.id));
    localStorage.setItem("houseId", JSON.stringify(house.id));
    navigate(`/houses/${house.id}`);
  }

  // start of sign up functionality
//   const [signupData, setSignupData] = useState({
//     username: "",
//     password: "",
//     image_url: "",
//     password_confirmation: "",
//   });

//   const [signupError, setSignupError] = useState([]);
//   const [signupLoading, setSignupLoading] = useState(false);

//   function handleSignupChange(event) {
//     const name = event.target.name;
//     const value = event.target.value;
//     setSignupData({ ...signupData, [name]: value });
//   }

//   async function handleSubmitSignupDetails(event) {
//     event.preventDefault();
//     setSignupLoading(true);
//     const response = await fetch(
//       "https://restro-backend-production.up.railway.app/signup",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(signupData),
//       }
//     );

//     const userData = await response.json();
//     if (response.ok) {
//       setUser(userData);
//       setOnLogin(true);
//       setSignupError([]);
//       setSignupLoading(false);
//       navigate("/");
//       setSignupData({
//         username: "",
//         password: "",
//         image_url: "",
//         password_confirmation: "",
//       });
//     } else {
//       setSignupError(userData.errors);
//       setSignupLoading(false);
//     }
//   }
//   // end of sign up functionality

//   // Start of adding Login functionality
//   const [loginData, setLoginData] = useState({
//     username: "",
//     password: "",
//   });
//   const [user, setUser] = useState(null);
//   const [loginStatus, setLoginStatus] = useState(false);
//   const [loginError, setLoginError] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [triggerLogin, setTriggerLogin] = useState(true);

//   function handleLoginChange(event) {
//     const name = event.target.name;
//     const value = event.target.value;
//     setLoginData({
//       ...loginData,
//       [name]: value,
//     });
//   }

//   async function handleSubmitLoginDetails(event) {
//     event.preventDefault();
//     setIsLoading(true);
//     const response = await fetch(
//       "https://restro-backend-production.up.railway.app/login",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(loginData),
//       }
//     );

//     const userData = await response.json();

//     if (response.ok) {
//       setIsLoading(false);
//       setUser(userData);
//       setOnLogin(true);
//       setLoginStatus(true);
//       setLoginError([]);
//       setLoginData({
//         username: "",
//         password: "",
//       });
//       navigate("/");
//       setTriggerLogin(false);
//     } else {
//       setLoginError(userData.errors);
//     }
//   }
//   // End of Login functionality

//   // Logout functionality
//   function handleLogoutClick() {
//     fetch("https://restro-backend-production.up.railway.app/logout", {
//       method: "DELETE",
//     }).then((r) => {
//       if (r.ok) {
//         setUser(null);
//         setLoginStatus(false);
//         // navigate("/login");
//       }
//     });
//   }
//   //end of logout functionality
//   const [trigger, setTrigger] = useState(false);

//   function handleAddReview() {
//     setTrigger(true);
//   }
//   const [search, setSearch] = useState("");
//   function handleSearchChange(event) {
//     const value = event.target.value;
//     setSearch(value);
//   }

//   const restaurants = restaurantItems.filter((restaurant) =>
//     restaurant.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const values = {
//     setRestaurant,
//     loading,
//     restraurantsError,
//     foods,
//     restaurants,
//     restaurant,
//     restaurantError,
//     handleRestaurant,
//     setRestaurants,

//     // State and functions for login
//     handleLogoutClick,
//     handleLoginChange,
//     handleSubmitLoginDetails,
//     loginError,
//     loginData,
//     isLoading,
//     loginStatus,
//     triggerLogin,
//     onLogin,
//     user,
//     setUser,

//     // State and functions for sign up
//     handleSignupChange,
//     handleSubmitSignupDetails,
//     signupData,
//     signupError,
//     signupLoading,

//     //Add functionality for getting and setting reviews
//     reviews,
//     reviewsError,

//     //Add functionality for getting and setting book
//     trigger,
//     setTrigger,
//     handleAddReview,

//     newReview,
//     reviewError,
//     handleReviewChange,
//     handleSubmitReview,
//     handleDeleteReview,

//     handleSearchChange,
//     search,
//   };

//   return (
//     <RestaurantContext.Provider value={values}>
//       {children}
//     </RestaurantContext.Provider>
//   );
}

export { HouseContext, HouseProvider };