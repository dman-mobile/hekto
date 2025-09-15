import { Body } from "../styled-components/Typography.styles";
import { GridIcon, ListIcon } from "../icons/Icons";
import { FlexCenter, FlexStart } from "../styled-components/Flex.styles";
import { Nav, NavWrapper } from "./Nav.styles";
import { Select } from "./ui/Select.types";

export default function ProductsNav() {
  return (
    <Nav>
      <NavWrapper>
        <FlexCenter>
          <Body>Per page</Body>
          <Select className="picker" name='per-page' id='per-page'>
            <option>10</option>
            <option>20</option>
          </Select>
        </FlexCenter>
        <FlexCenter>
          <Body>Sort By</Body>
          <Select name='sort' id='sort'>
            <option>Price: High -&gt; Low</option>
            <option>Price: Low -&gt; High</option>
          </Select>
        </FlexCenter>
        <FlexCenter>
          <Body>View</Body>
          <FlexStart>
            <GridIcon />
            <ListIcon />
          </FlexStart>
        </FlexCenter>
      </NavWrapper>
    </Nav>
  )
}