import { Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import { createStyles, makeStyles } from "@mui/styles";
import image1 from "../../assets/images/product-1.jpg";
import image2 from "../../assets/images/product-2.jpg";
import image3 from "../../assets/images/product-3.jpg";
import image4 from "../../assets/images/product-4.jpg";

const useStyles = makeStyles((theme) =>
  createStyles({
    headingContainer: {
      width: "100%",
      height: "40px",
      position: "sticky",
      top: "70px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "white",

      zIndex: 2000,
    },
    heading: {
      fontWeight: "bold",
      flex: 1,
      paddingLeft: 10,
      fontSize: 24,
    },
    seeMore: {
      fontSize: 12,
      color: "#4DAB96",
      paddingRight: 10,
      cursor: "pointer",
    },
  })
);

export default function ProductCards(props) {
  const { setShowProductDetailAnimation, showProductDetailAnimation } = props;
  const classes = useStyles();
  const productsData = [
    { image: image1, price: "$12.00", favourite: false },
    { image: image2, price: "$18.00", favourite: true },
    { image: image3, price: "$20.00", favourite: false },
    { image: image4, price: "$25.00", favourite: false },
    { image: image1, price: "$10.00", favourite: false },
    { image: image1, price: "$12.00", favourite: false },
    { image: image2, price: "$18.00", favourite: true },
    { image: image3, price: "$20.00", favourite: false },
    { image: image4, price: "$25.00", favourite: false },
    { image: image1, price: "$10.00", favourite: false },
  ];

  return (
    <div style={{ marginTop: 10 }}>
      {!showProductDetailAnimation && (
        <div className={classes.headingContainer}>
          <Typography
            className={classes.heading}
            style={{ fontWeight: "bold", fontSize: 20 }}
          >
            Best Sale Product
          </Typography>
          <Typography className={classes.seeMore} style={{ fontSize: 12 }}>
            See more
          </Typography>
        </div>
      )}
      <Grid container style={{ width: "100%" }} rowSpacing={2}>
        {productsData.map((productData, index) => {
          return (
            <Grid item xs={6} key={index}>
              <ProductCard
                image={productData.image}
                price={productData.price}
                setShowProductDetailAnimation={setShowProductDetailAnimation}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
