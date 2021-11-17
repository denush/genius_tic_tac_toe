import React from "react";

class SmallField extends React.Component {

  renderCell(i) {
    const value = this.props.values[i];

    return (
      <div
        onClick={() => this.props.onClick(i)}
        className='small-field__cell'
        key={i}
      >
        {value}
      </div>
    );
  }

  render() {
    return (
      <div className='small-field'>

        <div className='small-field__row'>
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
        </div>

        <div className='small-field__row'>
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
        </div>

        <div className='small-field__row'>
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </div>

      </div>
    );
  }
}

export default SmallField;