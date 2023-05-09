import {ProductCard } from  './app/shared/models/product-card' 

export const HOUSING_OFFERS: ProductCard[] = [
  {
    id: 0,
    idSeller: 9,
    address: "South Bridge Avenue 64",
    bedrooms: 4,
    city: "New York",
    image: 'https://picsum.photos/seed/'+Math.round(Math.random()*10000)+'/1920/1080',
    description: "With ample natural light and breathtaking views of the surrounding landscape, this is an opportunity to own a truly exceptional property in a prime location.",
    price: 5300,
  },
  {
    id: 1,
    idSeller: 1,
    address: "Palm Springs 256",
    bedrooms: 3,
    city: "New York",
    image: 'https://picsum.photos/seed/'+Math.round(Math.random()*10000) +'/1920/1080',
    description: "With high-end finishes, and state-of-the-art technology, this stunning home offers the perfect blend of luxury and functionality",
    price: 4900,
  },
  {
    id: 2,
    idSeller: 2,
    address: "Rock Valley 512",
    bedrooms: 4,
    city: "New York",
    image: 'https://picsum.photos/seed/'+Math.round(Math.random()*10000) +'/1920/1080',
    description: "Enjoy spacious, light-filled rooms that flow seamlessly together, creating an environment that is both inviting and awe-inspiring.",
    price: 5700,
  },
  {
    id: 3,
    idSeller: 3,
    address: "Grapevine Street 128",
    bedrooms: 3,
    city: "New York",
    image: 'https://picsum.photos/seed/'+Math.round(Math.random()*10000)+'/1920/1080',
    description: "This breathtaking modern house for sale boasts an open-concept layout, sleek finishes, and expansive windows that offer stunning views of the surrounding landscape",
    price: 4750,
  },
  {
    id: 4,
    idSeller: 4,
    address: "1234 Maple Street",
    city: "San Francisco",
    bedrooms: 3,
    image: "https://picsum.photos/seed/2319/1920/1080",
    description: "Cozy and modern 3-bedroom apartment in the heart of the city. Fully furnished and equipped with all the amenities you need for a comfortable stay. Walking distance to restaurants, shops, and public transportation. Don't miss out on this amazing opportunity!",
    price: 2500
  },
  {
    id: 5,
    idSeller: 5,
    address: "5678 Oak Avenue",
    city: "Los Angeles",
    bedrooms: 2,
    image: "https://picsum.photos/seed/5946/1920/1080",
    description: "Charming 2-bedroom house in a quiet residential neighborhood. Perfect for a small family or roommates. Recently renovated with updated appliances and fixtures. Spacious backyard for outdoor activities and relaxation. Come see it today!",
    price: 1800
  },
  {
    id: 6,
    idSeller: 6,
    address: "9012 Elm Road",
    city: "New York",
    bedrooms: 4,
    image: "https://picsum.photos/seed/4568/1920/1080",
    description: "Luxurious 4-bedroom penthouse with stunning views of the city skyline. State-of-the-art appliances and finishes throughout. Rooftop terrace for entertaining and enjoying the views. Located in the heart of the city's most vibrant neighborhood. Schedule a viewing now!",
    price: 5000
  },
  {
    id: 7,
    idSeller: 7,
    address: "3456 Pine Lane",
    city: "Chicago",
    bedrooms: 1,
    image: "https://picsum.photos/seed/7891/1920/1080",
    description: "Adorable 1-bedroom apartment in a historic building. Lots of character and charm, with modern updates. Ideal for a single person or couple. Close to public transportation and local attractions. Don't wait, book your showing today!",
    price: 1200
  },
  {
    id: 8,
    idSeller: 8,
    address: "7890 Cedar Street",
    city: "Miami",
    bedrooms: 3,
    image: "https://picsum.photos/seed/3645/1920/1080",
    description: "Spacious and stylish 3-bedroom condo in a luxury building. Amenities include a pool, gym, and concierge services. Perfect for those who love the finer things in life. Conveniently located near restaurants, shopping, and entertainment. Contact us today for more information!",
    price: 3500
  },
{
    id: 9,
    idSeller: 9,
    address: "321 Main Street",
    city: "Seattle",
    bedrooms: 2,
    image: "https://picsum.photos/seed/8765/1920/1080",
    description: "Modern 2-bedroom apartment in a prime location. Recently renovated with brand new appliances and fixtures. Lots of natural light and great views. Walking distance to shops, restaurants, and public transportation. Don't miss out on this fantastic opportunity!",
    price: 2000
  },
  {
    id: 10,
    idSeller: 10,
    address: "456 Market Avenue",
    city: "Boston",
    bedrooms: 3,
    image: "https://picsum.photos/seed/1398/1920/1080",
    description: "Beautiful 3-bedroom townhouse in a quiet residential neighborhood. Fully furnished and equipped with everything you need for a comfortable stay. Spacious living areas and bedrooms, plus a private backyard. Perfect for families or roommates. Schedule a showing today!",
    price: 2800
  },
  {
    id: 11,
    idSeller: 1,
    address: "789 Park Place",
    city: "Houston",
    bedrooms: 1,
    image: "https://picsum.photos/seed/7420/1920/1080",
    description: "Cozy 1-bedroom apartment in a well-maintained building. Lots of character and charm, with hardwood floors and vintage fixtures. Convenient location near public transportation and local amenities. Ideal for a single person or couple. Contact us to schedule a tour!",
    price: 1000
  },
  {
    id: 12,
    idSeller: 2,
    address: "2345 Broadway",
    city: "Denver",
    bedrooms: 4,
    image: "https://picsum.photos/seed/5021/1920/1080",
    description: "Stunning 4-bedroom house in a scenic mountain setting. Perfect for nature lovers and outdoor enthusiasts. Spacious living areas and bedrooms, plus a large deck for entertaining and relaxing. Don't miss out on this unique opportunity!",
    price: 4000
  },
  {
    id: 13,
    idSeller: 3,
    address: "6789 Chestnut Drive",
    city: "Austin",
    bedrooms: 2,
    image: "https://picsum.photos/seed/6753/1920/1080",
    description: "Charming 2-bedroom bungalow in a desirable neighborhood. Recently updated with modern amenities, but still retains its original character. Fenced backyard with plenty of space for outdoor activities. Walking distance to shops, restaurants, and entertainment. Contact us to schedule a viewing!",
    price: 1800
  },
  {
    id: 14,
    idSeller: 4,
    address: "221B Baker St",
    city: "London",
    bedrooms: 3,
    image: "https://picsum.photos/seed/1234/1920/1080",
    description: "Spacious and elegant 3-bedroom flat located in the heart of London. Recently renovated with luxurious finishes and high-end appliances. Features a large balcony with stunning views of the city. Walking distance to shops, restaurants, and public transportation.",
    price: 5000
  },
  {
    id: 15,
    idSeller: 5,
    address: "1600 Pennsylvania Ave NW",
    city: "Washington",
    bedrooms: 4,
    image: "https://picsum.photos/seed/5678/1920/1080",
    description: "Historic 4-bedroom house located in the prestigious neighborhood of Pennsylvania Avenue. Fully furnished and equipped with modern amenities, while preserving its original charm and character. Features a spacious backyard and ample off-street parking. Close proximity to shops, restaurants, and government buildings.",
    price: 10000
  },
  {
    id: 16,
    idSeller: 6,
    address: "10 Downing St",
    city: "London",
    bedrooms: 2,
    image: "https://picsum.photos/seed/9012/1920/1080",
    description: "Charming and cozy 2-bedroom flat located in the iconic Downing Street. Recently renovated with modern finishes and appliances. Features a private terrace and garden. Close proximity to shops, restaurants, and tourist attractions.",
    price: 3000
  },
  {
    id: 17,
    idSeller: 7,
    address: "1604 Elm St",
    city: "Dallas",
    bedrooms: 1,
    image: "https://picsum.photos/seed/3456/1920/1080",
    description: "Modern and stylish 1-bedroom apartment located in the trendy Elm Street district. Fully furnished and equipped with high-end appliances and finishes. Features a rooftop terrace with panoramic views of the city. Walking distance to shops, restaurants, and entertainment.",
    price: 2500
  },
  {
    id: 18,
    idSeller: 8,
    address: "12 Rue de l'Amiral de Coligny",
    city: "Paris",
    bedrooms: 2,
    image: "https://picsum.photos/seed/7890/1920/1080",
    description: "Sophisticated and elegant 2-bedroom apartment located in the heart of Paris. Recently renovated with premium materials and finishes. Features a large balcony overlooking the city. Walking distance to shops, restaurants, and public transportation.",
    price: 6000
  }
]