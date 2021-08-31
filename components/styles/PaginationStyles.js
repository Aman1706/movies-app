import styled from 'styled-components';

export const PaginationStyles = styled.footer`
  font-weight: bold;
  margin-top: 20px;
  .pagination {
    padding: 0;
    margin: 0;
  }
  .pagination li {
    list-style: none;
    display: inline-block;
    padding: 0 1rem 1rem;
  }

  .disabled {
    color: #ebebe4;
    cursor: not-allowed;
  }

  .active {
    border-bottom: 2px solid #cc0000;
  }

  &:hover {
    cursor: pointer;
  }
`;
