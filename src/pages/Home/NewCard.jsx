import React from 'react';
import { Link } from 'react-router-dom';

const NewCard = ({ news }) => {
    const { title,thumbnail_url,details,_id } = news
    return (
        <div className="card card-compact mb-16 bg-base-100 shadow-xl">
            <figure><img src={thumbnail_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>
                    {details.length>200
                    ? 
                    <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className='md:ml-5 text-blue-500 font-bold'>Read More...</Link></p>
                    :
                    <p>{details}</p>
                
                }
                </p>
                
            </div>
        </div>
    );
};

export default NewCard;