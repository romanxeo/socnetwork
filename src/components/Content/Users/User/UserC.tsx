import React from 'react';
import s from './User.module.css';
import {UserPropsType} from "./UserContainer";
import axios from 'axios';


class UserC extends React.Component<UserPropsType> {

    //когда компонента монтируется вызывается тело метода один раз
    componentDidMount() {
        this.getUsers();
    }

    //метод который вызывается когда мы нажимаем кнопку получить еще юзеров
    getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    //метод для кнопки переключения страницы
    onPageChanged = (b: number) => {
        //меняем стейт
        this.props.setCurrentPage(b)

        //даем новый запрос на сервер
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${b}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pagesButtonSwitcher = [];
        for (let i = 1; i <= pagesCount; i++) {
            pagesButtonSwitcher.push(i)
        }

        return (
            <div>
                <div>
                    {pagesButtonSwitcher.map(b =>
                        <button className={this.props.currentPage === b ? s.selectedPage : s.nonSelectedPage}
                                onClick={(e) => {
                                    this.onPageChanged(b)
                                }}>{b}</button>
                    )}
                </div>


                {this.props.usersData.map(u =>

                    <div key={u.id} className={s.item}>
                        <img className={s.avatar}
                             src={u.photos.small != null
                                 ? u.photos.small
                                 : 'https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png'}
                             alt="img"/>
                        <span>{u.name} </span>
                        <span>{u.id} </span>
                        <span>{u.status} </span>
                            <span>{u.photos.small} </span>
                        <span>{u.photos.large} </span>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>UNFOLLOW</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>FOLLOW</button>}
                    </div>
                )}
                {this.props.usersData.length}
                <button onClick={this.getUsers}>Get users</button>
            </div>
        )
    }
}

export default UserC;