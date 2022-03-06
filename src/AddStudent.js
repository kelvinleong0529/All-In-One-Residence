import { useState } from "react";

const AddStudent = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [marks, setMarks] = useState('');
    const [major, setMajor] = useState('computer science');
    const [minor, setMinor] = useState('accounting');

    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { name, number, marks, major, minor };

        setIsPending(true);

        fetch('http://localhost:8000/student', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student),
        }).then(() => {
            setIsPending(false);
        })
    }

    return (
        <div className="container">
            <div className="Form">
                <h1>Add a new student</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" for="FormInputName">Name</label>
                        <input className="form-control" id="FormInputName" type='text' placeholder="Kelvin Leong" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Number:</label>
                        <input className="form-control" type='text' required value={number} onChange={(e) => setNumber(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Marks:</label>
                        <input className="form-control" type='text' required value={marks} onChange={(e) => setMarks(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label>Major:</label>
                        <select className="btn btn-secondary dropdown-toggle" value={major} onChange={(e) => setMajor(e.target.value)}>
                            <option value="computer science">computer science</option>
                            <option value="business">business</option>
                            <option value="accounting">accounting</option>
                            <option value="civil engineering">civil engineering</option>
                        </select >
                    </div>
                    <div className="mb-3">
                        <label>Minor:</label>
                        <select className="btn btn-secondary dropdown-toggle" value={minor} onChange={(e) => setMinor(e.target.value)}>
                            <option value="computer science">computer science</option>
                            <option value="business">business</option>
                            <option value="accounting">accounting</option>
                            <option value="civil engineering">civil engineering</option>
                        </select>
                    </div>
                    {!isPending && <button type="button" className="btn btn-primary">Add Student</button>}
                    {isPending && <button type="button" className="btn btn-primary" disabled>Adding new student...</button>}
                </form>
            </div>
        </div>
    );
}

export default AddStudent;