import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import TextEditor from './TextEditor';

// Define item types for drag and drop
const ItemTypes = {
  SECTION: 'section'
};

const Section = ({ id, type, content, onEdit }) => {
  const [, drag] = useDrag({
    type: ItemTypes.SECTION,
    item: { id, type }
  });

  return (
    <div ref={drag} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd' }}>
      {type === 'text' && <TextEditor content={content} onChange={onEdit} />}
      {type === 'header' && <h2>{content}</h2>}
      {type === 'footer' && <footer>{content}</footer>}
    </div>
  );
};

const EmailBuilder = () => {
  const [sections, setSections] = useState([]);
  const [isOver, setIsOver] = useState(false);

  const [, drop] = useDrop({
    accept: ItemTypes.SECTION,
    drop: (item) => handleDrop(item),
    hover: () => setIsOver(true),
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  const handleDrop = (item) => {
    // Create a new section based on the dropped item type
    const newSection = {
      id: Math.random(),
      type: item.type,
      content: item.type === 'header' ? 'Header' : 'Content'
    };
    setSections((prev) => [...prev, newSection]);
  };

  const handleEdit = (id, newContent) => {
    setSections((prev) => prev.map((section) => 
      section.id === id ? { ...section, content: newContent } : section
    ));
  };

  return (
    <div ref={drop} style={{ padding: '20px', minHeight: '400px', border: '2px dashed #ccc' }}>
      <h1>Drag and Drop Email Builder</h1>
      
      <div>
        <button onClick={() => handleDrop({ type: 'header' })}>Add Header</button>
        <button onClick={() => handleDrop({ type: 'text' })}>Add Text Block</button>
        <button onClick={() => handleDrop({ type: 'footer' })}>Add Footer</button>
      </div>

      {sections.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          type={section.type}
          content={section.content}
          onEdit={(newContent) => handleEdit(section.id, newContent)}
        />
      ))}
    </div>
  );
};

export default EmailBuilder;
