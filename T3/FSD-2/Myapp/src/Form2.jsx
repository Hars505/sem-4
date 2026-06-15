import { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phoneNumber: "",
  gender: "Male",
  address: "",
  city: "",
};

function Form2() {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const passwordsMatch = formData.password === formData.confirmPassword;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!passwordsMatch) {
      alert("Passwords do not match!");
      return;
    }

    alert(
      `Your details:
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phoneNumber}
      Gender: ${formData.gender}
      City: ${formData.city}`,
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Confirm password:
        <input
          name="confirmPassword"
          type="password"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </label>
      <br />
      {!passwordsMatch && formData.confirmPassword && (
        <p style={{ color: "red" }}>Passwords do not match.</p>
      )}

      <label>
        Phone number:
        <input
          name="phoneNumber"
          type="tel"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <br />
      Gender : 
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </label>
      <br />
      <label>
        Address:
        <textarea
          name="address"
          required
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
          name="city"
          type="text"
          required
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form2;
