function Form() {
  function demo() {
    alert("Your Details Had Been Submitted");
  }
  return (
    <>
      <form onSubmit={demo}>
        Name: <input name="text" id="#j2" type="text" required /> <br />
        E-mail: <input name="email" type="email" required />
        <br />
        Phone number : <input type="number" name="PhoneNumber" required />
        <br />
        Gender : <input type="radio" name="Gender" value="Male" required/> Male 
        <input type="radio" name="Gender" value="Female" /> Female<br/>
        <button type="submit" name="submit" value="submit">
          Submit
        </button>
      </form>
    </>
  );
}
export default Form;
