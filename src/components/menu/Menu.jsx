import './Menu.css';
import React, { useRef, useState, useContext, useEffect } from 'react';
import { MyContext } from '../MyContext'; // Correct path to your context
import Menuitems from '../menuitems/Menuitems';

const Menu = () => {
    const menuRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [menulist, setMenuList] = useState({ categories: [] }); // Initialize state for menu list
    const { handleCategoryClick}=useContext(MyContext)
    const scrollLeft = () => {
        menuRef.current.scrollBy({ left: -1000, behavior: 'smooth' });
    };

    const scrollRight = () => {
        menuRef.current.scrollBy({ left: 1000, behavior: 'smooth' });
    };

    const { state, setstate } = useContext(MyContext);

    async function Call() {
        try {
            let res = await fetch('http://localhost:4000/product-api/menu-items', {
                method: "GET",
            });
            let data = await res.json();
            setMenuList(data.payload[0]); 
        } catch (err) {
            console.log("Error: ", err);
        }
    }
    useEffect(() => {
        Call();
    }, []);
    return (
        <div className="menu-container" id='menu'>
            <div className="menu" ref={menuRef}>
                {menulist.categories.map(category => (
                    <div 
                        key={category.idCategory} 
                        onClick={() => handleCategoryClick(category.strCategory)}
                        className={`menu-category ${category.strCategory === selectedCategory ? "active1" : ""}`}
                    >
                        <img 
                            className='menu-img'
                            src={category.strCategoryThumb}
                            alt={category.strCategory}
                        />
                        <h4>{category.strCategory}</h4>
                    </div>
                ))}
            </div>
            <div className='scroll-bar'>
                <button className="scroll-button-left" onClick={scrollLeft} aria-label="Scroll left">
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR1266fR4CONxU5hXAnpXV1J6Sr2UBOQBRvCiAn6H9pklD14MqK" width="32px" alt="Scroll left" />
                </button>
                <button className="scroll-button-right" onClick={scrollRight} aria-label="Scroll right">
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHVGiBHjlZqr47ojlGN7wI7-Gxl4ci9Hu42LWhcOEfCLclQqfY" width="30px" alt="Scroll right" />
                </button>
            </div>
        </div>
    );
}

export default Menu;
