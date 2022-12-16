import React from 'react';
import {useContext} from "react";
import AuthContext from "../context/AuthContext";
import {BsFillTrashFill} from "react-icons/bs"

const PostTemplate = (props) => {
    const {user} = useContext(AuthContext)
    return (
        <div className="list-group w-auto">
            {props.items.map(item=>(
                <a href="#" className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                    <div className="d-flex gap-2 w-100 justify-content-between">
                        <div>
                            <h6 className="mb-0">{item.title}</h6>
                            <p className="mb-0 opacity-75">{item.text}</p>
                            <p className="mb-0 opacity-75">{item.published_year}</p>
                        </div>
                        {user && user.isAdmin?<a><BsFillTrashFill/></a>:<p></p>}

                    </div>
                </a>
            ))}
        </div>
    );
};

export default PostTemplate;

