import React from 'react';

const Result = ({content}) => <div>{renderList(content)}</div>

const renderList = (content) => content.map(element => <p>{element.username}-{element.albums}</p>)

export default Result;