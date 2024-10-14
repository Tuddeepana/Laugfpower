import React from "react";


const BumpCrumbx= ({Current})=>{
    return (
      
        <section className="py-4 bg-green-600 border-b border-gray-200 ">
        <div className="container ps-20">
          <ol className="flex space-x-2">
            {/* <li>
              <a href="" className="text-white hover:underline">Home / </a>
            </li> */}
            {/* <li className="text-white">{Current}</li> */}
          </ol>
          <h2 className="mt-2 text-2xl text-white ">{Current}</h2>
        </div>
      </section>
    );
};

export default BumpCrumbx;
