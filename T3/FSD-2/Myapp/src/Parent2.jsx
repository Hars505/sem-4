function Parent2() {
  const employees = [
    { name: "Harshil", salary: 90000, id: 1, rating: "Good" },
    { name: "Shrey", salary: 10000, id: 2, rating: "Good" },
    { name: "Vrutik", salary: 5000, id: 3, rating: "Good" },
    { name: "Dhairya", salary: 60000, id: 4, rating: "Good" },
    { name: "Dharm", salary: 4000, id: 5, rating: "Good" },
  ];
  return (
    <>
      <h1>Employee Details</h1>
      {employees
        .filter((b) => b.salary == 10000)
        .map((a) => (
          <div>
            <br />
            <h2>{a.name}</h2>
            <h2>{a.id}</h2>
            <h2>{a.rating}</h2>
            <h2>{a.salary}</h2>
            <br />
          </div>
        ))}
    </>
  );
}
export default Parent2;
