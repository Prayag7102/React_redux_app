import React from 'react'
import { IoPerson } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
    const bag = useSelector(store => store.bag);
    return (
        <div>
            <header>
                <div className="logo_container p-3">
                    <Link to="/">
                        <img
                            className="myntra_home"
                            src="images/myntra_logo.webp"
                            alt="Myntra Home"
                        />
                    </Link>
                </div>
                <nav className="nav_bar">
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Kids</a>
                    <a href="#">Home &amp; Living</a>
                    <a href="#">Beauty</a>
                    <a href="#">
                        Studio <sup>New</sup>
                    </a>
                </nav>
                <div className="search_bar">
                    <span className="material-symbols-outlined search_icon">search</span>
                    <input
                        className="search_input"
                        placeholder="Search for products, brands and more"
                    />
                </div>
                <div className="action_bar">
                    <div className="action_container">
                    <IoPerson />
                        <span className="action_name">Profile</span>
                    </div>
                    <div className="action_container">
                    <FaHeart />
                        <span className="action_name">Wishlist</span>
                    </div>
                    <Link className="action_container" to="/cart">
                   <IoBagHandleSharp/>
                        <span className="action_name">Bag</span>
                        <span className="bag-item-count">{bag.length}</span>
                    </Link>
                </div>
            </header>
        </div>
    )
}