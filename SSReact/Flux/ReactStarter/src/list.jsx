var React = require('react');
var ListItem = require('./list-item');

module.exports = React.createClass({
	render: function(){
		return <div>
			{this.renderList()}
		</div>
	},
	renderList: function(){
		if(!this.props.items){
			return <h4>Add a todo to get started</h4>
		} else{
			var children = [];
			for(key in this.props.items){
				var item = this.props.items[key];
				item.key = key; //Adding key prop bc the one passed below is trimmed by react
				children.push(<ListItem item={item} key={key}></ListItem>);
			}
			return children;
		}
	}
});