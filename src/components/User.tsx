export const User = ({ user }: { user: { id: number; name: string } }) => {
  const handleClick = (user: { id: number; name: string }) => {
    alert(JSON.stringify(user));
  };

  const modifyUser = (user: { id: number; name: string }) => {
    user.name = "Modified";
  };

  return (
    <>
      <button onClick={() => handleClick(user)}>Show me the user</button>
      <button onClick={() => modifyUser(user)}>Modify user</button>
    </>
  );
};
