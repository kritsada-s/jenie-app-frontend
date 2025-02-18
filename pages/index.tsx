import { Noto_Sans_Thai } from "next/font/google";
import Image from "next/image";
import device_intro from "../public/devices/intro-device.png";
import app_icon from "../public/app_icon.png";

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
    image: "/devices/device-05.png",
  }
]

const FeatureBox = ({ title, description, image, reverse }: { title: string, description: string, image: string, reverse?: boolean }) => {
  return (
    <div className={`feature-box h-screen flex gap-16 items-center ${reverse ? "flex-row-reverse" : ""}`}>
      <div className={`w-1/2 flex flex-col gap-4 justify-center ${reverse ? "items-start" : "items-end"}`}>
        <h4 className="text-white text-3xl font-bold" dangerouslySetInnerHTML={{ __html: title }}></h4>
        <p className={`text-white text-xl ${reverse ? "text-left" : "text-right"}`} dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
      <div className={`w-1/2`}>
        <Image src={image} alt="feature_image" width={280} height={567} className={`w-auto h-auto ${reverse ? "float-right" : ""}`} />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className={`bg-primary-600 min-h-screen ${noto_sans_thai.className}`}>
      <section id="hero" className="min-h-[760px] bg-gradient-to-b from-primary-700 to-primary-600 flex items-center py-16">
        <div className="container mx-auto flex gap-8">

          <div className="w-4/6 mx-auto flex gap-16">
            <div className="w-2/5 flex justify-end">
              <Image src={device_intro} alt="device_intro" className="w-auto h-auto" />
            </div>
            <div className="w-3/5 flex flex-col gap-4 items-center">
              <Image src={app_icon} alt="app_icon" width={200} height={200} />
              <h1 className="text-white w-3/4">
                <span className="font-bold text-5xl">บ้านที่ดี</span><span className="text-2xl">คือจุดเริ่มต้น</span>
                <br/>
                <span className="font-bold text-5xl float-right">ของความสุข</span>
              </h1>
              <p className="text-white text-center text-xl">บริการที่ครอบคลุม ด้วยฟีเจอร์ที่หลากหลาย<br/>อำนวยความสะดวกให้กับลูกบ้าน</p>
            </div>
          </div>

        </div>
      </section>

      <section id="features">
        <div className="container mx-auto">
          <div className="w-4/6 flex flex-col gap-20 mx-auto">
            {features.map((feature, index) => (
              <FeatureBox key={feature.title} title={feature.title} description={feature.description} image={feature.image} reverse={index % 2 === 0} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
