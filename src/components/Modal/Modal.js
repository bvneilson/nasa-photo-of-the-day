import React from "react";
import Photo from "../Photo/Photo.js";

const Modal = props => {

  return (
    <div className="modal fade" id="image-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
          </div>
          <div className="modal-body">
            <Photo picture={props.picture} />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;
