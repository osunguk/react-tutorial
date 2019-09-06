import React, {Component} from 'react';
import './App.css'
import MyName from './MyName';
import MyName2 from './MyName2';
import Counter from './Counter';
import PhoneForm from './component/PhoneForm'
import PhoneInfo from './component/PhoneInfo';
import PhoneInfoList from './component/PhoneInfoList';

class App extends Component {
  
  id = 2
    state = {
      information: [
        {
          id: 0,
          name: '홍길동',
          phone: '010-0000-0000'
        },
        {
          id: 1,
          name: '임꺽정',
          phone: '010-1234-1234'
        }
      ]
    }
    handleCreate = (data) => {
      const { information } = this.state;
      this.setState({
        information: information.concat({ id: this.id++, ...data})
      })
    }
  render() { 
    const value = 1
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };
    const { information } = this.state;
    return (
      <div>
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
          css파일 import 해서 스타일링 테스트
        </div>
        <div className='주석 테스트' //태그 속성안에 주석 넣을때
        >
          {/* 태그 사이에는 이렇게 */}
        </div>
        <div className='컴포넌트 참조'>
          <MyName name='다른 컴포넌트'></MyName>
        </div>
        <div className='컴포넌트 default 테스트'>
          <MyName></MyName>
        </div>
        <div className='함수형 컴포넌트'>
          <MyName2></MyName2>
        </div>
        <div className='Counter 컴포넌트'>
          <Counter></Counter>
        </div>
        <div className='input 구현'>
          <PhoneForm
            onCreate={this.handleCreate}  
          ></PhoneForm>
          {JSON.stringify(information)}
        </div>
        <div>
          <PhoneInfo
            onCreate={this.handleCreate}>
          </PhoneInfo>
          <PhoneInfoList data={this.state.information}>
          </PhoneInfoList>
        </div>

      </div>
    );
  }
}

export default App;
