import Link from "next/link";
import { Person } from "../../styles/styles";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      people: data,
    },
  };
};

const People = ({ people }) => {
  return (
    <div>
      <h1>People</h1>
      {people.map((person) => (
        <Person key={person.id}>
          <Link href={`/people/${person.id}`}>
            <a>
              <h3>{person.name}</h3>
            </a>
          </Link>
        </Person>
      ))}
    </div>
  );
};

export default People;
