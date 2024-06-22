import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to ShopEase, your ultimate e-commerce destination crafted with the powerful MERN stack – MongoDB, Express.js, React.js, and Node.js. ShopEase redefines your online shopping experience, offering a seamless and intuitive platform where you can browse, purchase, and manage your orders effortlessly. Our robust MongoDB database ensures secure storage of all your information, while Express.js and Node.js deliver a fast and reliable backend to handle all your shopping needs. The dynamic React.js interface provides a smooth and responsive user experience, making it easy to explore our extensive range of products. Whether you’re shopping for the latest fashion trends, electronics, or everyday essentials, ShopEase guarantees a secure, efficient, and enjoyable shopping journey. Join us today and discover how ShopEase simplifies online shopping, providing you with convenience and reliability at every click.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
