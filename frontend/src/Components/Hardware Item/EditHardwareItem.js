import React from 'react'

export const EditHardwareItem = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>
        <input
          type="text"
          required="required"
          name="price"
          value={editFormData.price}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          name="quantity"
          value={editFormData.quantity}
          onChange={handleEditFormChange}
        />
      </td>
      <td></td>
      <td>
        <button className="Btn" type="submit">
          Save
        </button>
        <button className="Btn" type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};
