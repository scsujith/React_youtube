import React, { Component } from 'react';

//const SearchBar = () => {
//  return(
//     <div> <input />
//     <h3>hi</h3>
//     </div>
//   );
// };
class SearchBar extends Component {
  render() {
      return <input onchange={this.onInputChange} />;
  }
  onInputChange(event){
    console.log(event.target.value);
  }
}
export default SearchBar;
