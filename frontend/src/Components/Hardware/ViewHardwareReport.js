import React from 'react'

export const ViewHardwareReport = ({hardware}) => {
  return (
    <>
      <tr>
        <td>{hardware.hardwareID}</td>
        <td>{hardware.hardwareName}</td>
        <td>{hardware.address}</td>
        <td>{hardware.contact}</td>
        <td>{hardware.email}</td>
      </tr>
    </>
  );
}
