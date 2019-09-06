import React, {Component} from 'react';
import './App.css'

class App extends Component {
  render() {
    const value = 1;
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };
    return (
      <fragment>
        <div className='조건문 테스트'>
          {
            (() => {
              if (value === 1) return (<div>하나</div>);
              if (value === 2) return (<div>둘</div>);
              if (value === 3) return (<div>셋</div>);
            })()
          }
        </div>
        <div className='스타일 테스트' style={style}>
          hi there
        </div>
        <div className='App'>
          css파일 import 해서 스타일링
        </div>
        <div className='주석 테스트' //태그 속성안에 주석 넣을때
        >
          {/* 태그 사이에는 이렇게 */}
        </div>
      </fragment>
    );
  }
}

export default App;
