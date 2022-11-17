import "../styles/modal.css";

const Modals = ({ closeModal, deleteUser }) => {
  return (
    <div className="background-modal">
      <div className="container-modal">
        <button
          onClick={() => {
            closeModal(false);
          }}
        >
          {" "}
          x{" "}
        </button>
        <div className="title">
          <h1>¿Are you sure you want to continue?</h1>
        </div>
        <div className="body">
          <p>Press one of these two options to continue</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            Cancel
          </button>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Modals;
