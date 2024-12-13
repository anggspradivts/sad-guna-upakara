import DesktopFooter from "./_components/DesktopFooter";
import MobileFooter from "./_components/MobileFooter";

const Footer = () => {
  return ( 
    <div>
      <div className="hidden md:block">
        <DesktopFooter />
      </div>
      <div className="block md:hidden">
        <MobileFooter />
      </div>
    </div>
   );
}
 
export default Footer;