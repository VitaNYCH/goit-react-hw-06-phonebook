import styled from '@emotion/styled';

export const FormStyle = styled.form`
margin: 0;

display: flex;
flex-direction: column;
justify-content: center;

box-sizing: border-box;
width: 500px;
height: 200px;
border: 5px solid #f44336;
padding: 30px;
margin: 0 auto;
background-color: #ffeb3b;

`;

export const FormButton  = styled.button`

display: inline-block;
margin-top: 30px;

width: 120px;
height: 30px;

font-size: 10px;
font-weight: 600;
text-transform: uppercase;
border:2px solid #FF4500;
border-radius: 4px;
box-shadow: -4px 3px 13px 1px rgba(0,0,0,0.75);
background-color: #FA8072;
cursor: pointer;

&:hover,
&focus{
    transform: scale(0.9);
}

`;

export const InputLabel = styled.label`
display: flex;
justify-content: space-between;
font-weight: 500;
width: 260px;

`;

export const FormInput = styled.input`
margin-left: 10px;
margin-bottom: 20px;

`;