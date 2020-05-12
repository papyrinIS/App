import React from 'react';
import styles from './Users.module.css';
import photo from '../../image/user.jpg';
import {NavLink} from "react-router-dom";
import Paginator from "../common/Pagenator";



let User = ({user , ...props}) => {



    return<div>  <div>
                    <NavLink to={'/Profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : photo} className={styles.avatar}/>
                    </NavLink>
                </div>

                <div>
                    {user.followed
                        ? <button disabled={props.followingProgress.some(id => id === user.id) }
                                  onClick={() => {props.followThunkCreator(user.id);

                        }}>unfollow</button>
                        : <button disabled={props.followingProgress.some(id => id === user.id)}
                                  onClick={() => {props.unfollowThunkCreator(user.id);

                        }}>follow</button>
                    }
                </div>

                <div>{user.name}</div>
                <div>{user.status}</div>

    </div>
}


export default User;
