import React from 'react';
import { BulletPoint } from './BulletPoints';

export const Accordian = ({ closedData,isActive }) => {

    
    return (
        <div className={`${(isActive) ?'visible  h-36  ':'invisible h-0'} overflow-hidden  transition-all duration-500  space-y-2 text-[#d6d6d6] mt-5`}>
            <h3 className="mb-3 font-bold text-white text-2xl">{closedData?.jobTitle}</h3>
            {closedData?.bulletPoints.slice(0, 3)?.map((item, index) => (
                <BulletPoint key={index} bulletpoint={item} />
            ))}
        </div>
    );
};

