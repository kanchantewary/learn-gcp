import React from 'react';
import Linkify from 'react-linkify';


const Message = (props) => {
    return (

        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card-panel light-blue lighten-5 z-depth-1">
                <div className="row valign-wrapper">
                    {props.speaks==='bot' &&
                    <div className="col s2">
                        <a href="/" className="btn-floating btn-large waves-effect waves-dark blue">{props.speaks}</a>
                    </div>
                    }
                    <div className="col s10">
                      <span className="black-text">
	    		<Linkify>
                        {props.text}
	    		</Linkify>
                      </span>
                    </div>
                    {props.speaks==='me' &&
                    <div className="col s2">
                        <a href="/" className="btn-floating btn-large waves-effect waves-dark blue">{props.speaks}</a>
                    </div>
                    }
                </div>
            </div>
        </div>

    );
};

export default Message;
