const position = (initText) => {
  let objPos = [];
  for (let i = 0; i < initText.length; i++) {
    if (initText[i] === "$") {
      objPos.push({ name: `$${initText[i + 1]}` });
    }
  }
  return objPos;
};

const SubCriteria = ({ cr }) => {
  const linkPosition = position(cr.text);
  let newText = cr.text;

  linkPosition.forEach((ele) => {
    let replaceText = "";

    if (cr.variable[ele.name].default_value) 
    {
      replaceText = 
      `<a href='/page'> 
        (${
          cr.variable[ele.name].default_value
        }) 
      </a>`;
    } else 
    {
      replaceText = 
        `<a href='/page'>
          (${cr.variable[ele.name].values[0]})
        </a>`;
    }
    
    newText = newText.replace(`${ele.name}`, replaceText);
  });

  return <div dangerouslySetInnerHTML={{ __html: newText }} />;
};

export default SubCriteria;
