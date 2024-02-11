const Blog = () => {
  return (
    <>
      <div className="flex flex-col font-semibold p-4 mt-3 mb-3  rounded-xl  w-2/5 h-96">
        <div className="flex-grow">
          <h5 className="uppercase font-sans">biography </h5>
          <p className="font-sans text-xs text-wrap mb-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            exercitationem laudantium sequi. Magni inventore eos architecto
            voluptates labore voluptatem nulla ad voluptatibus, vitae non beatae
            at necessitatibus quisquam maxime aliquid.
          </p>
          <h5 className="uppercase font-sans">website</h5>
          <p className="font-sans text-xs text-wrap mb-3 text-pink-300">
            https://www.google.com/
          </p>
          <h5 className="uppercase font-sans">skills</h5>
          <div className="text-sm inline ">
            <span className=" bg-red-400 bg-opacity-50 t rounded-lg uppercase font-sans p-1 ">
              laravel
            </span>
            <span className=" bg-green-400 bg-opacity-50 t rounded-lg uppercase font-sans p-1 ml-2">
              VueJs
            </span>
            <span className=" bg-blue-500 bg-opacity-50 t rounded-lg uppercase font-sans p-1 ml-2">
              Flutter
            </span>
          </div>
        </div>
        <div className="flex-shrink-0">
          {/* footer */}
          <div className="flex flex-row justify-between">
            <div>
              <div className="avatar placeholder flex-shrink-0">
                <div className="bg-neutral text-neutral-content rounded-full w-12 ml-2">
                  <span>SY</span>
                </div>
              </div>
              <div className="avatar placeholder flex-shrink-0">
                <div className="bg-neutral text-neutral-content rounded-full w-12 ml-2">
                  <span>SY</span>
                </div>
              </div>
              <div className="avatar placeholder flex-shrink-0">
                <div className="bg-neutral text-neutral-content rounded-full w-12 ml-2">
                  <span>SY</span>
                </div>
              </div>
            </div>
            <div className="  overflow-hidden p-1 ">
              <div className=" text-xs">Padang,Sumatera Barat</div>
              <div className=" text-lg">4.30 PM</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
