export type Services = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: any;
};

export const services: Services[] = [
  {
    id: '1',
    name: 'Hair Cut',
    price: 250,
    description: 'Stylish cut with blow dry',
    image: require('../assets/HomeScreen/ServiceCard/image.png'),
  },
  {
    id: '2',
    name: 'Hair Coloring',
    price: 250,
    description: 'Long-lasting shades',
    image: require('../assets/HomeScreen/ServiceCard/image.png'),
  },
  {
    id: '3',
    name: 'Facial',
    price: 250,
    description: 'Glow facial for soft skins',
    image: require('../assets/HomeScreen/ServiceCard/image.png'),
  },
];
