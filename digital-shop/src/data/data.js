import { v4 as uuidv4 } from 'uuid';
import off1 from "./../asset/product/off/off-1.webp"
import off2 from "./../asset/product/off/off-2.webp"
import off3 from "./../asset/product/off/off-3.webp"
import off4 from "./../asset/product/off/off-4.webp"
import off5 from "./../asset/product/off/off-5.webp"
import off6 from "./../asset/product/off/off-6.webp"
import off7 from "./../asset/product/off/off-7.webp"
import off8 from "./../asset/product/off/off-8.webp"
import off9 from "./../asset/product/off/off-9.webp"
import off10 from "./../asset/product/off/off-10.webp"

import laptop1 from "./../asset/product/laptop/laptop1.webp"
import laptop2 from "./../asset/product/laptop/laptop2.webp"
import laptop3 from "./../asset/product/laptop/laptop3.webp"
import laptop4 from "./../asset/product/laptop/laptop4.webp"
import laptop5 from "./../asset/product/laptop/laptop5.webp"
import laptop6 from "./../asset/product/laptop/laptop6.webp"
import laptop7 from "./../asset/product/laptop/laptop7.webp"
import laptop8 from "./../asset/product/laptop/laptop8.webp"
import laptop9 from "./../asset/product/laptop/laptop9.webp"

import mobile1 from "./../asset/product/mobile/mobile1.webp"
import mobile2 from "./../asset/product/mobile/mobile2.webp"
import mobile3 from "./../asset/product/mobile/mobile3.webp"
import mobile4 from "./../asset/product/mobile/mobile4.webp"
import mobile5 from "./../asset/product/mobile/mobile5.webp"
import mobile6 from "./../asset/product/mobile/mobile6.webp"
import mobile7 from "./../asset/product/mobile/mobile7.webp"

import comp1 from "./../asset/product/com/comp1.webp"
import comp2 from "./../asset/product/com/comp2.webp"
import comp3 from "./../asset/product/com/comp3.webp"
import comp4 from "./../asset/product/com/comp4.webp"
import comp5 from "./../asset/product/com/comp5.webp"
import comp6 from "./../asset/product/com/comp6.webp"
import comp7 from "./../asset/product/com/comp7.webp"
import comp8 from "./../asset/product/com/comp8.webp"
import comp9 from "./../asset/product/com/comp9.webp"

const products=[
    {
        name:"گوشی موبایل شیائومی مدل Redmi Note 13 4G ظرفیت 256 گیگابایت رم 8 گیگابایت - رام گلوبال پک اندونزی",
        price:"11250000",
        off:"10700000",
        category:"offer",
        image:off1,
        time:259200000
    },
    {
        name:"گوشی موبایل آنر X5 Plus 4G ظرفیت 64 گیگابایت رم 4 گیگابایت",
        price:"6380000",
        off:"6270000",
        category:"offer",
        image:off2,
        time:518400000
    },
    {
        name:"دستگاه تصفیه هوا پاکشوما مدل گیگا MPK-700",
        price:"12750000",
        off:"10790000",
        category:"offer",
        image:off3,
        time:86400000
    },
    {
        name:"پارتی باکس جی بی ال مدل partybox Stage 320",
        price:"31990000",
        off:"29999000",
        category:"offer",
        image:off4,
        time:1555200000
    },
    {
        name:"لپ تاپ ایسوس 15.6 اینچی مدل Vivobook 15 X1504VA i7 1355U 8GB 512GB",
        price:"40299000",
        off:"38099000",
        category:"offer",
        image:off5,
        time:1555200000
    },
    {
        name:"گوشی موبایل سامسونگ Galaxy S24 Ultra 5G ظرفیت 256 گیگابایت رم 12 گیگابایت - ویتنام",
        price:"66999000",
        off:"65899000",
        category:"offer",
        image:off6,
        time:86400000
    },
    {
        name:"مانیتور ایکس ویژن مدل XS2260H سایز 22 اینچ",
        price:"4688000",
        off:"4479000",
        category:"offer",
        image:off7,
        time:259200000
    },
    {
        name:"کولر گازی جی پلاس 18 هزار مدل GAC-HV18TV1",
        price:"38800000",
        off:"30700000",
        category:"offer",
        image:off8,
        time:1555200000
    },
    {
        name:"مچ بند هوشمند شیائومی مدل Mi Band 9 - گلوبال",
        price:"2099000",
        off:"1989000",
        category:"offer",
        image:off9,
        time:25200000
    },
    {
        name:"گوشی موبایل ریلمی مدل Note 50 4G ظرفیت 64 گیگابایت رم 3 گیگابایت",
        price:"5140000",
        off:"4970000",
        category:"offer",
        image:off10,
        time:777600000
    },
    {
        name:"گوشی موبایل سامسونگ Galaxy S24 Ultra 5G ظرفیت 1 ترابایت رم 12 گیگابایت - ویتنام",
        price:"105000000",
        off:"0",
        category:"mobile",
        image:mobile1
    },
    {
        name:"گوشی موبایل هوآوی مدل Pura 70 ظرفیت 256 گیگابایت رم 12 گیگابایت",
        price:"49740000",
        off:"0",
        category:"mobile",
        image:mobile2
    },
    {
        name:"گوشی موبایل اپل مدل iPhone 13 CH/A Not Active ظرفیت 128 گیگابایت - رم 4 گیگابایت",
        price:"42299000",
        off:"0",
        category:"mobile",
        image:mobile3
    },
    {
        name:"گوشی موبايل ناتینگ مدل Phone 2 5G ظرفیت 512 گیگابایت رم 12 گیگابایت",
        price:"47700000",
        off:"46990000",
        category:"mobile",
        image:mobile4,
        time:777600000
    },
    {
        name:"گوشی موبایل آنر مدل 90 ظرفیت 256 گیگابایت رم 8 گیگابایت",
        price:"21079000",
        off:"0",
        category:"mobile",
        image:mobile5
    },
    {
        name:"گوشی موبايل شیائومی مدل 14T ظرفیت 256 گیگابایت رم 12 گیگابایت",
        price:"29800000",
        off:"29799000",
        category:"mobile",
        image:mobile6,
        time:259200000
    },
    {
        name:"گوشی موبايل شیائومی مدل 14T Pro ظرفیت 512 گیگابایت رم 12 گیگابایت",
        price:"41800000",
        off:"0",
        category:"mobile",
        image:mobile7
    },
    {
        name:"لپ تاپ 13 اینچی اپل مدل MacBook Air MGND3 2020",
        price:"55000000",
        off:"0",
        category:"laptop",
        image:laptop1
    },
    {
        name:"لپ تاپ دل 15.6 اینچی مدل Vostro 3530 i7 1355U 16GB 512GB",
        price:"50499000",
        off:"0",
        category:"laptop",
        image:laptop2
    },
    {
        name:"لپ تاپ اچ پی 15.6 اینچی مدل 15s FQ5291nia i3 1215U 4GB 256GB",
        price:"27640000",
        off:"0",
        category:"laptop",
        image:laptop3
    },
    {
        name:"لپ تاپ 13 اینچی اپل مدل MacBook Air CTO 2022 M2 16GB 256GB (8C-8C)",
        price:"69500000",
        off:"0",
        category:"laptop",
        image:laptop4
    },
    {
        name:"لپ تاپ 15.6 اینچی ایسوس مدل E510MA-N4020 4GB 256SSD INTEL",
        price:"15300000",
        off:"0",
        category:"laptop",
        image:laptop5
    },
    {
        name:"لپ تاپ دل 15.6 اینچی مدل Vostro 3530 i7 1355U 8GB 512GB",
        price:"49999000",
        off:"0",
        category:"laptop",
        image:laptop6
    },
    {
        name:"لپ تاپ لنوو 16 اینچی مدل Legion 5 i7 14650HX 32GB 1TB RTX4060",
        price:"92000000",
        off:"0",
        category:"laptop",
        image:laptop7
    },
    {
        name:"لپ تاپ لنوو 15.6 اینچی مدل V15 R3 7320U 8GB 1TB",
        price:"22900000",
        off:"0",
        category:"laptop",
        image:laptop8
    },
    {
        name:"لپ تاپ دل 15.6 اینچی مدل G15 5530 i7 13650HX 32GB 1TB RTX4050",
        price:"91499000",
        off:"0",
        category:"laptop9",
        image:laptop9
    },
    {
        name:"تبلت سامسونگ مدل Galaxy Tab A9 4G ظرفیت 64 گیگابایت رم 4 گیگابایت (SM-X115)",
        price:"8250000",
        off:"7699000",
        category:"comp",
        image:comp1
    },
    {
        name:"تبلت سامسونگ مدل Galaxy Tab A9 4G ظرفیت 128 گیگابایت رم 8 گیگابایت (SM-X115)",
        price:"12830000",
        off:"0",
        category:"comp",
        image:comp2
    },
    {
        name:"کارت گرافیک ایسوس مدل GeForce RTX 3070 OC Edition 8GB",
        price:"30800000",
        off:"29988000",
        category:"comp",
        image:comp3
    },
    {
        name:"مودم روتر 4G LTE N300 نتربیت مدل NWR–M920 V2",
        price:"2420000",
        off:"0",
        category:"comp",
        image:comp4
    },
    {
        name:"تبلت سامسونگ مدل Galaxy Tab A9 Plus 5G ظرفیت 128 گیگابایت رم 8 گیگابایت (SM-X216)",
        price:"19400000",
        off:"0",
        category:"comp",
        image:comp5
    },
    {
        name:"ماوس بی سیم بیاند مدل BM-1910RF",
        price:"730000",
        off:"0",
        category:"comp",
        image:comp6
    },
    {
        name:"هارددیسک اینترنال وسترن دیجیتال مدل Blue WD20EARZ ظرفیت 2 ترابایت",
        price:"3700000",
        off:"0",
        category:"comp",
        image:comp7
    },
    {
        name:"هارد اس اس دی اینترنال ای دیتا مدل Ultimate SU630 ظرفیت 480 گیگابایت",
        price:"1715000",
        off:"1660000",
        category:"comp",
        image:comp8
    },
    {
        name:"مادربرد ایسوس مدل PRIME H610M-R-Si-D5",
        price:"6100000",
        off:"5945000",
        category:"comp",
        image:comp9
    },
]

const productsWithIds = products.map(product => ({
    id: uuidv4(),
    ...product
}));

export default productsWithIds;