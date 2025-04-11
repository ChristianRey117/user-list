import "./search.css";

export default function Search({ onChange }: any) {
  return (
    <>
      <form>
        <label>Search</label>
        <input
          required={true}
          pattern=".*\S.*"
          type="search"
          className="input"
          id="search"
          onChange={(value) => {
            onChange(value.target.value);
          }}
        />
        <span className="caret"></span>
      </form>
    </>
  );
}
