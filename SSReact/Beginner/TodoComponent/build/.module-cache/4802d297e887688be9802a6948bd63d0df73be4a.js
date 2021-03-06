var Todo = React.createClass({displayName: "Todo",
	render: function(){
		return (
			

				React.createElement("ul", null, 
					/*<li className="todo">{this.props.todo}</li>*/
					React.createElement("li", {className: "todo"}, this.props.children)
				)
		);
	}
});

ReactDOM.render(
		React.createElement("div", null, 
			React.createElement("h1", null, "Things to Do"), 
			React.createElement("div", {className: "form-inline"}, 
				React.createElement("div", {className: "form-group"}, 
					React.createElement("input", {className: "form-control", placeholder: "Add Todo"}), 
					React.createElement("button", {className: "btn btn-default btn-sm"}, "+")
				)
			), 
			React.createElement("ul", null, 
				/*<Todo todo="Call Henry"/>
				<Todo todo="Pay Phone Bill"/>
				<Todo todo="Make Appt"/>*/
				React.createElement(Todo, null, "Call Henry"), 
				React.createElement(Todo, null, "Pay Phone Bill"), 
				React.createElement(Todo, null, "Make Appt")
			)
		), 

		document.getElementById('todo'));
