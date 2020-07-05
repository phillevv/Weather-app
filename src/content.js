import React from 'react';
import {Spinner} from 'react-bootstrap'


class MyComponent extends React.Component {

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  constructor(props) {
    
    super(props);
    
    this.state = {
      inputValue: 'Hemse',
      text: 'Hemse',
      error: null,
      isLoaded: false,
      weather: []
    };

    
    
  }

  

  onClickButton1 = () => {
    this.setState({
      text: 'Lagos'
    });
  }

  onClickButton2 = () => {
    this.setState({
      text: 'Bangkok'
    });
  }


  
  componentDidMount() {


    const url = "https://api.openweathermap.org/data/2.5/weather?q="+this.state.text+"&appid=4f3448e7c6c1962c6166302b3a9ab54c";
    
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            weather: result.weather,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, weather } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return  <Spinner animation="grow" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>;
    } else {
      return (
        
        <ul>
          {weather.map(weather => (
            <div key={weather.id}>
              <div>{weather.main} {weather.description}</div>
            </div>
            
          ))}       <div>
          <button onClick={this.onClickButton1}>
            Button 1
          </button>
          <button onClick={this.onClickButton2}>
            Button 2
          </button>
          <h1>{this.state.text}</h1>
        </div>
    
        <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
        <input value={this.state.text}/>
  
        </ul> 
      
        
      );
    }
  }
}


function Content() {
  return (
    <div className="Content">

<MyComponent></MyComponent>


    </div>
  );
}

export default Content;
