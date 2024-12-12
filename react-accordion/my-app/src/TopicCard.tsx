interface Topic {
  id: number;
  title: string;
  content: string;
}

interface TopicCardProps {
  topic: Topic;
  isOpen: boolean;
  onToggle: () => void;
}

function TopicCard({ topic, isOpen, onToggle }: TopicCardProps) {
  return (
    <div>
      <h3 onClick={onToggle} style={{ cursor: 'pointer' }}>
        {topic.title}
      </h3>
      {isOpen && <p>{topic.content}</p>}
    </div>
  );
}

export default TopicCard;
