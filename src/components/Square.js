export default function Square({ value, clicked }) {
  return (
    <button onClick={clicked} className="square">
      {value}
    </button>
  );
}
