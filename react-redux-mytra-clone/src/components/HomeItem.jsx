import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bagActions } from '../store/bagSlice';
import { IoIosAddCircleOutline } from "react-icons/io";
import { TiDeleteOutline } from "react-icons/ti";

export default function HomeItem({ item }) {
    const dispatch = useDispatch();
    const bagItems = useSelector(store => store.bag);
    const elementFound = bagItems.indexOf(item.id) >= 0;

    const handleAddToBag = () => {
        dispatch(bagActions.addToBag(item.id));
    }
    const handleRemove = () => {
        dispatch(bagActions.removeFromBag(item.id));
        console.log(item.id);
        
    }
    return (
        <div>
            <div className="item-container">
                <img className="item-image" src={item.image} alt="item image" />
                <div className="rating">
                    {item.rating.stars} ⭐ | {item.rating.count}
                </div>
                <div className="company-name">{item.company}</div>
                <div className="item-name">{item.item_name}</div>
                <div className="price">
                    <span className="current-price">Rs {item.current_price}</span>
                    <span className="original-price">Rs {item.original_price}</span>
                    <span className="discount">({item.discount_percentage}% OFF)</span>
                </div>
                {elementFound ? 
                    (<button type="button" className="btn btn-danger btn-add-bag" onClick={handleRemove}>
                        Remove <TiDeleteOutline />
                    </button>)
                 :
               
             (
                <button type="button" className="btn btn-success btn-add-bag" onClick={handleAddToBag}>
                    Add to Bag <IoIosAddCircleOutline />
                </button>
            )}


            </div>
        </div>
    )
}
