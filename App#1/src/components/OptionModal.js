import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
  <Modal
    // !! - is used to convert undefined to true and vice versa
    isOpen={!!props.selectedOption}
    contentLabel='Option Selected'
    onRequestClose={props.closeModal}
  >
    <h3>Option Selected</h3>
    {props.selectedOption? <p>{props.selectedOption}</p> : null}
    <button onClick={props.closeModal}>Thanks!</button>
  </Modal>
)

export default OptionModal
