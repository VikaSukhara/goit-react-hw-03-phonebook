export const Filter = ({ find }) => {
  return (
    <div>
      <p
        style={{
          fontSize: '18px',
        }}
      >
        Find contact by name
      </p>
      <input
        type="text"
        onChange={find}
        style={{
          border: '1px solid black',
          padding: '3px 3px',
          borderRadius: '7px',
        }}
      />
    </div>
  );
};
