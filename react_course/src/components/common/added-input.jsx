const AddedInput = () => {
  const columns = [
    {
      label: "Title",
      path: "title",
    },
    { label: "Category", path: "category.name" },
    { label: "Price", path: "price" },
    { label: "Amount", path: "amount" },
    { label: "Unit", path: "unit" },
  ];
  return (
    <>
      {columns.map(({ label }) => {
        return (
          <div>
            <label htmlFor="label">{label}</label>
            <input id="label" className="form-control" />
          </div>
        );
      })}
      <button className="btn-sm float-right btn-success my-3">Add</button>
    </>
  );
};

export default AddedInput;
