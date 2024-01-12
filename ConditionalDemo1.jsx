function Greeting(){
    return(
        <h1>Hello! I am standard function.</h1>
    );
}

const ArrowGreeting = () => {
return(
    <h1>Hello! I am an arrow function.</h1>
);

}


function ShinyButton(){
    const handleClick = () => {
        alert("Boom hehe");
    }
    return(
        <button onClick={handleClick}>
            Don't click the bomb!
        </button>
    );
}

export default ShinyButton;