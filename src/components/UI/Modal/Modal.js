import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.hideCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById("modal-overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop hideCart={props.hideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
