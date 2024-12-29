import { logo } from "../assets/assets";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../constants/data";
import Button from "./ui/button";
import { LuStar  } from "react-icons/lu";

const Footer = () => {
  return (
    <footer>
      <div className={"centerFooter"}>
        <div className={"logoContainer"}>
          <Image src={logo} alt="Logo" className={"footerLogo"} />
          <p>Designed and Developed by Michael Tom</p>
          <Link href={"https://github.com/michaeltom1/portfolio"} target="_blank">
            <LuStar className="star"/>
          </Link>
        </div>
        <div className={"footerLinks"}>
          {footerLinks.map((item) => (
            <Button key={item.id} href={item.url} className={"footerLink"}>
              <item.Icon fontSize={22} />
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
