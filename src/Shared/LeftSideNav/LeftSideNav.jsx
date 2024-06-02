import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {


    const [categories, setCategories]= useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className="space-y-6">
            <h2 className="text-2xl">Left Side : {categories.length}</h2>
            {
                categories.map(category => <NavLink 
                    className="block ml-4 bg-green-100 p-2 rounded-xl text-xl font-semibold"
                    key={category.id}
                    to={`/category/${category.id}`}
                    >{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;