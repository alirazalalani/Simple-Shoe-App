const Images = [
  { image: require("../assets/food/banner1.jpg") },
  { image: require("../assets/food/banner2.jpg") },
  { image: require("../assets/food/banner3.jpg") },
  { image: require("../assets/food/banner5.jpg") },
  { image: require("../assets/food/banner4.jpg") },
];

export const markers = [
  {
    coordinate: {
      longitude: 67.0011,
      latitude: 24.8607,
    },
    title: "Nike Air Zoom Pegasus 39",
    description: "Good Quality",
    image: Images[0].image,
    rating: 4,
    reviews: 99,
  },
  {
    coordinate: {
      longitude: 33.6844,
      latitude: 73.0479,
    },
    title: "Nike React infinity 3",
    description: "Soft Sole",
    image: Images[1].image,
    rating: 5,
    reviews: 102,
  },
  {
    coordinate: {
      longitude: 68.3578,
      latitude: 25.396,
    },
    title: "Nike React Pegasus Trail 4",
    description: "Good Quality",
    image: Images[2].image,
    rating: 3,
    reviews: 220,
  },
  {
    coordinate: {
      longitude: 74.3587,
      latitude: 31.5204,
    },
    title: "Nike Free Run 5.0",
    description: "Recommended for everyone",
    image: Images[3].image,
    rating: 4,
    reviews: 48,
  },
  {
    coordinate: {
      longitude: 73.135,
      latitude: 31.4504,
    },
    title: "Nike Air Zoom Terra Kiger 8",
    description: "Good Quality",
    image: Images[4].image,
    rating: 4,
    reviews: 178,
  },
];
