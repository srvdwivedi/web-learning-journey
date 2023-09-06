const Profile = () => {
  return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
  );
};

const Gallary = () => {
  return (
    <secton>
      <h1> Amazing scientists</h1>
      <Profile />{' '}
      <Profile />{' '}
      <Profile />
    </secton>
  );
};

export default Gallary;
