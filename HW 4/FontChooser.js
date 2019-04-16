class FontChooser extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
		min:'4',
		max:'40',
		size:'16',
		text:'Fun with React!',
		//bold:'false'};
	};

	handleClick() {
		this.setState( {hidden: !this.state.hidden});
		console.log(this.state);
	};
	miniMe() {
		if (this.size.state > min){
			this.setState( {size: size-- });
		}
		else{
			;
		}
	};
	maxiMe() {
		if (this.size.state < max){
			this.setState( {size: size++ });
		}
		else{
			;
		}
    };

    render() {
		var aria = this.state.hidden ? 'false' : 'true';
		var mini = this.state.min;
		var maxe = this.state.max;

	return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" hidden='false' onClick={this.handleClick.bind(this)}/>
	       <button id="decreaseButton" hidden='false' onClick={this.minMe.bind(this)} onClick={this.handleClick.bind(this)}>-</button>
	       <span id="fontSizeSpan" hidden='false' onClick={this.handleClick.bind(this)}>{this.props.size}</span>
	       <button hidden='false' id="increaseButton"onClick={this.maxMe.bind(this)} onClick={this.handleClick.bind(this)}>+</button>
	       <span id="textSpan">{this.props.text}</span>
	       </div>
	);
    }
}

ReactDOM.render(
	<div>
	  <FontChooser min='4' max='40' size='16' text='Fun with React!' bold='false'/>
	 </div>,
  document.getElementById('container'))
  ;

//onClick={this.handleClick.bind(this)}
//hidden:'false',