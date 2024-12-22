import { Iproducts } from "@/interfaces/Types";

const preLoadProducts: Iproducts[] = [
  {
    id: 1,
    name: "iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "https://acdn.mitiendanube.com/stores/001/116/601/products/11-white-new-019684e9c7fbd74ada17174492669905-1024-1024.png",
    categoryId: 1,
    stock: 10,
  },
  {
    id: 2,
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://dcdn.mitiendanube.com/stores/001/604/382/products/macbook-air-space-gray-21-b2ca0939fc563055ff16223050798309-1024-1024.png",
    categoryId: 2,
    stock: 10,
  },
  {
    id: 3,
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://telefonika.com/wp-content/uploads/2021/02/Apple-iPad-Pro-12.9-inch-2022-6th-Generation.png",
    categoryId: 3,
    stock: 10,
  },
  {
    id: 4,
    name: "Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://www.alemaniacell.com/uploads/imagen-principal15897-1-1607717768.png",
    categoryId: 4,
    stock: 10,
  },
  {
    id: 5,
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111851_sp880-airpods-Pro-2nd-gen.png",
    categoryId: 5,
    stock: 10,
  },
  {
    id: 6,
    name: "HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image:
      "https://fbi.cults3d.com/uploaders/31969888/illustration-file/de8c3ff7-07e3-4af1-9812-bc69c31e21b7/1.png",
    categoryId: 6,
    stock: 10,
  },
];
export default preLoadProducts;
