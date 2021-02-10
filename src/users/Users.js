import React, { Component } from 'react';
import {User} from "./User";

export default class Users extends Component {
    state={users:[
        
        {name: 'Monu', age:20},
        { name: 'Manu', age:20},
        {name: 'Abhi', age:19},
    
    ],
title:'Users List'}

 makeMeYounger=()=>{
    // eslint-disable-next-line array-callback-return
    const newState = this.state.users.map((user)=>
    {   while(user.age>10){
        const tempUser=user;
        tempUser.age-=10;
        return tempUser  
    }
})
    this.setState(newState)

 }


    render() {

        
        return (
            <div>
                <button onClick={this.makeMeYounger}>Click to increase 10 years each</button>
                <br />
                <h1>{this.state.title}</h1>
                {
                    this.state.users.map((user)=>
                    {
                        return <User age={user.age}>{user.name}</User>
                    })
                }
                
            </div>
        )
    }
}
