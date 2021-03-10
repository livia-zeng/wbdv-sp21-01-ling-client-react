import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to,
        item,
        updateItem,
        deleteItem,
        active,
        type
    }) => {
    const [editing, setEditing] = useState(false)
    const [itemCache, setItemCache] = useState(item)

    return (
        <div className={`${type === 'module' ? 'list-group-item lz-list-group-item' : ''}
        ${type === 'lesson' ? 'nav-item h4' : ''}
         ${type === 'topic' ? 'nav-item' : ''} 
         ${active ? 'active' : ''}
         ${active && type === 'topic' ? 'select-active' : ''} 
         ${editing ? 'select-active' : ''}
        `
        }>
            {
                !editing &&
                <>
                    <div className={`${active && type === 'topic' ? 'select-active' : ''} 
                    nav-link ${active ? 'active' : ''} mx-2`}>
                        <Link to={to}>
                            {item.title}
                        </Link>
                        <span><i onClick={() => {
                            setEditing(true)
                        }} className="fas fa-edit mx-2"></i></span>
                    </div>
                </>
            }
            {
                editing &&
                <>
                    <div className={`select-active`}>
                        <input
                            onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                            value={itemCache.title}
                        />
                        <i onClick={() => {
                            setEditing(false)
                            updateItem(itemCache)
                        }} className="fas fa-check mx-1"></i>
                        <i onClick={() => deleteItem(item)} className="fas fa-times mx-1"></i>
                    </div>
                </>
            }
        </div>
    )
}

export default EditableItem