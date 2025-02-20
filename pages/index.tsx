"use client";

import { Noto_Sans_Thai } from "next/font/google";
import Image from "next/image";
import device_intro from "../public/devices/intro-device.png";
import app_icon from "../public/app_icon.png";
import device_half from "../public/intro-device-half.png";
import gsap from "gsap";
import { useEffect } from "react";
import { useGSAP, } from "@gsap/react";
import Footer from "@/components/Footer";
import Spots from "@/components/Spots";
import AppBadge from "@/components/AppBadge";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);

const noto_sans_thai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const features = [
  {
    title: "รับแจ้งข่าวสาร<br/>ไม่พลาดทุกการอัปเดต",
    description: "งานแจ้งซ่อม-แจ้งปัญหา<br/>เหมือนดั่งการดูแลแบบใกล้ชิด",
    image: "/devices/device-01.png",
  },
  {
    title: "สนทนากับนิติฯ",
    description: "ช่องทางสื่อสารส่วนตัว<br/>ระหว่างลูกบ้านกับนิติฯ ได้ตลอดเวลา",
    image: "/devices/device-02.png",
  },
  {
    title: "จัดการค่าใช้จ่าย",
    description: `รับแจ้งเตือนยอดค้าง แจ้งการชำระสำเร็จ<br/>และแนบหลักฐานการชำระง่ายๆ ผ่านแอปฯ`,
    image: "/devices/device-03.png",
  },
  {
    title: "แจ้งเตือนพัสดุ",
    description: "เช็กสถานะพัสดุ<br/>และรับพัสดุกับนิติฯด้วย QR Code",
    image: "/devices/device-04.png",
  },
  {
    title: "จอง Facilities",
    description: "จองเวลาล่วงหน้าก่อนเข้าใช้บริการ<br/>และรับการแจ้งเตือนผ่านแอปฯ",
    image: "/devices/device-06.png",
  }
]

const FeatureBox = ({ title, description, image, reverse }: { title: string, description: string, image: string, reverse?: boolean }) => {  

  return (
    <div className={`feature-box lg:h-screen flex items-center panel py-10 lg:py-0 ${reverse ? "odd" : "even"}`}>
      <div className="container">
        <div className={`w-full md:w-4/6 flex flex-col md:flex-row gap-5 lg:gap-20 mx-auto ${reverse ? "flex-col-reverse md:flex-row-reverse" : "flex-col-reverse"}`}>
          <div className={`w-full md:w-1/2 flex flex-col gap-4 justify-center px-4 md:px-0 ${reverse ? "md:items-start" : "md:items-end"}`}>
            <h4 className="text-white text-2xl lg:text-3xl font-bold text-center md:text-left" dangerouslySetInnerHTML={{ __html: title }}></h4>
            <p className={`text-white text-[15px] lg:text-xl ${reverse ? "text-center md:text-left" : "text-center md:text-right"}`} dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
          <div className={`w-full md:w-1/2 flex justify-center`}>
            <Image src={image} alt="feature_image" width={280} height={567} className={`md:w-[180px] lg:w-auto h-auto ${reverse ? "md:float-right" : ""}`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const panels = document.querySelectorAll('.panel');
    
    panels.forEach((panel) => {
      gsap.fromTo(panel, 
        {
          opacity: 0,
          y: 200
        },
        {
          opacity: 1, 
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: panel,
            start: "top 80%",
            end: "top 20%", 
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);
  return (
    <main className={`bg-primary-600 min-h-screen ${noto_sans_thai.className}`}>
      <section id="hero" className="lg:min-h-[760px] lg:h-screen flex items-center py-8 md:py-16">
        <div className="container mx-auto flex gap-8 panel">
          <div className="w-full md:w-4/6 mx-auto flex md:flex-row gap-7 md:gap-16 flex-col-reverse">
            <div className="w-full md:w-2/5 flex justify-center items-center md:justify-end">
              <Image src={device_intro} alt="device_intro" className="w-auto h-auto z-10 hidden md:block" />
              <Image src={device_half} alt="device_intro" className="w-auto h-auto z-10 block md:hidden" />
            </div>
            <div className="w-full md:w-3/5 flex flex-col gap-4 items-center">
              <Image src={app_icon} alt="app_icon" width={200} height={200}/>
              <h1 className="text-white w-3/5 lg:w-5/6 tracking-wider">
                <span className="font-bold text-4xl md:text-3xl lg:text-5xl">บ้านที่ดี</span><span className="text-xl lg:text-2xl"> คือจุดเริ่มต้น</span>
                <br/>
                <span className="font-bold text-4xl md:text-3xl lg:text-5xl float-right">ของความสุข</span>
              </h1>
              <p className="text-white text-center lg:text-xl">บริการที่ครอบคลุม ด้วยฟีเจอร์ที่หลากหลาย<br/>อำนวยความสะดวกให้กับลูกบ้าน</p>
              <AppBadge />
            </div>
          </div>
        </div>
        <Spots />
      </section>

      <div className="bottom-bg">

        <section id="features" className="flex flex-col gap-16 md:gap-0">
          {features.map((feature, index) => (
            <FeatureBox key={feature.title} title={feature.title} description={feature.description} image={feature.image} reverse={index % 2 === 0} />
          ))}
        </section>

        <section id="download" className="flex items-center py-20">
          <div className="container mx-auto space-y-6">
            <h2 className="text-white text-3xl font-semibold text-center">ดาวน์โหลดแอพพลิเคชั่น</h2>
            <AppBadge />
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
}
