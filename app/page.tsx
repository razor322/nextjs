/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import ViewSideBar from "./components/ViewSidebar";
import Footer from "./components/footer";
import ButtonFollow from "./components/etc/ButtonFollow";
import Content from "./components/Content";
import Card from "./components/Card";
import Blog from "./components/Blog";

// import Header from "./components/Header";
export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex min-h-screen mr-8 ml-8">
          <ViewSideBar />
          <Content>
            <div
              className="hero h-52 rounded-2xl overflow-hidden"
              style={{
                backgroundPositionY: "bottom 90px",
                backgroundImage: "url(/images/bg.webp)",
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

            <div className="flex flex-1">
              <Card>
                <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow  mb-8">
                  <div className="flex justify-between">
                    <h1 className="mb-3 ml-2 text-white font-sans">Recents</h1>
                    <h1 className="mb-3 ml-2 text-white text-xs font-sans">
                      view more..
                    </h1>
                  </div>
                  <div className="avatar mr-3">
                    <div className="w-24 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar mr-3">
                    <div className="w-24 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar mr-3">
                    <div className="w-24 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar mr-3">
                    <div className="w-24 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                  <div className="avatar mr-3">
                    <div className="w-24 rounded-full">
                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                  </div>
                </div>

                {/* avatar follow*/}
                <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-48 ">
                  <h1 className="mb-3 ml-2 text-white font-sans">Groups</h1>
                  <div className="flex items-center">
                    <div className="avatar ml-3 mr-3 flex-shrink-0">
                      <div className="w-32 rounded-full">
                        <Image
                          src="/images/foto.webp"
                          width={200}
                          height={200}
                          alt="Picture of the author"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col ml-2 text-white">
                      <h1 className=" font-bold font-mono text-3xl">
                        Coding widest
                      </h1>
                      <h1 className="mb-3 text-sm text-black font-bold font-sans">
                        Formed in 2015
                      </h1>
                      <div className="flex-shrink-0 ">
                        <ButtonFollow>Follow</ButtonFollow>
                        <h1 className="mt-2 uppercase text-xs text-black font-bold font-sans">
                          Member since 2018
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              <Blog />
            </div>
          </Content>
        </div>

        <Footer />
      </div>
    </>
  );
}
