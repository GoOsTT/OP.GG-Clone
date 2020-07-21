import React from 'react';
import './navbar.css'


class Navbar1 extends React.Component{
    render () {
        return(
            <div className="navbar">
                
                <div className="opgglogo">
                    <a href="https://www.op.gg/">
                        <img 
                        src="https://opgg-static.akamaized.net/images/gnb/svg/00-opgglogo.svg"
                        alt="op.gg logo"
                        />
                    </a>
                </div>
                
                <div className="lol_logo_es_felirat">
                    <img
                    src="https://opgg-gnb.akamaized.net/static/images/icons/img-navi-lol-white.svg"
                    alt="lol logo"
                    />
                    <span className="lol_felirat">
                        <h4>League of Legends</h4>
                    </span>
                </div>
            </div>

        );
    }
};

export default Navbar1;