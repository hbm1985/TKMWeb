import styled from "styled-components"

export const HomeWrapper = styled.div`
  background-color: chocolate;

  .top {
    .banner {
      color: red;
    }
  }

  .bottom {
    .title {
      color: ${props => props.theme.color};
    }
  }

  .product-list {
    .item {
      color: skyblue;
      font-size: ${props => props.theme.size};
    }
  }
`