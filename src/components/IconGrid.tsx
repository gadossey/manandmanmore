// src/components/IconGrid.tsx

import styled from "styled-components";

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export default IconGrid;
