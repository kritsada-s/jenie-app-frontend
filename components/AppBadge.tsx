import Link from "next/link";
import Image from "next/image";
import app_store_icon from "../public/apple-store-badge.png";
import google_play_icon from "../public/google-play-badge.png";

function AppBadge() {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-center max-w-[250px] md:max-w-none mx-auto">
      <Link href="https://apps.apple.com/us/app/jenie/id6502596963" target="_blank">
        <Image src={app_store_icon} alt="app_store_icon" width={150} height={50} className="w-full md:w-auto h-auto md:h-[50px]" />
      </Link>
      <Link href="https://play.google.com/store/apps/details?id=com.assetwise.jenie&hl=en" target="_blank">
        <Image src={google_play_icon} alt="google_play_icon" width={150} height={50} className="w-full md:w-auto h-auto md:h-[50px]" />
      </Link>
    </div>
  );
}

export default AppBadge;