import React from "react";
import { Container, LinkArea, LinkIcon } from "./styled";
import { useHistory, useLocation } from "react-router-dom";
export default ({ link, icon, title, close }) => {
  let history = useHistory();
  let location = useLocation();
  let isActive = location.pathname == link;
  function handleClick(e) {
    e.preventDefault();
    history.push(link);
  }
  return (
    <>
      <Container style={{ marginLeft: close ? "0px" : "-220px" }}>
        <LinkArea
          data-tip={title}
          data-for="tip-right"
          active={isActive}
          href={link}
          onClick={handleClick}
        >
          <LinkIcon src={icon} />
        </LinkArea>
      </Container>
    </>
  );
};
