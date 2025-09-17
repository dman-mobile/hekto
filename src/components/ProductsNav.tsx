import { ProductsNavProps } from "@/types/Product";
import { GridIcon, GridIconFilled, ListIcon, ListIconFilled } from "../icons/ProductsPageIcons.tsx";
import { FlexCenter, FlexStart } from "../styled-components/Flex.styles";
import { Nav, NavWrapper } from "./Nav.styles";
import { ViewPickerButton } from "./Products.styles";
import PerPageSelector from "./ui/PerPageSelector";
import SortSelector from './ui/SortSelector';

export default function ProductsNav({
  itemsPerPage,
  onPerPageChange,
  sortBy,
  onSortByChange,
  view,
  onViewChange,
}: ProductsNavProps) {
  return (
    <Nav>
      <NavWrapper>
        <FlexCenter>
          <PerPageSelector value={itemsPerPage} onChange={onPerPageChange} />
        </FlexCenter>
        <FlexCenter>
          <SortSelector value={sortBy} onChange={onSortByChange} />
        </FlexCenter>
        <FlexCenter>
          <FlexStart className="view-picker-container">
            <ViewPickerButton isActive={view === 'grid'} onClick={() => onViewChange('grid')}>
              {view === 'grid' ? <GridIconFilled /> : <GridIcon /> }
            </ViewPickerButton>
            <ViewPickerButton isActive={view === 'list'} onClick={() => onViewChange('list')}>
              {view === 'list' ? <ListIconFilled /> : <ListIcon /> }
            </ViewPickerButton>
          </FlexStart>
        </FlexCenter>
      </NavWrapper>
    </Nav>
  );
}