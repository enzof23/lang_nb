export const NewItem = () => {
  return (
    <div className="newItem__container">
      <div className="title__header">title</div>
      <div className="newItem__inputBox">
        <div className="newItem__input">
          <input type="text" placeholder="Enter new word" />
          <p>WORD</p>
        </div>
        <div className="newItem__input">
          <input type="text" placeholder="Enter translation" />
          <p>TRANSLATION</p>
        </div>
        <div className="newItem__save">Save</div>
      </div>
    </div>
  );
};
