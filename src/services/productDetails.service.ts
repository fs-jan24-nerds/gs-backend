import { ProductDetails } from '../types.js';

const productDetails = [
  {
    id: 'apple-iphone-7-32gb-black',
    category: 'phones',
    namespaceId: 'apple-iphone-7',
    name: 'Apple iPhone 7 32GB Black',
    capacityAvailable: ['32GB'],
    capacity: '32GB',
    priceRegular: 400,
    priceDiscount: 375,
    colorsAvailable: ['black', 'rosegold', 'gold', 'silver'],
    color: 'black',
    images: [
      'img/phones/apple-iphone-7/black/00.webp',
      'img/phones/apple-iphone-7/black/01.webp',
      'img/phones/apple-iphone-7/black/02.webp',
      'img/phones/apple-iphone-7/black/03.webp',
      'img/phones/apple-iphone-7/black/04.webp',
    ],
    description: [
      {
        title: 'And then there was Pro',
        text: [
          'A transformative triple-camera system that adds tons of capability without complexity.',
          'An unprecedented leap in battery life. And a mind-blowing chip that doubles down on machine learning and pushes the boundaries of what a smartphone can do. Welcome to the first iPhone powerful enough to be called Pro.',
        ],
      },
      {
        title: 'Camera',
        text: [
          'Meet the first triple-camera system to combine cutting-edge technology with the legendary simplicity of iPhone. Capture up to four times more scene. Get beautiful images in drastically lower light. Shoot the highest-quality video in a smartphone — then edit with the same tools you love for photos. You’ve never shot with anything like it.',
        ],
      },
      {
        title:
          'Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.',
        text: [
          'iPhone 11 Pro lets you capture videos that are beautifully true to life, with greater detail and smoother motion. Epic processing power means it can shoot 4K video with extended dynamic range and cinematic video stabilization — all at 60 fps. You get more creative control, too, with four times more scene and powerful new editing tools to play with.',
        ],
      },
    ],
    screen: "4.7' IPS",
    resolution: '1334x750',
    processor: 'Apple A10',
    ram: '2GB',
    camera: '12 Mp + 7 Mp',
    zoom: 'Digital, 5x',
    cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
  },
  {
    id: 'apple-watch-series-3-38mm-space-gray',
    category: 'accessories',
    namespaceId: 'apple-watch-series-3',
    name: 'Apple Watch Series 3 38mm Space Gray',
    capacityAvailable: ['38mm', '42mm'],
    capacity: '38mm',
    priceRegular: 199,
    priceDiscount: 169,
    colorsAvailable: [' gray', 'silver', 'gold'],
    color: 'space gray',
    images: [
      'img/accessories/apple-watch-series-3/space-gray/00.webp',
      'img/accessories/apple-watch-series-3/space-gray/01.webp',
      'img/accessories/apple-watch-series-3/space-gray/02.webp',
    ],
    description: [
      {
        title: 'Monitor your health',
        text: [
          'The Apple Watch Series 3 is equipped with sensors to track your heart rate, calories burned, and other fitness metrics throughout the day. It can even track your workouts and suggest personalized fitness goals.',
        ],
      },
      {
        title: 'Stay connected on the go',
        text: [
          'With cellular connectivity, you can make calls and send texts from your wrist even without your iPhone nearby. And with Siri, you can get directions, send messages, and set reminders hands-free.',
        ],
      },
      {
        title: 'Stream your favorite music',
        text: [
          'With Apple Music and Siri, you can stream over 75 million songs on your Apple Watch Series 3. Or listen to your favorite podcasts, audiobooks, and radio stations.',
        ],
      },
    ],
    screen: "1.3' OLED",
    resolution: '272x340',
    processor: 'Apple S3',
    ram: '768MB',
    cell: ['Wi-Fi', 'Bluetooth', 'LTE'],
  },
  {
    id: 'apple-ipad-pro-11-2021-128gb-spacegray',
    category: 'tablets',
    namespaceId: 'apple-ipad-pro-11-2021',
    name: 'Apple iPad Pro 11 (2021) 128GB Space Gray',
    capacityAvailable: ['128GB', '256GB', '512GB', '1TB', '2TB'],
    capacity: '128GB',
    priceRegular: 799,
    priceDiscount: 749,
    colorsAvailable: ['spacegray', 'silver'],
    color: 'spacegray',
    images: [
      'img/tablets/apple-ipad-pro-11-2021/spacegray/00.webp',
      'img/tablets/apple-ipad-pro-11-2021/spacegray/01.webp',
      'img/tablets/apple-ipad-pro-11-2021/spacegray/02.webp',
    ],
    description: [
      {
        title: 'Powerful Performance',
        text: [
          'Experience incredible power and performance with the Apple iPad Pro 11. With the M1 chip, it delivers a new level of performance, making it faster and more efficient than ever before.',
          "Whether you're editing photos, designing artwork, or multitasking with demanding apps, the iPad Pro 11 handles it all with ease.",
        ],
      },
      {
        title: 'Stunning Liquid Retina Display',
        text: [
          "Enjoy a vibrant and immersive visual experience on the iPad Pro 11's Liquid Retina display. With ProMotion technology and True Tone, the display adapts to your environment, providing smooth scrolling, precise color accuracy, and incredible detail.",
          "From watching movies to editing videos, the iPad Pro 11's display brings your content to life with stunning clarity.",
        ],
      },
      {
        title: 'Versatile Camera System',
        text: [
          "Capture stunning photos and videos with the iPad Pro 11's advanced camera system. Featuring a 12MP Ultra Wide front camera and a 12MP Wide rear camera with LiDAR scanner, you can take high-quality shots and enjoy augmented reality experiences.",
          "Whether you're video calling, scanning documents, or recording 4K videos, the iPad Pro 11's camera system delivers exceptional performance.",
        ],
      },
    ],
    screen: "11' Liquid Retina",
    resolution: '2388x1668',
    processor: 'Apple M1',
    ram: '8GB',
    camera: '12MP + 12MP',
    zoom: 'Digital zoom up to 5x',
    cell: ['Not applicable'],
  },
];

export const getById = (id: string) => {
  return productDetails.find((product) => product.id === id) as ProductDetails;
};

// export const getAll = () => {
// 	return productDetails;
// }

// export const create = (body: ProductDetails) => {
// 	productDetails.push(body);

// 	return body;
// }

// export const update = (id: string, body: ProductDetails) => {
// 	const productDetails = getById(id);

// 	Object.assign(productDetails, body);

// 	return productDetails;
// }

// export const remove = (id: string) => {
// 	productDetails = productDetails.filter(product => product.id !== id);
// }
