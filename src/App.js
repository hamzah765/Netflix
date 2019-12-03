import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='all'>
        <h1>Frequently Asked Questions?</h1>
        <Netflix name="What is Netflix?" />
        <Netflix name="How much does Netflix Cost ?" />
        <Netflix name="Where can I Watch ?" />
        <Netflix name="How Do I Cancel ?" />
        <Netflix name="What Can I Watch On Netflix ?" />
        <Netflix name="How Does The Free Trail Work ?" />

        <h2>Try 30 Days Free</h2>
      </div>
    );
  }
}
const Netflix = prompt => {
  return (
    <div className="Netflix">
      {prompt.name}
      <div class="netflix"><div className='netflix'>+</div></div>
    </div>
  );
};



export default App;
