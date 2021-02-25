import React, { Component } from "react";
import { User } from "./User";

import UniqueId from "react-html-id";
export default class Users extends Component {
  constructor() {
    super();
    UniqueId.enableUniqueIds(this);

    this.state = {
      users: [
        { id: this.nextUniqueId(), name: "Monu", age: 20 },
        { id: this.nextUniqueId(), name: "Abhi", age: 20 },
        { id: this.nextUniqueId(), name: "Multani", age: 19 },
      ],
    };
  }

  listDelete = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({ users: users });
  };

  changeEvent = (id, e) => {
    const index = this.state.users.findIndex((user) => {
      return user.id === id;
    });
    const user = Object.assign({}, this.state.users[index]);
    user.name = e.target.value;
    const users = Object.assign([], this.state.users);
    users[index] = user;

    this.setState({ users: users });
  };

  changeAge = (id, e) => {
    const index = this.state.users.findIndex((user) => {
      return user.id === id;
    });
    const user = Object.assign({}, this.state.users[index]);
    user.age = e.target.value;
    const users = Object.assign([], this.state.users);
    users[index] = user;

    this.setState({ users: users });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user, i) => {
            return (
              <User
                key={user.id}
                Age={user.age}
                onDelete={this.listDelete.bind(this, i)}
                changeEvent={this.changeEvent.bind(this, user.id)}
                user={user.name}
                changeAge={this.changeAge.bind(this, user.id)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
