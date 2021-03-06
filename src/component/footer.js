import React from "react";
import { MDBContainer,MDBFooter } from "mdbreact";
import './footer.css';

const FooterPage = () => {
  return (
    <MDBFooter  className="font-small footer">      
        <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
         Created with ❤️ by <a href="https://akshaykurhekar.github.io/AkshayKurhekarPortfolio/" rel="noreferrer" target="_blank"> Akshay Kurhekar</a> using React.js @ 2021
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;