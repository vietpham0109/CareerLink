import React, { useEffect, useState } from "react";
import { Table, Space, Modal } from "antd";
import { EditOutlined, DeleteOutlined, BarChartOutlined } from "@ant-design/icons";
import { postDataAPI } from "../../utils/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { deleteJobPost } from "../../redux/actions/listJobAction";
import dateFormat from "dateformat";
import ModalUpdate from './ModalUpdate'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function JobPosting() {
  const { t } = useTranslation();
  const { auth, alert } = useSelector((state) => state);
  const [jobs, setJobs] = useState([]);
  const [showModalDelete, setShowDelete] = useState(false);
  const [dataSelected, setSelected] = useState({});
  const [showModalUpdate, setShowUpdate] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchJobs = async () => {
      if (auth.user) {
        const res = await postDataAPI(`get-jobs-by-company/${auth.user?._id}`);
        if (res.data) {
          let newArr = [];
          res.data.map((element) => {
            newArr.push({
              ...element,
              industry: element.industry.title,
              expiring_date: dateFormat(
                element.expiring_date,
                "paddedShortDate"
              ).toString(),
              createdAt: dateFormat(
                element.createdAt,
                "paddedShortDate"
              ).toString(),
            });
            return 0;
          });
          setJobs([...newArr]);
        }
      }
    };
    fetchJobs();
  }, [alert.success, auth.user]);

  const columns = [
    {
      title: t("Jobtitle"),
      dataIndex: "job_title",
    },
    {
      title: t("industry"),
      dataIndex: "industry",
    },
    {
      title: t("Level"),
      dataIndex: "level",
    },
    {
      title: "Create date",
      dataIndex: "createdAt",
    },
    {
      title: t("Expiringdate"),
      dataIndex: "expiring_date",
    },
    {
      title: "Action",
      render: (text, record) => (
        <Space size="middle">
          <EditOutlined onClick={() => handleOpenModalUpdate(record)} />
          <DeleteOutlined onClick={() => handleOpenModalDelete(record)} />
          <Link style={{ color: 'black' }} to={`/company/detail-job/${record._id}`}><BarChartOutlined /></Link>
        </Space>
      ),
    },
  ];

  const handleOpenModalDelete = (record) => {
    setSelected(record);
    setShowDelete(true);
  };
  const handleConfirmDelete = () => {
    dispatch(deleteJobPost(dataSelected));
    setShowDelete(false);
  };

  const handleOpenModalUpdate = (record) => {
    setSelected(record)
    setShowUpdate(true)
  }



  return (
    <>
      {showModalDelete && (
        <Modal
          title={t("Confirmdelete")}
          visible={showModalDelete}
          onCancel={() => setShowDelete(false)}
          onOk={handleConfirmDelete}
        >
          <p>{t("Areyousure")}</p>
        </Modal>
      )}
      {
        showModalUpdate && <ModalUpdate dataJob={dataSelected} visible={showModalUpdate} setVisible={setShowUpdate} />
      }
      <Table
        columns={columns}
        dataSource={jobs}
        pagination={{ pageSize: 4 }}
        bordered
      />
    </>
  );
}

export default JobPosting;
