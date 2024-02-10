import { useEffect } from "react";

interface GreetingProps {
    name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {

    // useEffect(() => {
    //     //Side effect code here
    //     const fetchData = async () => {
    //         const response = await fetch("https://api.example.com/data");
    //         const data = await response.json();
    //         console.log(data);
    //     }

    //     fetchData();
    //     return () => {
    //       // Any cleanup code (e.g., clearing timeouts, cancelling subscriptions) goes here
    //     };
    // }, [])

    useEffect (() => {
        const timer = setTimeout(() => {
            console.log('Timer expired');
        }, 1000);

        //cleanup function
        return () => {
            clearTimeout(timer);
        };
    }, []);
    return <h1>Hello {name}!</h1>
};

export default Greeting;