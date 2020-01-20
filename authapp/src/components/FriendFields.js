import React from "react"
import axios from "axios"



export default class FriendFields extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            name: '',
            age: 0,
            email: ''
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
            
        })
        console.log(this.state)
    }

    handleSubmit = e => {
        e.preventDefault()

        const newFriend = {
            id: Date.now(),
           name: this.state.name,
           age: this.state.age,
           email: this.state.email
        }
        console.log(newFriend)
        axios.post('http://localhost:5000/api/friends', newFriend,
        {
            headers: { Authorization: localStorage.getItem("token")} 
        })
        .then(res => {
            console.log(res.data)
            this.setState({
                name: '',
                age: '',
                email: ''
            })
        })
        .catch(err => console.log("error:", err))
    }

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   <label>
                       Friend's name: <input type ="text" value={this.state.name} name="name" onChange={this.handleChange} />
                   </label>
                   <label>
                       Friend's Age: <input type ="text" value={this.state.age} name="age" onChange={this.handleChange} />
                   </label>
                   <label>
                       Friend's Email: <input type ="text" value={this.state.email} name="email" onChange={this.handleChange} />
                   </label>
                   <button type="submit">Add Friend!</button>
               </form>
            </div>
        )
    }
}

