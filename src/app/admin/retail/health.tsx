import Loading from '@/app/loading';
import { IconAdd } from '@/assets/svg/icon-add';
import { IconEdit } from '@/assets/svg/icon-edit';
import { IconRefresh } from '@/assets/svg/icon-refresh';
import { db } from "@/firebase/firebase";
import {
  Button
} from '@chakra-ui/react';
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import DataTable from 'react-data-table-component';
import { Modale } from './modal';

export default function Health() {

  const [modalOpen, setModalOpen] = useState(false);
  const columns = [
    {
      name: "Title",
      selector: ({ row }: any) => row.title
    },
    {
      name: "Title2",
      selector: ({ row }: any) => row.title2
    },
    {
      name: "TitleCard",
      selector: ({ row }: any) => row.titleCard
    },
    {
      name: "Type",
      selector: ({ row }: any) => row.type
    },
    {
      name: "TypeCode",
      selector: ({ row }: any) => row.typeCode
    },
    {
      name: "Action",
      cell: ({ row }: any) => <Button onClick={openModal}><IconEdit /><span style={{ display: 'flex', paddingLeft: "10px" }}> Edit</span></Button>
    }
  ];
  const [hData, setHdata] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const filter = where("typeCode", "==", "HEALTH");
      let q = query(collection(db, "citizens"), filter);
      const data: any = [];
      await getDocs(q).then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const tmp = doc.data();
          data.push({
            title: tmp.title, title2: tmp.title2, titleCard: tmp.titleCard,
            type: tmp.type, typeCode: tmp.typeCode
          });
        })
        setHdata(data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openModal = (event: any) => {
    console.log(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {modalOpen ? <Modale onButtonClick={openModal(hData)} docId={"1"} /> : ''}
      {loading ? <Loading /> : (<DataTable
        title={<span style={{ fontFamily: "Cascadia Mono" }}>Health insurance</span>}
        columns={columns}
        data={hData}
        pagination
        fixedHeader
        fixedHeaderScrollHeight='450px'
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        selectableRowsSingle
        actions={
          <div>
            <Button onClick={openModal}><IconAdd /><span style={{ display: 'flex' }}>Add</span></Button>
            <Button onClick={fetchData}><IconRefresh /><span style={{ display: 'flex' }}></span></Button>
          </div>}
        subHeader
      />)}
    </div>
  );
}

