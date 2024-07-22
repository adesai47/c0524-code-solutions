interface IndicatorsProps {
  count: number;
  currentIndex: number;
  onSelect: (index: number) => void;
}

function Indicators({ count, currentIndex, onSelect }: IndicatorsProps) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => onSelect(i)}
        style={{ fontWeight: i === currentIndex ? 'bold' : 'normal' }}>
        {i + 1}
      </button>
    );
  }
  return <div>{buttons}</div>;
}

export default Indicators;
