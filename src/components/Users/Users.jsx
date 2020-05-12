import React from 'react';
import Pagenator from "../common/Pagenator";
import User from "./User";



let Users = ({pageSize,currentPage,onPageChanged,totalUsersCount,...props}) => {



    return<div> <Pagenator
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}/>

        {props.users.map(u=><User user={u} { ...props} key={u.id}/>)}
    </div>
}


export default Users;
