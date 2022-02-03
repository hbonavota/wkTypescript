import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
 title: string;
}

function App({title}:AppProps) {
	return <div>Henry Workshop - {title}</div>;
}

ReactDOM.render(<App title="Typescript" />, 
document.querySelector('#root'));