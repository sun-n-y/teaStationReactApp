import productImg1 from './images/product-1.jpeg';
import productImg2 from './images/product-2.jpeg';
import productImg3 from './images/product-3.jpeg';

export const pageLinks = [
  {
    id: 1,
    href: 'index.html',
    text: 'home',
  },
  {
    id: 2,
    href: 'skills.html',
    text: 'skills',
  },
  {
    id: 3,
    href: 'about.html',
    text: 'about',
  },
  {
    id: 4,
    href: 'products.html',
    text: 'product',
  },
];

export const skillsCards = [
  {
    id: 1,
    title: 'made in USA',
    text: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, accusantium.',
    icon: 'fas fa-mug-hot',
  },
  {
    id: 2,
    title: 'relaxation',
    text: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, accusantium.',
    icon: 'fas fa-glass-cheers',
  },
  {
    id: 3,
    title: 'energy',
    text: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, accusantium.',
    icon: 'fas fa-bomb',
  },
  {
    id: 4,
    title: 'family recipe',
    text: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus, accusantium.',
    icon: 'fas fa-mortar-pestle',
  },
];

export const products = [
  {
    id: 1,
    image: productImg1,
    title: 'ginger peach tea',
    price: 6.99,
  },

  {
    id: 2,
    image: productImg2,
    title: 'white tea',
    price: 1.99,
  },

  {
    id: 3,
    image: productImg3,
    title: 'fruit sangria',
    price: 9.99,
  },
];

export const services = [
  {
    id: 1,
    image: productImg1,
    title: 'custom recipe',
    icon: 'fas fa-mortar-pestle fa-fw',
    href: 'products.html',
    text: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt necessitatibus architecto ullam recusandae distinctio reprehenderit.',
  },

  {
    id: 2,
    image: productImg2,
    title: 'custom recipe',
    icon: 'fas fa-home fa-fw',
    href: 'products.html',
    text: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit.Incidunt necessitatibus architecto ullam recusandae distinctio reprehenderit.',
  },

  {
    id: 3,
    image: productImg3,
    title: 'custom recipe',
    icon: 'fas fa-mug-hot fa-fw',
    href: 'products.html',
    text: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt necessitatibus architecto ullam recusandae distinctio reprenderit ',
  },
];

export const contacts = [
  {
    id: 1,
    icon: 'fas fa-location-arrow',
    type: 'address',
    text: '123 North Pole EarthOne, 00001',
  },
  {
    id: 2,
    icon: 'fas fa-envelope',
    type: 'email',
    text: 'email@email.com',
  },
  {
    id: 3,
    icon: 'fas fa-phone',
    type: 'telephone',
    text: '+123456789',
  },
];

export const socials = [
  {
    id: 1,
    href: 'https://www.twitter.com',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https://www.twitter.com',
    icon: 'fab fa-instagram',
  },
];
