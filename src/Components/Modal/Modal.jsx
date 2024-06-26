// import Close from "./times-solid.svg";
import "./Modal.scss"
const Modal = ({ show, close, title, children }) => {
    console.log("call",show)
    return (
        <>
            {
                show ?

                    <div
                        className="modalContainer"
                        //this is for close the toggle from outside click 
                    onClick={() => close()}
                    >
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <header className="modal_header">
                                <h2 className="modal_header-title">{title}</h2>
                                {/* <button className="close" onClick={() => close()}>
                                       <img src={Close} alt="close" />
                                    </button> */}
                            </header>
                            <main className="modal_content">
                                {/* {children} */}
                               <p>asd</p>
                            </main>
                            <footer className="modal_footer">
                                <button className="modal-close" onClick={() => close()}>
                                    Cancel
                                </button>

                                {/* <button className="submit">Submit</button>   */}
                            </footer>
                        </div>
                    </div>
                    : null
            }
        </>
    );
};

export default Modal;