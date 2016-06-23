import React from 'react';
import ReactDOM from 'react-dom';


class FindUS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            twitterCount: props.twitterInitialCount,
            facebookCount: props.facebookInitialCount
        };
        this.twitterClick = this.twitterClick.bind(this);
        this.facebookClick = this.facebookClick.bind(this);
    }
    twitterClick(){
        this.setState({
            twitterCount: this.state.twitterCount + 1
        });
    }
    facebookClick(){
        this.setState({
            facebookCount: this.state.facebookCount + 1
        });
    }
    render() {
       return(
           <div>
               <b> Find Us </b>
               <br />
               <i onClick={this.twitterClick}> {this.props.twitterLink} </i>
               <br />
               <i onClick={this.facebookClick}> {this.props.facebookLink} </i>
               <div>
                   You have clicked on Twitter Link { this.state.twitterCount } times.
               </div>
               <div>
                   You have clicked on FaceBook Link { this.state.facebookCount } times.
               </div>
           </div>
       );
   }
}

FindUS.propTypes = {
    twitterInitialCount: React.PropTypes.number,
    facebookInitialCount : React.PropTypes.number
};

FindUS.defaultProps = {
    twitterInitialCount: 0,
    facebookInitialCount: 0
};

export default FindUS;


