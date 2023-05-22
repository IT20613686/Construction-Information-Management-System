import React from 'react'
import './ViewHardware.css'

export const EditHardware = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    return (
      <tr>
        <td></td>
        <td></td>
        <td>
          <input
            type="text"
            required="required"
            // placeholder="Enter product name..."
            name="address"
            value={editFormData.address}
            onChange={handleEditFormChange}
          />
        </td>
        <td>
          <input
            type="text"
            required="required"
            // placeholder="Enter unit price..."
            name="contact"
            value={editFormData.contact}
            onChange={handleEditFormChange}
          />
        </td>
        <td></td>
        <td>
          <button className='Btn' type="submit">Save</button>
          <button className='Btn' type="button" onClick={handleCancelClick}>
            Cancel
          </button>
        </td>
      </tr>
    );
};
