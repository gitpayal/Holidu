import React from "react";
import { connect } from "react-redux";

import { getOffers } from "./actions";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';


export function Offers({ isFetching, offers, getOffers }) {

  return (
    <div >
      <ButtonDiv >
        <Button onClick={getOffers}>Retrieve Apartment Offers</Button>
      </ButtonDiv>
      <OfferDiv>
        {isFetching && <p>One moment...</p>}
        <OfferSubDiv>
           {!isFetching && offers.length > 0 && (
            offers.map(({ id, provider, details, photos, apartmentType, price, detailsLink }) => (
              <div key={id} style={apartmentCard} >
                <div style={{width: "30%"}}>
                  <h2 style={Header}>{price.daily} {"€ for"} {details.guestsCount} {" people per day  for "} {details.bedroomsCount} {"bedrooms"}</h2>
                  <img style= {{}} src={provider.logoUrl}/>
                  <p style={details}><a href={detailsLink}> {details.name} </a></p>
                  <p style={details}>{"Apartment Type : "} {apartmentType}</p>
                  <p style={details}>{"Price : "} {price.daily} {" €"} </p>
                  <p style={details}>{"Guest count : "} {details.guestsCount} </p>
                  <p style={details}>{"Bedroom Count : "} {details.bedroomsCount} </p>
                  <p style={details}>{"Size : "} {details.shortName[0]} {" "}  {details.shortName[1]}</p>
                  <p style={details}>{"Available : "}  {details.isAvailable ? "Yes" : "No"}</p>
                  <p style={details}>{"Express Booking Available : "}  {details.isExpressBookable ? "Yes" : "No"}</p>
                  </div>

                <div style={CarouselDiv}>
                  <Carousel>
                    {
                      photos.map(({ hr }) => (
                        <img src={hr} height="100%" width="100%" />
                      ))
                    }
                  </Carousel>
                </div>
                </div>
            ))
          )}
        </OfferSubDiv>
        </OfferDiv>
    </div>
  )

}
const apartmentCard = {
  margin: "2px auto",
  backgroundColor: "white",
  boxSizing: "border-box",
  border: '5px solid green',
  display: "block",
  verticalAlign: "textTop",
  marginBottom: 5,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center"
}

const Header = {
  padding: "10px 20px",
  textAlign: "center",
  color: "red",
  fontSize: "22px"
}
const CarouselDiv = {
  width: "70%",
  backgroundColor: "green"
}
const Button = styled.button`
background: blue;
border-radius: 15px;
color: white;
width:200px,
height:100px
`;
const ButtonDiv = styled.div`
display: "flex";
flexDirection: "column";
width: "100%";
height: "10%"
`;
const OfferDiv = styled.div`
display: "flex";
flexDirection: "column";
width: "100%";
`;
const OfferSubDiv = styled.div`
width: "100%";
backgroundColor: "orange"
`;




const mapStateToProps = (state, props) => {
  const { app, offer } = state;
  const { offers: offers_data = {} } = app; 
  const { result = {}, isFetching } = offer;
  const { offers: offer_ids = [] } = result; 

  const offers = offer_ids.map(offer_id => offers_data[offer_id]);

  return {
    offers,
    isFetching
  };
};
const mapDispatchToProps = {
  getOffers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Offers);
