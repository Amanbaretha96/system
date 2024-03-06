const Pankajpage = (props) => {
  const { call, setCall, unnon, setUnnon } = props;

  const Yet = () => {
    setCall("hello");
    setUnnon("ha");
  };
  return (
    <div>
      <button onClick={Yet}> deail call </button>
    </div>
  );
};
export default Pankajpage;
