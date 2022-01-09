import React from "react";
import Search from "@mui/icons-material/Search";
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  MenuItem,
  Right,
  SearchContainer,
  Wrapper,
} from "./nav-bar-style";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search
              style={{
                color: "gray",
                fontSize: 16,
              }}
            />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>BERKO</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
