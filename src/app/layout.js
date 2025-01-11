import "./globals.css";
import "./styles/mission.css";
import "./styles/services.css";
import "./styles/key-projects.css";
import "./styles/portfolio-section.css";
import "./styles/eyes-on.css";
import "./styles/contact-form.css";
import "./styles/faqs.css";
import "./styles/footer.css";
import "./styles/services-page.css";
import "./styles/portfolio-page.css";
import "./styles/casestudy-page.css";
import Footer from "./components/Footer";
import MouseLight from "./components/MouseLight";
import "video.js/dist/video-js.css";

export const metadata = {
  title: "Eyes On",
  description: "Eyes On",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MouseLight />
        {children}
        <Footer />
      </body>
    </html>
  );
}
