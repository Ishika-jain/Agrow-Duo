export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "1",
    headerName: "Farmer Name",
    width: 100,
  },

  {
    field: "2",
    headerName: "Address",
    width: 100,
  },
  {
    field: "3",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "4",
    headerName: "Product",
    width: 100,
  },{
    field: "5",
    headerName: "Price per day",
    width: 100,
  },
  {
    field: "6",
    headerName: "Email",
    width: 100,
  },
  {
    field: "7",
    headerName: "Password",
    width: 100,
  },
];
 