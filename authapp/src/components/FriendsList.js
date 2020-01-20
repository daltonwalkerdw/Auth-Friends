import React from "react"

import axios from "axios"
import FriendFields from "./FriendFields"

class FriendsList extends React.Component {
 constructor(props) {
     super(props)
     this.state = {
         info: []
     }

 }
 componentDidMount() {
     axios
     .get(`http://localhost:5000/api/friends`, {
        headers: { Authorization: localStorage.getItem("token") }
 })
     .then(res => {
         console.log(res.data)
         this.setState({
             info: res.data
         })
         console.log("state", this.state.apiData)
     })
     .catch(err => console.log("FriendsList Error:", err))
 }
componentDidUpdate() {    axios
    .get(`http://localhost:5000/api/friends`, {
       headers: { Authorization: localStorage.getItem("token") }
})
    .then(res => {
        console.log("compdidupdate:", res.data)
        this.setState({
            info: res.data
        })
        console.log("state", this.state.apiData)
    })
    .catch(err => console.log("FriendsList Error:", err))}

 render() {
     return (
         
         <div className="friendsList">
             <FriendFields />
       <h1>friends:</h1>
        {this.state.info.map(data => {
            return (
                <div key={data.id} className="friendBox">
        <h3>{data.name}</h3>
            <p>{data.age}</p>
        <p>{data.email}</p>
                    </div>
            )
        })}
         </div>
     )
 }
}

export default FriendsList;