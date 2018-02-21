import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
  <Modal
    // !! - is used to convert undefined to true and vice versa
    isOpen={!!props.selectedOption}
    contentLabel='Option Selected'
    onRequestClose={props.closeModal}
    ariaHideApp={false}
    // will allow for the ease-out to be completed
    closeTimeoutMS={200}
    className='modal'
  >
    <h3 className='modal__title'>Option Selected</h3>
    {props.selectedOption ?
      <p className='modal__body'>
        {props.selectedOption}
      </p>
      : null}
    <button
      className='button'
      onClick={props.closeModal}>
      Thanks!
    </button>
  </Modal>
)

export default OptionModal
