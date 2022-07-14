export const ListBox = ({ title, words }: { title: string; words: number }) => {
  console.log(title);
  return (
    <div className="list__box">
      <h3>{title}</h3>
      <p>{words} words</p>
    </div>
  );
};
