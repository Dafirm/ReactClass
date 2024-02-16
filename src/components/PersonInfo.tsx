
interface PersonInfoProps {
    name: string;
    age: number;
    email: string;
}


const PersonInfo: React.FC<PersonInfoProps> = ({ name, age, email }) => {

    return(
        <div>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Email:{email}</p>

        </div>
    );
};

export default PersonInfo;

