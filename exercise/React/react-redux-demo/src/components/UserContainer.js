import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux' //import from redux/index.js by default

//use useEffect to perform side effects
function UserContainer({userData, fetchUsers}) {
  useEffect(() => {
    fetchUsers()
  }, [fetchUsers]);
  return userData.loading ? (
    <h3>Loading user data</h3>
  ) : userData.error ? (
    <h3>{userData.error}</h3>
  ) : (
    <div>
      <h3>User data list</h3>
      <div>
        {userData &&
          userData.data &&
          userData.data.map(user => <p key={user.id}>{user.title}</p>)}
      </div>
    </div>
  )
}

//props selectors: arrow functions - take state and dispatch,
//return an object which contains required state info and dispatch function
const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

//use react-redux.connect to connect props selectors with the component
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserContainer)
