// You can live edit this code below the import statements
import React from 'react';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

const width = '300px', height = '150px';
const Container = styled.div`
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  width: ${width};
  height: ${height};
`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;

class SlideExample extends React.Component {
  constructor (props) {
    super(props);
    this.state = { show: 1 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick () {
    let next = this.state.show + 1
    next = next > 4 ? 1 : next;
    this.setState({ show: next });
  }

  renderSlide = () => {
    if (this.state.show == 1)
      return <Slide right>
        <h1>React Reveal 11111111</h1>
        <h1>React Reveal 11111111</h1>
        <h1>React Reveal 11111111</h1>
        <h1>React Reveal 11111111</h1>
      </Slide>
    else if (this.state.show == 2) {
      return <Slide top >
        React Reveal 222222222222222
        </Slide>
    } else if (this.state.show == 3) {
      return <Slide right >
        React Reveal 33333333333333
        </Slide>
    } else if (this.state.show == 4) {
      return <Slide right >
        React Reveal 44444444444444
        </Slide>
    }
  }
  render () {
    return (
      <Container>
        {this.renderSlide()}
        {/* <Arrow >{'<'}</Arrow> */}
        <Arrow right onClick={this.handleClick}>{'>'}</Arrow>
      </Container>
    );
  }
}

export default SlideExample;
