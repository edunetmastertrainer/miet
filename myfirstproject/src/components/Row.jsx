export default function Row({ name, branch }) {
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{branch}</td>
      </tr>
    </>
  );
}
