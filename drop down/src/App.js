import React, {useState} from 'react';
import Dropdown from 'react-animated-dropdown';

const fruits = ["Apple", "Oranges", "Bananas"];

const App = () => {
  const [fruit, setFruit] = useState('') 
  
  function changeHandler(e) {
    setFruit(e.target.value)
  }
  
  return(
      <Dropdown
        //Recommended props
        dropdownOptions={fruits}
        dropdownValue={fruit}  //If no initial value is empty, the package will default to 'Select...' as placeholder
        onChange={(e) => setFruit(e.target.value)}
        
        //Optional Props
        width="300px"
        dropdownPlaceholder="Placeholder"  //This only works if initial dropdownValue is empty
        mainFontColor="#fff"
        dropdownFontColor="blue"
        mainBackgroundColor = "red"
        dropdownBackgroundColor="green"
        optionHoverColor= "yellow" 
        fontSize="30px"
        margin="1em 2em"
        closeOnOutsideClick={false}  //Whether the dropdown closes on clicking outside the dropdown, default = true
    />
    );
  }
  
  export default App;