import Image from "next/image";
import Link from "next/link";
import mbtechLogo from "../../public/images/Logo-white.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-block">
      <Image
        src={mbtechLogo}
        alt="MBTech-Logo-White"
        width={100}
        height={30}
        className="object-contain"
        priority
      />
    </Link>
  );
}
