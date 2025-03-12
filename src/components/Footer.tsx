
import SocialLinks from "./SocialLinks";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-display font-bold">
              <span className="text-primary">A</span>run V
            </h3>
            <p className="text-muted-foreground mt-1">
              Data Analyst | Business Analyst | Python & SQL Expert
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <SocialLinks />
            <p className="text-sm text-muted-foreground">
              © {currentYear} Arun V. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
