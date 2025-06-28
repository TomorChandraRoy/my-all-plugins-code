import { useEffect, useState } from "react";

const Block = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
        country: "",
        bio: "",
    });

    const url = bpasAdminPanel?.ajax_url;
    const nonce = bpasAdminPanel?.nonce;

    const formSubmit = (e) => {
        e.preventDefault();
        fetch(`${url}?action=form_submit_data&submitnonce=${nonce}&name=${formData?.name}&email=${formData?.email}&age=${formData?.age}&gender=${formData?.gender}&country=${formData?.country}&bio=${formData?.bio}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data?.data?.data?.name);
                if (data.success === true) {
                    alert("Form submitted successfully!");
                } else {
                    alert("Form submission failed!");
                }
            })
    }

    useEffect(() => {
        fetch(`${url}?action=get_form_data&nonce=${nonce}`)
            .then((res) => res.json())
            .then((data) => {
                setFormData(data.data);
            })
    }, []);
   
    return (
        <form onSubmit={formSubmit} className="formStyle">
            <label className="labelStyle">Name</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="inputStyle"
                placeholder="Enter your name"
                required
            />

            <label className="labelStyle">Email</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="inputStyle"
                placeholder="Enter your email"
                required
            />

            <label className="labelStyle">Age</label>
            <input
                type="number"
                name="age"
                value={formData.age}
                onChange={e => setFormData({ ...formData, age: e.target.value })}
                className="inputStyle"
                placeholder="Enter your age"
                required
            />

            <label className="labelStyle">Gender</label>
            <div className="radioGroupStyle">
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === "Male"}
                        onChange={e => setFormData({ ...formData, gender: e.target.value })}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === "Female"}
                        onChange={e => setFormData({ ...formData, gender: e.target.value })}
                    />
                    Female
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        checked={formData.gender === "Other"}
                        onChange={e => setFormData({ ...formData, gender: e.target.value })}
                    />
                    Other
                </label>
            </div>

            <label className="labelStyle">Country</label>
            <select
                name="country"
                value={formData.country}
                onChange={e => setFormData({ ...formData, country: e.target.value })}
                className="inputStyle"
                required
            >
                <option value="">Select Country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="Other">Other</option>
            </select>

            <label className="labelStyle">Bio</label>
            <textarea
                name="bio"
                value={formData.bio}
                onChange={e => setFormData({ ...formData, bio: e.target.value })}
                rows={4}
                className="inputStyle"
                placeholder="Write a short bio..."
            />
            <button type="submit" className="buttonStyle">Submit</button>
        </form>
    )
}

export default Block;