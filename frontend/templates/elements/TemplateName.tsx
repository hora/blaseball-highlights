import React  from 'react';

interface TemplateNameProps {
  classes?: string;
}

function TemplateName({ classes } : TemplateNameProps) {

  classes = classes || '';
  let cmpClasses = `${classes} `;

  return (
    <div className={cmpClasses}>
      TemplateName Component
    </div>
  );
}

export default TemplateName;

