import React, { Component } from "react";
import Heading from "../../components/Heading"
import List from "../../components/List"
import "./ToDos.css";
import API from "../../utils/API";

class ToDos extends Component {
    state = {

        user_id: "",
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
        this.getTasks();
    };

    handleCompleted = (taskid) => {
        console.log(taskid);
        API.updateTask(taskid)
        .then(() => {
            this.getTasks();
        });
    };

    //this id needs to be the req.user._id
    getTasks = () => {
        API.getUser()
            .then(res => {
                const stateObj = {
                    month12: [],
                    month9: [],
                    month6: [],
                    month4: [],
                    month2: [],
                    completed: []
                };
                for (let i = 0; i < res.data.tasks.length; i++) {
                    if (!res.data.tasks[i].completed && res.data.tasks[i].timeCategory === "12") {
                        stateObj.month12.push(res.data.tasks[i])
                    }
                    else if (!res.data.tasks[i].completed && res.data.tasks[i].timeCategory === "9") {
                        stateObj.month9.push(res.data.tasks[i])
                    }
                    else if (!res.data.tasks[i].completed && res.data.tasks[i].timeCategory === "6") {
                        stateObj.month6.push(res.data.tasks[i])
                    }
                    else if (!res.data.tasks[i].completed && res.data.tasks[i].timeCategory === "4") {
                        stateObj.month4.push(res.data.tasks[i])
                    }
                    else if (!res.data.tasks[i].completed && res.data.tasks[i].timeCategory === "2") {
                        stateObj.month2.push(res.data.tasks[i])
                    }
                    else if (res.data.tasks[i].completed) {
                        stateObj.completed.push(res.data.tasks[i])
                    }
                }

                this.setState(stateObj);
            }
            
            )
            .catch(err => console.log(err));
            
    };

render() {
    return (
        <div>
            <Heading bg="toDoHead" title="To Do List" subtitle="Marrymint helps you keep track of all the little details in one place. We belive that wedding planning should be fun, not stressful." />
            <div className="container">
                <h4 className="subtitle center">12 Months Out</h4>
                <ul className="collection to-do-list">
                    {this.state.month12.length ? (
                        <List>
                            {this.state.month12.map(month12 => (
                                <li className="collection-item" key={month12._id}>
                                    <div>{month12.task}
                                        <a href="#!" className="secondary-content" onClick={() => this.handleCompleted(month12._id)}><i className="material-icons">done</i></a>
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
                                <li className="collection-item" key={month9._id}>
                                    <div>{month9.task}
                                        <a href="#!" id={month9._id} className="secondary-content" onClick={() => this.handleCompleted(month9._id)}><i className="material-icons">done</i></a>
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
                                <li className="collection-item" key={month6._id}>
                                    <div>{month6.task}
                                        <a href="#!" id={month6._id} className="secondary-content" onClick={() => this.handleCompleted(month6._id)}><i className="material-icons">done</i></a>
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
                                <li className="collection-item" key={month4._id}>
                                    <div>{month4.task}
                                        <a href="#!" id={month4._id}className="secondary-content" onClick={() => this.handleCompleted(month4._id)}><i className="material-icons">done</i></a>
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
                                <li className="collection-item" key={month2._id}>
                                    <div>{month2.task}
                                        <a href="#!" id={month2._id} className="secondary-content" onClick={() => this.handleCompleted(month2._id)}><i className="material-icons">done</i></a>
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
                                <li className="collection-item" key={completed._id}>
                                    <div>{completed.task}
                                        <a href="#!" className="secondary-content"></a>
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