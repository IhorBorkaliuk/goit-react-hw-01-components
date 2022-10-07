import styled from "@emotion/styled";

export const Table = styled.table`
  font-family: 'Lucida Sans Unicode', 'Lucida Grande', Sans-Serif;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 5px;
  background: #e1e3e0;
  border-radius: 20px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  margin-bottom: 50px;
`;
export const Caption = styled.thead `
  padding: 10px;
  color: white;
  background: #8FD4C1;
  font-size: 18px;
  text-align: left;
  font-weight: bold;
`
export const TH = styled.th`
  font-size: 22px;
  font-weight: 300;
  padding: 12px 10px;
  border-bottom: 2px solid green;
  color: green;
`;

export const TR = styled.tr`
  border-bottom: 2px solid #f56433;
`;