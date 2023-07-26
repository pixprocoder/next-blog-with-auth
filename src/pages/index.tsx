import RootLayout from "@/components/layouts/rootLayout";
import { Carousel } from "antd";
import banner1 from "../assets/images/banner/banner-1.jpg";
import banner2 from "../assets/images/banner/banner-2.jpg";
import banner3 from "../assets/images/banner/banner-3.jpg";
import banner4 from "../assets/images/banner/banner-4.jpg";
import Image from "next/image";

// const contentStyle: React.CSSProperties = {
//   height: "400px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

function HomePage() {
  return (
    <>
      <Carousel autoplay>
        <div>
          <Image
            style={{ borderRadius: "10px" }}
            src={banner1}
            layout="responsive"
            alt="Slider"
          />
          {/* <h3 style={contentStyle}>1</h3> */}
        </div>
        <div>
          <Image
            style={{ borderRadius: "10px" }}
            src={banner2}
            layout="responsive"
            alt="Slider"
          />
        </div>
        <div>
          <Image
            style={{ borderRadius: "10px" }}
            src={banner3}
            layout="responsive"
            alt="Slider"
          />
        </div>
        <div>
          <Image
            style={{ borderRadius: "10px" }}
            src={banner4}
            layout="responsive"
            alt="Slider"
          />
        </div>
      </Carousel>
    </>
  );
}

export default HomePage;

HomePage.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
