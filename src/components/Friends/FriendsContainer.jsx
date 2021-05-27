import React from 'react';
import {connect} from "react-redux";
import {
    followThunk,
    getUsersThunk,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowingProgress,
    unfollowThunk
} from "../../Redux/userReducer";
import Friends from "./Friends";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/userSelectors";


class FriendsAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage);
    }

    onPageChanget = (p) => {
        this.props.getUsersThunk(this.props.pageSize, p);
        this.props.setCurrentPage(p);
    }


    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Friends userList={this.props.userList}
                         onPageChanget={this.onPageChanget}
                         currentPage={this.props.currentPage}
                         pageSize={this.props.pageSize}
                         totalUsersCount={this.props.totalUsersCount}
                         unfollowThunk={this.props.unfollowThunk}
                         followThunk={this.props.followThunk}
                         pageNav={this.props.pageNav}
                         setCurrentPage={this.props.setCurrentPage}
                         followingInProgress={this.props.followingInProgress}
                         toggleFollowingProgress={this.props.toggleFollowingProgress}/>

            </>
        )
    }
}



let mapStateToProps = (state) => {
    return {
        userList: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, {
        followThunk,
        unfollowThunk,
        setCurrentPage,
        setTotalUsersCount,
        toggleFollowingProgress,
        getUsersThunk
    })
)(FriendsAPIComponent)