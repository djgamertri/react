import styled from "styled-components";

export const Nav = styled.div`
    top: 0;
    left: ${({open}) => (open ? "0" : "-345px")};
    width: 345px;
    height: 100%;
    position: fixed;
    background: var(--color_p);
    transition: 0.5s;
    z-index: 2;
`;