import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { useState } from "react";
import { sliderItems } from "../../constants/sliderItems";
import {
  Arrow,
  Container,
  Image,
  ImageContainer,
  InfoContainer,
  Slide,
  Wrapper,
  Title,
  Desc,
  Button,
} from "./slider-style";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleSlide = (direction) => {
    if (direction === "left") {
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      } else {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleSlide("left")}>
        <ArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleSlide("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
