// Sample merchants data for the SwiftDrop demo app
const merchants = [
  {
    id: 'm1',
    name: 'Café Marrakech',
    rating: 4.7,
    etaMins: 20,
    imageUrl: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: 'm2',
    name: 'Casablanca Grill',
    rating: 4.5,
    etaMins: 15,
    imageUrl: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: 'm3',
    name: 'Rabat Pizza',
    rating: 4.6,
    etaMins: 25,
    imageUrl: 'https://images.pexels.com/photos/724216/pexels-photo-724216.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: 'm4',
    name: 'Tangier Sushi',
    rating: 4.8,
    etaMins: 30,
    imageUrl: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&h=350'
  },
  {
    id: 'm5',
    name: 'Fez Kebab House',
    rating: 4.4,
    etaMins: 18,
    imageUrl: 'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&h=350'
  }
];

// Sample menu data per merchant
const menus = {
  m1: [
    { id: 'm1i1', name: 'Chicken Tagine', price: 45 },
    { id: 'm1i2', name: 'Lamb Couscous', price: 55 },
    { id: 'm1i3', name: 'Mint Tea', price: 15 }
  ],
  m2: [
    { id: 'm2i1', name: 'Grilled Fish', price: 60 },
    { id: 'm2i2', name: 'Beef Kebab', price: 50 },
    { id: 'm2i3', name: 'Meatball Sandwich', price: 45 }
  ],
  m3: [
    { id: 'm3i1', name: 'Margherita Pizza', price: 40 },
    { id: 'm3i2', name: 'Pepperoni Pizza', price: 50 },
    { id: 'm3i3', name: 'Veggie Pizza', price: 45 }
  ],
  m4: [
    { id: 'm4i1', name: 'Sushi Roll', price: 35 },
    { id: 'm4i2', name: 'Tempura', price: 30 },
    { id: 'm4i3', name: 'Miso Soup', price: 20 }
  ],
  m5: [
    { id: 'm5i1', name: 'Kebab Wrap', price: 30 },
    { id: 'm5i2', name: 'Falafel Plate', price: 25 },
    { id: 'm5i3', name: 'Fries', price: 15 }
  ]
};
