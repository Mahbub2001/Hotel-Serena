import React from 'react';
import './Selection.css'

const SelectionCards = ({place}) => {
    const {img,name,bedrooms,bathrooms,Booked_By,author,price} =  place;
    return (
        <div className="selection-box">
            <div className="d-flex inner-sl-box">
                <div className=''>
                    <img className="selection-image " src={img} alt="" />
                </div>
                <div>
                    <h5 className="beloshi">{name}</h5>
                    <div className="d-flex justify-content-between align-items-center align-content-center">
                        <div>
                            <small>Bedrooms : {bedrooms}</small>
                        </div>
                        <div>
                            <small>Bathrooms : {bathrooms}</small>
                        </div>
                        <div>
                            <small>Booked By : {Booked_By ? Booked_By : 'No data'}</small>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mt-3'>
                        <div>
                            <small>Posted By : {author}</small>
                        </div>
                        <div>
                            <small className='dollar'>${price}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectionCards;