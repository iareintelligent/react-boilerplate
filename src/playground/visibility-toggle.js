class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            title: "Visibility Toggle",
            visibility: false,
            details: "Hey. These are some details you can now see!"
        };
    }
    toggleVisibility() {
        this.setState(prevState => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? "Hide" : "Show"}
                </button>
                {this.state.visibility && <p>{this.state.details}</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
