import Slider from "react-animated-slider";
import "../horizontal.css";
import "../slider-animations.css";
import "../styles.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

const slides = [
  {
    title: "First item",
    description: "Lorem ipsum",
    image: "https://s18.postimg.cc/9vhgup22x/img1.jpg",
  },
  {
    title: "Second item",
    description: "Lorem ipsum",
    image: "https://s18.postimg.cc/vunvhvvrt/img2.jpg",
  },
];

const Top = () => {
  return (
    // <Box
    //   sx={{
    //     paddingTop: "50px",
    //     position: "relative",
    //     width: "100%",
    //     height: "60dp",
    //   }}
    // >
    //   <Grid container spacing={3} sx={{ flexGrow: 1 }}>
    //     <Grid xs={6} xsOffset={3} md={2} mdOffset={0}>
    //       <Typography
    //         variant="h4"
    //         gutterBottom
    //         sx={{
    //           color: "white",
    //           textAlign: "left",
    //         }}
    //       >
    //         Top List
    //       </Typography>
    //     </Grid>
    //     <Grid xs={4} md={2} mdOffset="auto">
    //       <Typography
    //         variant="subtitle2"
    //         gutterBottom
    //         sx={{
    //           color: "white",
    //           textAlign: "left",
    //         }}
    //       >
    //         See All
    //       </Typography>
    //     </Grid>
    //   </Grid>
    <Slider className="slider-wrapper" autoplay={3000} infinite="true">
      {slides.map((slide, index) => (
        <div
          key={index}
          className="slider-content"
          style={{
            background: `url('${slide.image}') no-repeat center center`,
          }}
        >
          <div className="center">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <button>Watch</button>
          </div>
          <section>
            <span>
              Posted by <strong>{slide.title}</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
    // </Box>
  );
};

export default Top;
