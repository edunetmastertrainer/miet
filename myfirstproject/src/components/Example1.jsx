/* eslint-disable react/prop-types */
import Row from "./Row";
export default function Example1({ students }) {
  return (
    <>
      <h1>Example-1</h1>
      <p>I am going to use Props</p>
      <table border={2} width={200}>
        <tr>
          <th>Name</th>
          <th>Branch</th>
        </tr>
        {students.map((obj) => {
          return <Row name={obj.name} branch={obj.branch} />;
        })}
      </table>
    </>
  );
}
