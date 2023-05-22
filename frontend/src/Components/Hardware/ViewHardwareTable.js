import React from 'react'
import './ViewHardware.css'

export const ViewHardwareTable = ({ hardware, handleEditClick, handleDeleteClick }) => {
    return (
      <>
        <tr>
          <td>{hardware.hardwareID}</td>
          <td>{hardware.hardwareName}</td>
          <td>{hardware.address}</td>
          <td>{hardware.contact}</td>
          <td>{hardware.email}</td>
          <td>
            <button type="button" className='Btn' onClick={(e) => handleEditClick(e, hardware)}>
              Edit
            </button>
            <button
              type="button"
              className='Btn'
              onClick={() => handleDeleteClick(hardware._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      </>
    );
};
