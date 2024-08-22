import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ContentProp {
  content: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Content({
  content,
  className = "",
  style = {},
}: ContentProp) {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  const parseContent = () => {
    const parts = content.split(/(<Link to="[^"]+"[^>]*>.*?<\/Link>)/g);

    return parts.map((part, index) => {
      if (part.startsWith('<Link')) {
        const linkMatch = part.match(/<Link to="([^"]+)"/);
        const linkTextMatch = part.match(/>(.*?)<\/Link>/);
        const classMatch = part.match(/className="([^"]+)"/);

        if (linkMatch && linkTextMatch) {
          const to = linkMatch[1];
          const linkText = linkTextMatch[1];
          const additionalClassName = classMatch ? classMatch[1] : "";

          // Default link styles
          const baseLinkStyle = {
            backgroundColor: hoveredLink === index ? '#4D4D4F' : '#3A3B3C',
            color: 'white',
            padding: '5px 10px',
            textDecoration: 'none',
            display: 'inline-block',
            transition: 'background-color 0.3s',
          };

          return (
            <Link
              key={index}
              to={to}
              className={`mx-1 ${additionalClassName}`}
              style={baseLinkStyle}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {linkText}
            </Link>
          );
        }
      }
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
    });
  };

  return (
    <div
      className="container"
      style={{
        height: "100%",
        width: "100%",
        padding: "50px 60px 0px",
      }}
    >
      <div className={`${className}`} style={{ ...style }}>
        {parseContent()}
      </div>
    </div>
  );
}
