import React from 'react';
import SmallField from './SmallField';

class BigField extends React.Component {
  renderCell(i) {
    const values = this.props.values[i].slice();

    return (
      <div key={i} className='big-field__cell'>
        <SmallField values={values} onClick={(j) => this.props.onClick(i, j)}/>
      </div>
    );
  }

  render() {
    return (
      <div className='big-field'>

        <div className='big-field__row'>
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
        </div>

        <div className='big-field__row'>
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
        </div>

        <div className='big-field__row'>
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </div>
        
      </div>
    );
  }
}

export default BigField;