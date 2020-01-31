import styled from 'styled-components';

export const Container = styled.div`

`;

export const NavHeader = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 1200px) {
        flex-direction: column;
    }
`;

export const NavLink = styled.button`
    padding: 10px 30px 10px 30px;   
    color:  ${props => ( props.checked ? '#fff' : '#000' )}; 
    background: ${props => ( props.checked ? '#343a40' : '#eee' )};  
    margin-left: 20px;
    margin-bottom: 10px;    
    border: none;
    border-radius: 5px;
    cursor:pointer;
    &:hover{
        opacity: 0.7;
    }
`;

export const TextResult = styled.textarea`
    width: 100%;
    height: 500px;
`;


export const ButtonUpload = styled.button`
    background: #343a40;
    color: #fff;
    border: 0;
    padding-left: 10px;    
    padding-right: 10px;
    border-radius: 4px;
    margin: 80px auto;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        opacity: 0.7;
    }

`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit'
}))`
    background: #343a40;
    color: #fff;
    border: 0;
    padding: 10px;
    border-radius: 4px;
    margin: 20px auto;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        opacity: 0.7;
    }
`;

export const BackButton = styled.button`
    background: none;
    border: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    &:hover {
        opacity: 0.7;
    }

`;