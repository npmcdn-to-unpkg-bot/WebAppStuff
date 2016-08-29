var Todo = React.createClass({
	getInitialState: function(){
		return {editing:false}
	},
	
	edit: function(){
		alert('edit todo');
		this.setState({editing:true});
	},

	remove: function(){
		alert('remove todo');
		this.props.onRemove(this.props.index);
	},

	save: function() {
		var val = this.refs.newValue.value;
		//alert('Todo: '+val+' saved!');
		console.log(this.props.index);
		this.props.onChange(val, this.props.index);
		this.setState({editing:false});
	},

	todoDisplay: function(){
		return (
			
			/*<li className="todo">{this.props.todo}</li>*/
			<li className="todo">
				<span onClick={this.edit}>{this.props.children}</span>
				<button className="btn btn-default btn-sm glyphicon glyphicon-trash remove pull-right" 
					onClick={this.remove}/>
			</li>
		);
	},

	todoForm: function(){
		return (
			
			/*<li className="todo">{this.props.todo}</li>*/
			<li className="todo">
				<span>
					<input type="text" placeholder="Edit Todo" ref="newValue" defaultValue={this.props.children} />
				</span>
				<button className="btn btn-default btn-sm glyphicon glyphicon-floppy-disk remove pull-right" 
					onClick={this.save}/>
			</li>
		);
	},

	render: function(){
		if(this.state.editing){
			return this.todoForm();
		} else{
			return this.todoDisplay();
		}
	}
});

var TodoList = React.createClass({
	getInitialState: function(){
		return {
			todos: ['Call Henry', 'Pay Phone Bill', 'Make Dentist Apt'],
			text:"", placeholder: "Add Todo",
			input_style: "form-control"
		};
	},
	onChange: function(e){
		this.setState({text: e.target.value});
	},
	add: function(e){
		var arr = this.state.todos;
		var newTodo = this.refs.newTodo.value;
		//console.log('New Todo: '+newTodo);
		if(!newTodo){
			e.preventDefault();
			this.setState({placeholder:"Type a Todo", input_style: "form-control red"});
		} else{
			arr.push(newTodo);
			this.setState({todos: arr, text:"", placeholder:"Add Todo", input_style: "form-control"});
		}
	},
	update: function(newValue, i){
		var arr = this.state.todos;
		arr[i] = newValue;
		this.setState({todos: arr});
	},
	remove: function(i){
		var arr = this.state.todos;
		arr.splice(i, 1);
		this.setState({todos: arr});
		console.log('Todo#: '+(i+1)+' removed!');
	},
	eachTodo: function(todo, i){
		return <Todo key={i} index={i}
				onChange={this.update}
				onRemove={this.remove}>
			{todo}</Todo>
	},
	render: function(){
		return(
		<div>
			<h1>Things to Do</h1>
			<div className="form-inline">
				<div className="form-group">
					<input ref="newTodo" className={this.state.input_style} placeholder={this.state.placeholder} 
						value={this.state.text} onChange={this.onChange} />
					<button onClick={this.add} className="btn btn-default btn-sm">+</button>
				</div>
			</div>
			<ul>
				{/*<Todo todo="Call Henry"/>
				<Todo todo="Pay Phone Bill"/>
				<Todo todo="Make Appt"/>
				<Todo>Call Henry</Todo>
				<Todo>Pay Phone Bill</Todo>
				<Todo>Make Appt</Todo>*/}

				{this.state.todos.map(this.eachTodo)}
			</ul>
		</div>
		);
	}
});

ReactDOM.render(<TodoList />, document.getElementById('todo'));