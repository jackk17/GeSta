import loginBack from '../../../images/login.jpg'
export const forme={
    body:{
        margin:'0',
        padding:'0',
        fontFamily:'sans-serif',
        background:'black'
    },
    box:{
        width:'300px',
        padding:'4',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
        backgroundImage:`url(${loginBack})`,
        textAlign: 'center',
        fontFamily:'perpetua',
        fontSize:'20px'
    },
    input:{
        border:'4',
        background:'white',
        display:'block',
        margin:'20px auto',
        textAlign:'center',
        fontFamily:'perpetua',
        fontSize:'20px'
    }
}