import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
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
    name: "iPhone 14 Pro Max",
    price: 1099,
    description:
      "The iPhone 14 Pro Max combines stunning design, pro-level cameras, A16 Bionic chip, and advanced display technology. Shoot cinematic videos, capture lifelike photos, and enjoy unparalleled performance with this flagship smartphone.",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha&.v=1660753619946",
    categoryId: 1,
    stock: 8,
  },
  {
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
    name: "MacBook Pro 16",
    price: 2499,
    description:
      "The MacBook Pro 16 redefines power and performance with the M1 Pro chip, Liquid Retina XDR display, and all-day battery life. Ideal for creatives and professionals who need top-tier performance in a sleek, portable design.",
    image:
      "https://outtec.com.ar/wp-content/uploads/2022/05/2618-1.jpg",
    categoryId: 2,
    stock: 7,
  },
  {
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
    name: "iPad Air",
    price: 599,
    description:
      "The iPad Air offers powerful performance in a thin and lightweight design, with a stunning 10.9-inch Liquid Retina display, A14 Bionic chip, and Apple Pencil support. Perfect for productivity, creativity, and entertainment.",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-purple-202203?wid=940&hei=1112&fmt=png-alpha&.v=1645066953538",
    categoryId: 3,
    stock: 12,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111851_sp880-airpods-Pro-2nd-gen.png",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Max",
    price: 549,
    description:
      "The AirPods Max reimagine over-ear headphones with high-fidelity audio, active noise cancellation, and spatial audio. Experience a new world of sound with unparalleled comfort and style.",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1604022365000",
    categoryId: 4,
    stock: 5,
  },
  {
    name: "Apple iPhone 13 Pro Max Camera System",
    price: 1099,
    description:
      "The iPhone 13 Pro Max’s camera system brings advanced low-light performance, macro photography, and pro-level video to your pocket. Capture cinematic shots with ease and enjoy unmatched detail in every frame.",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-green-select?wid=940&hei=1112&fmt=png-alpha&.v=1645036275211",
    categoryId: 5,
    stock: 8,
  },
  {
    name: "Apple iPhone 14 Pro Max Camera System",
    price: 1299,
    description:
      "Capture professional-level photos and videos with the advanced triple-camera system of the iPhone 14 Pro Max. Night mode, ultra-wide capabilities, and 4K cinematic video take your content creation to new heights.",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-max-gold-select?wid=940&hei=1112&fmt=png-alpha&.v=1660753619946",
    categoryId: 5,
    stock: 6,
  },
  {
    name: "Apple Compact Photo Printer",
    price: 249,
    description:
      "Print high-resolution photos from your Apple devices with the Apple Compact Photo Printer. Designed for creatives, this printer ensures brilliant colors and fine details in every print.",
    image:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*cw72cDOJsTN72kr9.jpg",
    categoryId: 6,
    stock: 8,
  },
  {
    name: "Apple Pro Display XDR",
    price: 4999,
    description:
      "Apple Pro Display XDR redefines the capabilities of a professional display with extreme dynamic range, 6K resolution, and precise color accuracy. Designed for professionals who demand the highest performance.",
    image:
      "https://www.apple.com/newsroom/images/product/mac/standard/Apple_Dev-Quotes-Mac-Pro-Display-Pro_Mac-Pro-Display-Pro_big.jpg.large_2x.jpg",
    categoryId: 7,
    stock: 4,
  },
  {
    name: "Apple Studio Display",
    price: 1599,
    description:
      "The Apple Studio Display features a stunning 5K Retina screen, excellent color accuracy, and a built-in 12MP ultra-wide camera, offering an unparalleled viewing and video conferencing experience for creatives and professionals.",
    image:
      "https://www.ventasrosario.com.ar/wp-content/uploads/2023/03/stand-mount-gallery-3-202203.jpg",
    categoryId: 7,
    stock: 6,
  },
  {
    name: "Apple iCloud 2TB Storage Plan",
    price: 10,
    description:
      "Store all your files, photos, and backups securely with the Apple iCloud 2TB storage plan. Access your data from anywhere and share files easily with friends and family.",
    image:
      "https://www.cnet.com/a/img/resize/6b9cde108131ffe4397fe038ee05f6967291a860/hub/2023/09/14/b77b39d4-6a27-4be4-8e7c-2507523f5ba9/new-6t-12t-icloud-plans.png?auto=webp&fit=crop&height=900&width=1200",
    categoryId: 8,
    stock: 100,
  },
  {
    name: "Apple Time Capsule 3TB",
    price: 299,
    description:
      "The Apple Time Capsule provides seamless wireless backup for all your Apple devices. With 3TB of storage, you can keep your files safe and secure without lifting a finger.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Appletimecapsule.jpg/375px-Appletimecapsule.jpg",
    categoryId: 8,
    stock: 20,
  },
  {
    name: "Apple MagSafe Charger",
    price: 39,
    description:
      "The MagSafe Charger makes wireless charging a snap. Perfectly aligned magnets attach to your iPhone for faster wireless charging and a seamless experience.",
    image:
      "https://hard-digital.com.ar/public/files/Cargador%20Inalambrico%20Apple%20Magsafe/1.webp",
    categoryId: 9,
    stock: 15,
  },
  {
    name: "Apple Leather Case for iPhone 14 Pro",
    price: 59,
    description:
      "Crafted from specially tanned and finished leather, the Apple Leather Case provides a luxurious feel and protects your iPhone 14 Pro. Over time, it develops a natural patina, giving it a unique look.",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MHLR3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1601688938000",
    categoryId: 9,
    stock: 25,
  }
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
