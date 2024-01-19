class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "" };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    const value = event.target.value;
    switch (value) {
      case "=":{
          if (this.state.question !== "") {
            let result = "";
            try {
              result = eval(this.state.question);
            }
            catch (err) {
              this.setState({
                answer: "MATH ERROR" });

            }
            if (result === undefined) {
              this.setState({ answer: "MATH ERROR" });
            } else
            {
              this.setState({
                question: "",
                answer: result });

            }
          }
          break;
        }
      case "del":{
          var str = this.state.question;
          str = str.substr(0, str.length - 1);
          this.setState({
            question: str });

          break;
        }
      case "AC":{
          this.setState({
            question: "0",
            answer: " " });

          break;
        }
      default:{
          this.setState({
            question: this.state.question += value });

          break;
        }}

  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "main-body" }, /*#__PURE__*/
    React.createElement(Screen, { question: this.state.question }), /*#__PURE__*/
    React.createElement(Screen, { answer: this.state.answer }), /*#__PURE__*/
    React.createElement(Buttons, { handleClick: this.handleClick })));


  }}

class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: props.question,
      answer: props.answer };

  }
  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      this.setState({
        question: this.props.question,
        answer: this.props.answer });

    }
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "screen", id: "display" }, this.state.question || this.state.answer));

  }}

class Buttons extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "btn-box" }, /*#__PURE__*/
    React.createElement("button", { value: "0", className: "btn-style", onClick: this.props.handleClick, id: "zero" }, "0"), /*#__PURE__*/
    React.createElement("button", { value: "del", className: "btn-style", onClick: this.props.handleClick }, "DEL"), /*#__PURE__*/
    React.createElement("button", { value: "AC", className: "btn-style", onClick: this.props.handleClick, id: "clear" }, "AC"), /*#__PURE__*/
    React.createElement("button", { value: "1", className: "btn-style", onClick: this.props.handleClick, id: "one" }, "1"), /*#__PURE__*/
    React.createElement("button", { value: "2", className: "btn-style", onClick: this.props.handleClick, id: "two" }, "2"), /*#__PURE__*/
    React.createElement("button", { value: "3", className: "btn-style", onClick: this.props.handleClick, id: "three" }, "3"), /*#__PURE__*/
    React.createElement("button", { value: "4", className: "btn-style", onClick: this.props.handleClick, id: "four" }, "4"), /*#__PURE__*/
    React.createElement("button", { value: "5", className: "btn-style", onClick: this.props.handleClick, id: "five" }, "5"), /*#__PURE__*/
    React.createElement("button", { value: "6", className: "btn-style", onClick: this.props.handleClick, id: "six" }, "6"), /*#__PURE__*/
    React.createElement("button", { value: "7", className: "btn-style", onClick: this.props.handleClick, id: "seven" }, "7"), /*#__PURE__*/
    React.createElement("button", { value: "8", className: "btn-style", onClick: this.props.handleClick, id: "eight" }, "8"), /*#__PURE__*/
    React.createElement("button", { value: "9", className: "btn-style", onClick: this.props.handleClick, id: "nine" }, "9"), /*#__PURE__*/
    React.createElement("button", { value: "+", className: "btn-style", onClick: this.props.handleClick, id: "add" }, "+"), /*#__PURE__*/
    React.createElement("button", { value: "-", className: "btn-style", onClick: this.props.handleClick, id: "subtract" }, "-"), /*#__PURE__*/
    React.createElement("button", { value: "=", className: "btn-style", onClick: this.props.handleClick, id: "equals" }, "="), /*#__PURE__*/
    React.createElement("button", { value: "/", className: "btn-style", onClick: this.props.handleClick, id: "divide" }, "/"), /*#__PURE__*/
    React.createElement("button", { value: "*", className: "btn-style", onClick: this.props.handleClick, id: "multiply" }, "*"), /*#__PURE__*/
    React.createElement("button", { value: ".", className: "btn-style", onClick: this.props.handleClick, id: "decimal" }, ".")));


  }}

const container = document.getElementById("calculator");
ReactDOM.render( /*#__PURE__*/React.createElement(Calculator, null), container);