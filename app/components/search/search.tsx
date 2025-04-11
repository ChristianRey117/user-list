import "./search.css";

export default function Search() {
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
        />
        <span className="caret"></span>
      </form>
    </>
  );
}
