import React, { Component } from "react";
import Heading from "../../components/Heading"
import List from "../../components/List"
import "./ToDos.css";
import API from "../../utils/API";



class ToDos extends Component {
    state = {
        user_id: "5bb24eb91a1da705dc6c549d",
        task_id: "",
        month12: [],
        month9: [],
        month6: [],
        month4: [],
        month2: [],
        completed: [],
        message: "All tasks for this month have been completed!"

    };

    

componentDidMount() {
    //this.setState({user_id: req.user._id});
    this.getTasks()
};


// handleCompleted = (this.state.user_id, id) => {
//     //set state for task id to id from button
//     API.updateTask(this.state.user_id, this.state.task_id)
//     .then(() => this.getTasks())
// };

//this id needs to be the req.user._id
getTasks = () => {
    API.getUser()
        .then(res => {
            console.log("tasks are here:" + JSON.stringify(res))
            console.log("just the tasks: " + JSON.stringify(res.data.tasks))
            for (let i = 0; i < res.data.tasks.length; i++) {
                if (!res.data.tasks[i].completed && res.data.tasks[i].timeCategory === "12") {
                    let joined = this.state.month12.concat(res.data.tasks[i])
                    this.setState({ month12: joined })
                }
                else if (!res.data.tasks[i].completed && res.data.tasks[i].timeCategory === "9") {
                    let joined = this.state.month9.concat(res.data.tasks[i])
                    this.setState({ month9: joined })
                }
                else if (!res.data.tasks[i].completed && res.data.tasks[i].timeCategory === "6") {
                    let joined = this.state.month6.concat(res.data.tasks[i])
                    this.setState({ month6: joined })
                }
                else if (!res.data.tasks[i].completed && res.data.tasks[i].timeCategory === "4") {
                    let joined = this.state.month4.concat(res.data.tasks[i])
                    this.setState({ month4: joined })
                }
                else if (!res.data.tasks[i].completed && res.data.tasks[i].timeCategory === "2") {
                    let joined = this.state.month2.concat(res.data.tasks[i])
                    this.setState({ month2: joined })
                }
                else if (res.data.tasks[i].completed) {
                    let joined = this.state.completed.concat(res.data.tasks[i])
                    this.setState({ completed: joined })
                }
            }
        }
        
        )
        .catch(err => console.log(err));
        
};


render() {
    return (
        <div>
            <Heading title="To Do List" subtitle="Marrymint helps you keep track of all the little details in one place. We belive that wedding planning should be fun, not stressful." />
            <div className="container">
                <h4 className="subtitle center">12 Months Out</h4>
                <ul className="collection to-do-list">
                    {this.state.month12.length ? (
                        <List>
                            {this.state.month12.map(month12 => (
                                <li className="collection-item">
                                    <div>{month12.task}
                                        <a href="#!" data-id={month12._id} className="secondary-content" onClick={this.handleCompleted}><i className="material-icons">done</i></a>
                                    </div>
                                </li>
                            ))}
                        </List>
                    ) : (<p className="collection-item center">{this.state.message}</p>)}
                </ul>

                <h4 className="subtitle center">9 Months Out</h4>
                <ul className="collection to-do-list">
                    {this.state.month9.length ? (
                        <List>
                            {this.state.month9.map(month9 => (
                                <li className="collection-item">
                                    <div>{month9.task}
                                        <a href="#!" id={month9._id} className="secondary-content" onClick={this.handleCompleted}><i className="material-icons">done</i></a>
                                    </div>
                                </li>
                            ))}
                        </List>
                    ) : (<p className="collection-item center">{this.state.message}</p>)}
                </ul>

                <h4 className="subtitle center">6 Months Out</h4>
                <ul className="collection to-do-list">
                    {this.state.month9.length ? (
                        <List>
                            {this.state.month6.map(month6 => (
                                <li className="collection-item">
                                    <div>{month6.task}
                                        <a href="#!" id={month6._id} className="secondary-content" onClick={this.handleCompleted}><i className="material-icons">done</i></a>
                                    </div>
                                </li>
                            ))}
                        </List>
                    ) : (<p className="collection-item center">{this.state.message}</p>)}
                </ul>

                <h4 className="subtitle center">4 Months Out</h4>
                <ul className="collection to-do-list">
                    {this.state.month4.length ? (
                        <List>
                            {this.state.month4.map(month4 => (
                                <li className="collection-item">
                                    <div>{month4.task}
                                        <a href="#!" id={month4._id}className="secondary-content" onClick={this.handleCompleted}><i className="material-icons">done</i></a>
                                    </div>
                                </li>
                            ))}
                        </List>
                    ) : (<p className="collection-item center">{this.state.message}</p>)}
                </ul>

                <h4 className="subtitle center">2 Months Out</h4>
                <ul className="collection to-do-list">
                    {this.state.month2.length ? (
                        <List>
                            {this.state.month2.map(month2 => (
                                <li className="collection-item">
                                    <div>{month2.task}
                                        <a href="#!" id={month2._id} className="secondary-content" onClick={this.handleCompleted}><i className="material-icons">done</i></a>
                                    </div>
                                </li>
                            ))}
                        </List>
                    ) : (<p className="collection-item center">{this.state.message}</p>)}
                </ul>

                <h4 className="subtitle center">Completed!</h4>
                <ul className="collection to-do-list">
                    {this.state.completed.length ? (
                        <List>
                            {this.state.completed.map(completed => (
                                <li className="collection-item">
                                    <div>{completed.task}
                                        <a href="#!" className="secondary-content"><i className="material-icons">done</i></a>
                                    </div>
                                </li>
                            ))}
                        </List>
                    ) : (<p className="collection-item center">{this.state.message}</p>)}
                </ul>
            </div>


        </div>
    )
}
}

export default ToDos;