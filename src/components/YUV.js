// import axios from 'axios';
import React from 'react';
import { FastAverageColor } from 'fast-average-color';
import avatar from '../assets/images/vespa.png';
import { useState } from 'react';
import { useEffect } from 'react';

const YUV = () => {
    const fac = new FastAverageColor();
    // const color = fac.getColorAsync(avatar);
    // console.log("color: ",color);
    // console.log("color RGB: ",color.rgb);
    const [color, setColor] = useState(null);

    

    const getColor = async (image) => {
        const color = await fac.getColorAsync(image);
        console.log("color: ",color);
        setColor(color.rgb);
    }

    // getColor(avatar);

    console.log("color RGB: ",color);

    useEffect (() => {
        getColor(avatar);
    },[color]);

  return (
    /* List of motorcycles */
    <div className="flex flex-col w-full px-4 pt-6 pb-4 lg:px-6 lg:py-2 h-full">

        <div id="image-container" className={`flex flex-col p-4 bg-[${color}] rounded-lg`}>
            <img
                src={avatar}
                className="w-32 h-32 rounded-full mx-auto"
                alt="avatar" />
        </div>

    </div>
  );
};

export default YUV;
