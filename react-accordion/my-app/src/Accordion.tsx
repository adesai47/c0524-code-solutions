import { useState } from 'react';
import TopicCard from './TopicCard';

interface Topic {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  topics: Topic[];
}

function Accordion({ topics }: AccordionProps) {
  const [openTopicId, setOpenTopicId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenTopicId(openTopicId === id ? null : id);
  };

  return (
    <div>
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={topic.id === openTopicId}
          onToggle={() => handleToggle(topic.id)}
        />
      ))}
    </div>
  );
}

export default Accordion;
