import Link from "next/link";
import ButtonFollow from "./etc/ButtonFollow";
import Stats from "./etc/Stats";

const ViewSideBar = () => {
  return (
    <div className=" px-3 py-4 ml-10 mr-10 w-80 flex-shrink-0 ">
      <div className="avatar online">
        <div className="w-48 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="mt-5 mb-5">
        <h1 className="tracking-widest font-light text-xl ">Gybran Nauval Y</h1>
        <h1 className=" font-bold text-xs">Software Engineering</h1>
      </div>

      <ButtonFollow>Follow</ButtonFollow>
      <div className="mt-5"></div>

      <Stats />
      <ul className="menu w-56 rounded-box mt-3">
        <li>
          {/* Menambahkan link menggunakan Link dari Next.js */}
          <Link href="/albums">Album</Link>
        </li>
        <li>
          <a>Archive</a>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default ViewSideBar;
