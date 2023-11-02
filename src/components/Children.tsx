interface Props {
  parentState: string;
  setParentState: React.Dispatch<React.SetStateAction<string>>;
}

export const Children = ({ parentState, setParentState }: Props) => {
  return (
    <>
      <h2>This is a Children and I want to show the parent state inside</h2>
      <div>{parentState}</div>
      <button onClick={() => setParentState("Hello")}>
        Change Parent State
      </button>
    </>
  );
};
