import {
  NavigationStyled,
  UpperNavigationStyled,
  LowerNavigationStyled,
  LowerNavigationOuterStyled,
} from "../../styles/layout/Container.styled.jsx";

import { LinkStyled } from "../../styles/layout/Link.styled";
import { IconStyled } from "../../styles/layout/Icon.styled";
import { InputStyled } from "../../styles/layout/Input.styled";
import { useState } from "react";
import { ColorSwitchStyled } from "../../styles/layout/Button.styled.jsx";
function Nav() {
  const [colorSwitch, setColorSwitch] = useState(false);

  return (
    <NavigationStyled>
      <UpperNavigationStyled>
        <LinkStyled to="/">
          <IconStyled className="fas fa-book-open"></IconStyled>
        </LinkStyled>

        <InputStyled type="text" placeholder="Search" />
        <ColorSwitchStyled onClick={() => setColorSwitch(!colorSwitch)}>
          {colorSwitch ? "Light" : "Dark"}
        </ColorSwitchStyled>
      </UpperNavigationStyled>
      <LowerNavigationOuterStyled>
        <LowerNavigationStyled>
          <LinkStyled to="/Auth">
            <IconStyled className="fas fa-user-circle"></IconStyled>
          </LinkStyled>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="/Favorites">Favorites</LinkStyled>
          <LinkStyled to="/Books">Books</LinkStyled>
        </LowerNavigationStyled>
      </LowerNavigationOuterStyled>
    </NavigationStyled>
  );
}

export default Nav;
