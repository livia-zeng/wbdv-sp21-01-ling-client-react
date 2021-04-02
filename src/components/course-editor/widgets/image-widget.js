import React from 'react'

const ImageWidget = ({widget, setEditingWidget,editing}) =>
    <div>
        {
            !editing &&
            <img width={widget.width} height={widget.height} src={widget.src}/>
        }
        {
            editing &&
            <>
                <br></br>
                <label for="src">Image URL</label>
                <input id = "src"
                       value={widget.src}
                       onChange={(e) => setEditingWidget({...widget, src: e.target.value})}
                       className="form-control"/>

                <label for="width">Image Width</label>
                <input id = "width"
                       value={widget.width}
                       onChange={(e) => setEditingWidget({...widget, width: e.target.value})}
                       className="form-control"/>

                <lable for = "height">Image Height</lable>
                <input id = "height"
                       value={widget.height}
                       onChange={(e) => setEditingWidget({...widget, height: e.target.value})}
                       className="form-control"/>
            </>
        }
    </div>

export default ImageWidget