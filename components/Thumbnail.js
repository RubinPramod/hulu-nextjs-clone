import React from 'react';
import Image from 'next/image';

function Thumbnail({ results }) {

const BASE_URL = 'https://image.tmdb.org/t/p/original';

  return (
    <div className="p-4 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        className="object-cover"
        src={`${BASE_URL}${results.poster_path}`}
        height={1080}
        width={1920}
        /* src={`https://images.unsplash.com/photo-1623041901077-6c29e390ca73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1587&q=80`} */
      />
      {console.log(results)}
      <div className="p-2">
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold truncate ">{results.title}</h2>
        <p className="truncate max-w-md">
          {results.overview}
        </p>
        <p className="opacity-0 group-hover:opacity-100">02/05/1994 Like icon</p>
      </div>
    </div>
  );
}

export default Thumbnail;
