import styled from "styled-components"

const TKMButton = styled.button`
  border: 2px solid red;
  background-color: cadetblue;
`

//  样式的继承
export const TKMButtonWrapper = styled(TKMButton)`
  color: orange;
  font-size: 20px;
`

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