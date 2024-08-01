import { useState } from "react";
import { Input, Spacer } from "@nextui-org/react";

function SearchForm({ onSubmit }) {
  const [bookInfo, setBookInfo] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(bookInfo);
  };

  return (
    <form className="mt-10 flex justify-center" onSubmit={handleOnSubmit}>
      <div className="sm:col-span-4">
        <label
          htmlFor="book"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Search Book Info
        </label>
        <Spacer y={0.5} />
        <Input
          type="text"
          name="book"
          id="book"
          fullWidth
          bordered
          placeholder="The Lord Of The Rings"
          value={bookInfo}
          onChange={(e) => setBookInfo(e.target.value)}
        />
        <Spacer y={1} />
        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            style={{ backgroundColor: '#0070f3', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
