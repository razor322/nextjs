import React from "react";
import ViewSideBar from "../components/ViewSidebar";
import Footer from "../components/footer";

import ButtonFollow from "../components/etc/ButtonFollow";
import Content from "../components/Content";

export default function Albums() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex min-h-screen mr-8 ml-8">
          <ViewSideBar />
          <Content>
            <div
              className="hero h-52 rounded-2xl overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
                backgroundSize: "cover",
                // height: "80px",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <ButtonFollow>Get Started</ButtonFollow>
                </div>
              </div>
            </div>
          </Content>
        </div>

        <Footer />
      </div>
    </>
  );
}
