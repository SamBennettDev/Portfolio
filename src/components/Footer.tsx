import { socialsList } from "@/config/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="w-full relative flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full h-[100px] bg-background  before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[100px] before:bg-card before:rounded-b-[10vw]" />
      <div className="w-full h-[100px] flex justify-between px-[20px] md:px-[40px] items-center bg-background">
        <div>© 2024 Sam Bennett</div>
        <div className="flex gap-[10px]">
          {socialsList.map((socialItem) => {
            return (
              <Link
                to={socialItem.href}
                target="_blank"
                key={socialItem.title}
                className="text-muted-foreground hover:text-foreground"
              >
                <FontAwesomeIcon icon={socialItem.icon} className="text-2xl" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
