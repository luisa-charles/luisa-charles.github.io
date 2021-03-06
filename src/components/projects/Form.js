import React from 'react';

const Form = ({ handleSubmit, handleChange, data }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
                <label htmlFor="name">Name</label>
                <input
                    className="input"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                />
                {/* {data.errors.name && <small>{data.errors.name}</small>} */}
            </div>
            <div className="field">
                <label htmlFor="name">Image</label>
                <input
                    className="input"
                    placeholder="Image"
                    name="image"
                    onChange={handleChange}
                    value={data.image}
                />
                {/* {data.errors.image && <small>{data.errors.image}</small>} */}
            </div>
            <div className="field">
                <label htmlFor="name">Text</label>
                <input
                    className="input"
                    placeholder="Text"
                    name="text"
                    onChange={handleChange}
                    value={data.text}
                />
                {/* {data.errors.text && <small>{data.errors.text}</small>} */}
            </div>
            <div className="field">
                <label htmlFor="name">Type</label>
                <input
                    className="input"
                    placeholder="Type"
                    name="type"
                    onChange={handleChange}
                    value={data.type}
                />
                {/* {data.errors.type && <small>{data.errors.type}</small>} */}
            </div>
            <div className="field">
                <label htmlFor="name">Materials</label>
                <input
                    className="input"
                    placeholder="Materials"
                    name="materials"
                    onChange={handleChange}
                    value={data.materials}
                />
                {/* {data.errors.materials && <small>{data.errors.materials}</small>} */}
            </div>

            <button className="button is-primary">Submit</button>
        </form>
    );
};

export default Form;
