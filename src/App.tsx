import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [nameState, setNameState] = useState("");
    
    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value;
        setNameState(enteredName);
    };

    return (
        <div className="bg-zinc-800 h-screen w-screen">
            <div className="w-2/3 max-w-3xl mx-auto h-full text-white text-center">
                <h1 className="text-3xl pt-10" > Click the Fox! Game</h1>
                <form className="mt-4">
                    <label id="name" className="">
                        Name:
                        <input
                            className="text-black w-36 rounded px-1 m-4"
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            value={nameState}
                            onChange={inputHandler}
                        />
                        <button type="submit" className="py-2 px-3 rounded border">submit</button>
                    </label>
                </form>
            </div>
        </div>
    );
}

export default App;
