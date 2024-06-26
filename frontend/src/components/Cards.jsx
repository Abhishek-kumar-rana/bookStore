import React from 'react';

function Cards({ item }) {
    // console.log(item);
    return (
        // <div className='mt-4 my-5 p-3 hover:scale-105 transition-transform '>
        //     <div className="card w-92 bg-base-100 shadow-xl">
        //         <figure><img src={item.image} alt="Book" /></figure>
        //         <div className="card-body">
        //             <h2 className="card-title">
        //                 {item.name}
        //                 <div className="badge badge-secondary">{item.category}</div>
        //             </h2>
        //             <p>{item.title}</p>
        //             <div className="card-actions justify-between">
        //                 <div className="badge badge-outline px-3 py-3 ">${item.price}</div>
        //                 <div className="badge badge-outline hover:bg-pink-500 px-5 py-3 cursor-pointer duration-300">Buy Now</div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='mt-4 my-5 p-3 hover:scale-105 transition-transform '>
            <div className="card max-w-92 md:h-96 bg-base-100 shadow-xl dark:shadow-xl duration-200 dark:bg-slate-900 dark:text-white dark:border">
                <figure><img src={item.image} alt="Book" className=' bg-transparent' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline px-3 py-3 ">${item.price}</div>
                        <div className="badge badge-outline hover:bg-pink-500 px-5 py-3 cursor-pointer duration-300">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
