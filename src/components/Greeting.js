
const Greeting=({isLogin,name})=>{
return(
    isLogin ? <h1>Welcome {name}</h1>:<h1>Please Login</h1>
);
}


export default Greeting;