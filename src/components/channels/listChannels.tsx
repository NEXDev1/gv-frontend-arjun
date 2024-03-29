import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Link, useNavigate } from "react-router-dom";
import axiosRequest from "../../api/api";
import { useModal } from "../ModalContext";

interface Channel {
  channelName: any;
  _id: string;
  name: string;
  logo: string;
  email: string;
  commission: number;
}

const ChannelList = () => {
  const [channels, setChannels] = useState<Channel[]>([]);

  const navigate = useNavigate();
  const { openModal } = useModal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          method: "get",
          url: "admin/channels",
        };

        const response: any = await axiosRequest(config);
        setChannels(response.data.listChannels);
      } catch (error) {
        console.error("Error fetching channels:", error);
      }
    };

    fetchData();
  }, []);
  console.log(channels);

  const columns: TableColumn<Channel>[] = [
    { name: "Index",width:"80px", selector: (_row: any, index: any) => index + 1 },
    {
      name: "Logo",
      width:"150px",
      cell: (row: Channel) => (
        <img
          src={row.logo}
          alt={row.name}
          // style={{ width: "50px", height: "auto" }}
          style={{
            width: "40px",
            height: "auto",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        />
      ),
   },
    { name: "Name",width:"200px", selector: (row: { name: any }) => row.name },
    { name: "E-mail",width:"250px", selector: (row: { email: any }) => row.email },
    {
      name: "Commission %",
      selector: (row: { commission: any }) => row.commission,
      width: "200px",
    },
    {
      name: "Action",
      cell: (row: Channel) => (
        <div>
          <button
            onClick={() => handleEdit(row)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
            Delete
          </button>
          <button
            onClick={() => generateInvoice(row)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
            Invoice{" "}
          </button>
        </div>
      ),
    },
  ];

  const data = channels.map((channel, index) => ({
    _id: channel._id,
    index: index + 1,
    name: channel.channelName,
    logo: channel.logo,
    channelName: channel.channelName,
    email: channel.email,
    commission: channel.commission,
  }));

  const handleEdit = (row: Channel) => {
    // Handle edit action
    console.log("Edit row:", row);
    navigate(`/channels/edit-channel/${row._id}`);
  };

  const handleDelete = async (row: Channel) => {
    const confirmed = window.confirm("Are you sure you want to delete this Channel ?")
    if (!confirmed) return;
    try {
      const config = {
        method: "delete",
        url: `admin/channel/${row._id}`,
        // data: row._id,
      };

      const response: any = await axiosRequest(config);

      setChannels(response.data.listChannels);

      console.log("Channel deleted successfully");
      alert("Channel deleted successfully");
    } catch (error) {
      console.error("Error deleting channel:", error);
    }
  };

  const generateInvoice = async (row: Channel) => {
    // navigate(`/invoice`);
    // navigate(`/invoice/${row._id}`);
    openModal();
    try {
      const config = {
        method: "get",
        url: `admin/invoice/${row._id}`,
        // data: row._id,
      };
      const response: any = await axiosRequest(config);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching channels:", error);
    }
  };

  return (
    <>
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Channels List
          </h1>


          <Link
            to="/channels/add-channel"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            >
             {/* className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 mx-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-5"
            > */}
            Add Channel
          </Link>
        </div>
        <div className="flex flex-col mt-10">
          <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            responsive
          />
        </div>
       
      </div>
    </>
  );
};

export default ChannelList;
