import React from 'react'

export const ViewHardwareItemReport = ({item}) => {
  return (
    <>
      <tr>
        <td>{item.itemID}</td>
        <td>{item.itemName}</td>
        <td>{item.brandName}</td>
        <td>{item.hardwareName}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td>
          {(() => {
            if (item.quantity <= 10) {
              return (
                <div
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Low
                </div>
              );
            } else {
              return (
                <div
                  style={{
                    backgroundColor: "Green",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Available
                </div>
              );
            }
          })()}
        </td>
      </tr>
    </>
  );
}
