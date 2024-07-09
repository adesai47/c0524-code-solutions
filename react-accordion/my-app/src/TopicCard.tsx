import './TopicCard.css';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type TopicCardProps = {
  topic: Topic;
  isOpen: boolean;
  onToggle: () => void;
};

export function TopicCard({ topic, isOpen, onToggle }: TopicCardProps) {
  return (
    <div className="topic-card">
      <div className="topic-title" onClick={onToggle}>
        {topic.title}
      </div>
      {isOpen && <div className="topic-content">{topic.content}</div>}
    </div>
  );
}
