import styled from "@emotion/styled";

export const NameList = styled.ul`
list-style: square inside;


`;

export const ListItem = styled.li`
display:flex;
justify-content: space-between;
width: 320px;
font-weight: 500;
&:not(:last-child){
    margin-bottom: 10px;
}

`;
export const DeleteButton = styled.button`
background-color: #228B22;
cursor: pointer;
border-radius: 4px;

`