function Indicators({ count }: { count: number }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(<button key={i}>{i + 1}</button>);
  }
  return <div>{buttons}</div>;
}

export default Indicators;
