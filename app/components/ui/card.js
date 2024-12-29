import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";
const Card = ({ title, description }) => {
  return (
    <>
      <div className={"cardContainer"}>
        <h3 className={"cardTitle"}>{title}</h3>
        <p className={"cardDescription"}>Description: {description}</p>
        <Link href={"#"} className={"cardIconContainer"}>
          <LuArrowUpRight className={"cardIcon"} />
        </Link>
      </div>
    </>
  );
};

export default Card;
