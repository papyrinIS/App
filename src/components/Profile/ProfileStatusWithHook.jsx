import React, {useEffect, useState} from 'react';
import p from "./Profile.module.css";


const ProfileStatusWithHook = (props) => {

    let[editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    },
        [props.status]
    )


    const activateEditMode = () => {
     setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);

    }


  return (
      <div>
          {!editMode &&
          <div>
              <span onDoubleClick={activateEditMode}> {props.status || "_____"}</span>
          </div>
          }
          {editMode &&
          <div>
              <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}  value={status}/>
          </div>
          }
      </div>
  )
}

export default ProfileStatusWithHook;
