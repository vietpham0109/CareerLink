import React, { useEffect } from "react";
import Static from "../../components/dashboardCompany/Static";
import ChartLeft from "../../components/dashboardCompany/ChartLeft";
import ChartRight from "../../components/dashboardCompany/ChartRight";

function Dashboard(props) {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }, [])


  return (
    <div>
      <Static />
      <div className="row" style={{ margin: '0 100px 50px' }}>
        <div className="col-5">
          <ChartLeft />
        </div>
        <div className="col-7">
          <ChartRight />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
