import { useState } from 'react';
import { TopicCard } from './TopicCard';
import './Accordion.css';

type Topic = {
  id: number;
  title: string;
  content: string;
};

type AccordionProps = {
  topics: Topic[];
};

export function Accordion({ topics }: AccordionProps) {
  const [openTopicId, setOpenTopicId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenTopicId(openTopicId === id ? null : id);
  };

  return (
    <div className="accordion">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={openTopicId === topic.id}
          onToggle={() => handleToggle(topic.id)}
        />
      ))}
    </div>
  );
}
