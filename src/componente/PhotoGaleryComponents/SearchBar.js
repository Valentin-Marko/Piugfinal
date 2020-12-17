import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui blue secondary inverted segment">
        <form onSubmit={this.onFormSubmit} className="ui  form">
          <div className="field">
            <label style={{ color: "white" }}>
              Image search of your favourite resorts
            </label>
            <input
              value={this.state.term}
              type="text"
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
