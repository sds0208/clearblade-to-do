import 'clearblade-js-client';
import * as React from 'react';

class ToDo extends React.Component <any,any>{
  constructor(props: any) {
    super(props);
    this.state = { collection: [], selectedTask: {} }
      this.initCallback = this.initCallback.bind(this);
      this.collectionFetchCallback = this.collectionFetchCallback.bind(this);
      this.handleCheck = this.handleCheck.bind(this);
      this.selectTask = this.selectTask.bind(this);
  }

  public clbd = new ClearBlade();

  public initCallback(err: boolean, cb: any) {
     if (err) {
       throw new Error(cb);
   } else {
     var collection = this.clbd.Collection({collectionName: 'To-Do'});
     collection.fetch(this.collectionFetchCallback);
     }
  }

  public collectionFetchCallback (err: any, rows: any)  {
    if (err) {
      throw new Error (rows);
    } else {
      this.setState({ collection: rows });
    }
  }

  public componentDidMount() {
    this.clbd.init({
      URI: "https://platform.clearblade.com/",
      callback: this.initCallback,
      email: "sarahsantacruz86@gmail.com",
      password: "s5531253",
      systemKey: "bcecbbaf0bba81c88be2b7dcfb4c",
      systemSecret: "BCECBBAF0B8EB8A3CCE3C49CA2DB01"
    });
  };

  public handleCheck(task: any) {
    this.selectTask(task);
    const query = this.clbd.Query({collectionName: 'To-Do'});
    const q: any = query.equalTo('item', task.data.item);
    var changes = {
        completed: !task.data.completed
    };
    const callback = function (err: any, data: any) {
        if (err) {
        return "update error : " + JSON.stringify(data);
        } else {
        	return data;
        }
    };

   	const col = this.clbd.Collection({collectionName:"To-Do"});
    col.update(q, changes, callback);
  }

  public selectTask(task: any) {
    this.setState({ selectedTask: task });
  }

  public render() {
    return (
      <div className="ToDo2">
        {this.state.collection.map((task: any) =>
          <div key={task.key}>
            <form>
              <input type="checkbox" onClick={() => this.handleCheck(task)} defaultChecked={task.data.completed}/>
              <label>{task.data.item}</label>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default ToDo;
