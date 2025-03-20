import { useState } from 'react';

function App() {
    const [hello, setHello] = useState('Hello World');
    return (
        <>
            <h1>{hello}</h1>
            <button onClick={() => setHello('Hello World')}>Click me</button>
        </>
    );
}

export default App;
